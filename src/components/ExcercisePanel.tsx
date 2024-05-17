import { useSelector } from "react-redux"
import { RootState } from "../store"
import { ExcerciseCard } from "./ExcerciseCard"
import '../styles/ExcercisePanel.css'
import { deleteUserExcercise, postUserExcercise } from "../store/UserExcerciseSlice"
import { useAppDispatch } from "../hooks/reduxHooks"

interface ExerciseData {
  name: string;
  id: number
}

const ExcercisePanel = () => {

    const excerciseData = useSelector((state: RootState) => state.excercisesData.excercises)
    const userExcercisesData = useSelector((state: RootState) => state.userExcercisesData.userExcercises)
    const dispatch = useAppDispatch()

    const handleAddExcercise = (data:object) =>
      {
        const exerciseData = data as ExerciseData;
        const findIt = userExcercisesData.find(element => element.name === exerciseData.name)
        console.log(findIt)
        if(findIt)
          {
            alert("Excercise Already added")
            return
          }
          else{
            dispatch(postUserExcercise(data))
          }
      }
      
      const deleteExcercise = (data: object) => {
        const exerciseData = data as ExerciseData;
        console.log(exerciseData.id);
        dispatch(deleteUserExcercise(exerciseData.id));
      };
    
  return (
    <>
    <div className="CardsContainer">
    { excerciseData.map((excercise, index) =>
      {
        return(
          <ExcerciseCard key={index}
          clickEvent ={handleAddExcercise}
          id={excercise?.id}
          name={excercise?.name} 
          description={excercise?.description} 
          difficulty={excercise?.difficulty} 
          muscle_groups={excercise?.muscle_groups} 
          image_url={excercise?.image_url}
          value= {"+"}
          color="blueviolet"
          />
        )
      })
    }
    </div>
    <h3>Your excercise plan</h3>
    <div className="CustomPlanContainer">
      
      { userExcercisesData.map((excercise, index) =>
      {
        return(
        
          <ExcerciseCard key={index}
          clickEvent ={deleteExcercise}
          id={excercise?.id}
          name={excercise?.name} 
          description={excercise?.description} 
          difficulty={excercise?.difficulty} 
          muscle_groups={excercise?.muscle_groups} 
          image_url={excercise?.image_url}
          value= {"-"}
          color="red"
          />
        )
      })
    }
    </div>
    </>
  )
}

export default ExcercisePanel