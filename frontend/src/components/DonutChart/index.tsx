import { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/request';

interface ChartData {
  labels: string[];
  series: number[];
}

const DonutChart = () => {
  const [charData, setChartData] = useState<ChartData>({ labels: [], series: [] });

  useEffect(() => {
    axios.get(`${BASE_URL}/sales/amount-by-seller`)
      .then(response => {

        const data = response.data as SaleSum[];
        const labels = data.map(item => item.sellerName);
        const series = data.map(item => item.sum);

        setChartData({ labels, series });
      });
  }, []);

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