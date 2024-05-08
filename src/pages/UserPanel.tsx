import '../styles/UserPanel.css'
import { Chart } from '../components/Chart';
import Card from '../components/Card';

const UserPanel = () => {

  let currentDate = new Date().toJSON().slice(0, 10);
  

  console.log(currentDate);
  return (
    <>
    <section className='userPanel'>
        <section className="userPanel__section--userData">
            <article className="userPanel__article">
                <h3>Welcome, Username</h3>
                <p>{currentDate}</p>
                <hr/>
                <section className='userPanel__section--cards'>
                  <Card Weight={"76kg"} Title={"Current Weight"}/>
                  <Card Weight={"71kg"} Title={"Goal Weight"}/>
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