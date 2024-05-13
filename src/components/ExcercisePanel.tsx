import { useSelector } from "react-redux"
import { RootState } from "../store"


const ExcercisePanel = () => {

    const excerciseData = useSelector((state: RootState) => state.excercisesData.excercises)
  return (
    <>
    
    </>
  )
}

export default ExcercisePanel