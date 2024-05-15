import { useSelector } from "react-redux"
import { RootState } from "../store"
import { ExcerciseCard } from "./ExcerciseCard"
import '../styles/ExcercisePanel.css'


const ExcercisePanel = () => {

    const excerciseData = useSelector((state: RootState) => state.excercisesData.excercises)
    
  return (
    <>
    <div className="CardsContainer">
    { excerciseData.map((excercise, index) =>
      {
        return(
        
          <ExcerciseCard key={index}
          name={excercise?.name} 
          description={excercise?.description} 
          difficulty={excercise?.difficulty} 
          muscle_groups={excercise?.muscle_groups} 
          image_url={excercise?.image_url}/>
        
        )
      })
    }
    </div>
    <h2>Your excercise plan</h2>
    <div className="CustomPlanContainer">
      
      { excerciseData.map((excercise, index) =>
      {
        return(
        
          <ExcerciseCard key={index}
          name={excercise?.name} 
          description={excercise?.description} 
          difficulty={excercise?.difficulty} 
          muscle_groups={excercise?.muscle_groups} 
          image_url={excercise?.image_url}/>
        
        )
      })
    }
    </div>
    </>
  )
}

export default ExcercisePanel