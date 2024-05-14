import '../styles/UserPanel.css'
import Chart from './Chart';
import Card from './Card';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../hooks/reduxHooks';
import { getUserData, postUserData } from '../store/UserDataSlice';
import { getExcercisesData } from '../store/ExcerciseSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const UserPanel = () => {

  let currentDate = new Date().toJSON().slice(0, 10)
  const dispatch = useAppDispatch()
  const userDataSelector = useSelector((state: RootState) => state.userData.data);
  const lastWeight = userDataSelector.slice(-1)

  const [dayWeight, setDayWeight] = useState(0)

  useEffect(() => {
    
    dispatch(getUserData())
    dispatch(getExcercisesData())
  
  }, [])
  
  const sendInput = () =>
    {
      if(dayWeight > 0)
        {
              const data  = 
              {
                weight: dayWeight,
                date: Date().toString()
              }
              dispatch(postUserData(data))
        }
        else{
          alert('Please input a value greater than 0')
        }
      
    }

  console.log(currentDate);
  return (
    <>
    <section className='userPanel'>
        <section className="userPanel__section--userData">
            <article className="userPanel__article">
              <div className='userPanel__div'>
                <div>
                  <h3>Welcome, Username</h3>
                  <p>{currentDate}</p>
                </div>
                <div>
                  <h3>Input today's weight (Current Weight)</h3>
                  <input onChange={(e)=>setDayWeight(parseInt(e.target.value, 10))} className="userPanel__input" type='number'/>
                  <button onClick={sendInput} className="userPanel__button">Save</button>
                </div> 
              </div>
                
                <hr/>
                <section className='userPanel__section--cards'>
                  <Card Weight={lastWeight[0]?.weight} Title={"Current Weight"}/>
                  <Card Weight={71} Title={"Goal Weight"}/>
                </section>
                <section className='userPanel__section--chart'>
                  <Chart />
                </section>
            </article>
        </section>
        <section>
        
        </section>
    </section>
    </>
  )
}

export default UserPanel