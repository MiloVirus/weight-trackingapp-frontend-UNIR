import { RootState } from "../store"
import { useSelector } from "react-redux"
import { useEffect } from "react"

let data = {}

const ChartData = () => {
    
    useEffect(() => {
        const userDataSelector = useSelector((state: RootState)=> state.userData.data)
        data = userDataSelector
        console.log(userDataSelector)
    }, [])
    
    
}

console.log(data)

export default ChartData
export const lineChartData = 
{
    labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ],
    datasets: 
    [
        {
            label: "Weight (Kg)",
            data: [80, 78, 77, 79, 76, 77, 76],
            borderColor: "purple" 
        }
        
    ]
}