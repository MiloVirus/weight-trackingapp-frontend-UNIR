import GuestNav from "../components/GuestNav"
import "../styles/HomePage.css"
import bannerGraph from "../img/bannergGraph.png"
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <>
    <header>
      <GuestNav/>
    </header>
    <section className="mainSection">
      <article className="mainSection__article--banner">
        <div className="mainSection__div">
          <h1 className="mainSection__h1--banner">
            FitAll tracks your weight progress
          </h1>
          <button className="mainSection__button">Sign up now</button>
          <p className="mainSection__p"><Link to="/UserPanel">Enter as a guest</Link></p>
          <p className="mainSection__p"><Link to="/Login">Login</Link></p>
        </div>
      </article>
      <article className="mainSection__article--content">
        <div>
          <h1 className="mainSection__h1--content">
            Keep track of your progress through graphics and visual displayed data
          </h1>
          <img className="mainSection__img--content" src={bannerGraph} />
        </div>
      </article>
      <article className="mainSection__article--excPlan">
        <div>
          <h1 className="mainSection__h1--excPlan">
            Create customized excercise plans
          </h1>
        </div>
      </article>
    </section>
    </>
  )
}

export default HomePage