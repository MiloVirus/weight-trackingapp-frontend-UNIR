import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { RootState } from "../store"
import { useSelector } from "react-redux"

const Chart = () => {
  const options = {};

  const userDataSelector = useSelector((state: RootState) => state.userData.data);

  const labels = userDataSelector.map(item => item.date);
  const data = userDataSelector.map(item => item.weight)

    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );


  const lineChartData = {
    labels: labels,
    datasets: [
      {
        label: "Weight (Kg)",
        data: data,
        borderColor: "purple" 
      }    
    ]
  };

  return (
    <>
      <Line options={options} data={lineChartData}/>
    </>
  )
}

export default Chart;
