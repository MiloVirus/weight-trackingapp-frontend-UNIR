import { useSelector } from "react-redux"
import { RootState } from "../store"
import { ExcerciseCard } from "./ExcerciseCard"


const ExcercisePanel = () => {

    const excerciseData = useSelector((state: RootState) => state.excercisesData.excercises)
    console.log(excerciseData)
    
  return (
    <>
    <ExcerciseCard 
    name={excerciseData[0].name} 
    description={excerciseData[0].description} 
    difficulty={excerciseData[0].difficulty} 
    muscle_groups={excerciseData[0].muscle_groups} 
    image_url={excerciseData[0].image_url}/>
    </>
  )
}

export default ExcercisePanel