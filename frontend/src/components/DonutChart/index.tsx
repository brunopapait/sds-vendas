import axios from 'axios';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/request';

interface ChartData {
  labels: string[];
  series: number[];
}

const DonutChart = () => {
  let charData: ChartData = { labels: [], series: [] };

  const mockData = {
    series: [477138, 499928, 444867, 220426, 473088],
    labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
  }

  axios.get(`${BASE_URL}/sales/amount-by-seller`)
    .then(response => {

      const data = response.data as SaleSum[];
      const labels = data.map(item => item.salerName);
      const series = data.map(item => item.sum);

      charData = { labels, series };
    });

  const options = {
    legend: {
      show: true
    }
  }

  return (
    <Chart
      options={{ ...options, labels: charData.labels }}
      series={charData.series}
      type='donut'
      height='240px'
    />
  );
}

export default DonutChart;