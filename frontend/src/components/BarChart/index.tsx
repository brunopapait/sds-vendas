import { useEffect, useState } from 'react';
import axios from 'axios';

import Chart from 'react-apexcharts';
import { BASE_URL } from 'utils/request';

import { SaleSuccess } from 'types/sale';
import { round } from 'utils/format';

interface SeriesData {
  name: string;
  data: number[];
}
interface ChartData {
  labels: { categories: string[] };
  series: SeriesData[];
}

const BarChart = () => {

  const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: []
    },
    series: [
      {
        name: "",
        data: []
      }
    ]
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/sales/success-by-seller`)
      .then(response => {

        const data = response.data as SaleSuccess[];
        console.log(response.data);

        const labels = data.map(item => item.sellerName);
        const series = data.map(item => round(100.0 * (item.deals / item.visited), 1));

        setChartData({
          labels: {
            categories: labels
          },
          series: [
            {
              name: "% Sucesso",
              data: series
            }
          ]
        });
      });

  }, []);

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
  };

  return (
    <Chart
      options={{ ...options, xaxis: chartData.labels }}
      series={chartData.series}
      type='bar'
      height='240px'
    />
  );
}

export default BarChart;