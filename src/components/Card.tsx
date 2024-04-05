import "../styles/Card.css"

interface CardProps {
    Weight: string; // Specifying that Weight prop should be a string
    Title: string;
  }

const Card: React.FC<CardProps> = ({Weight, Title}) => {
  return (
    <>
        <article className="card">   
            <div className="card__div--title">
                <p>{Title}</p>
            </div>
            <div className="card__div--info">
                <p>{Weight}</p>
            </div>
        </article>
    </>
  )
}

export default Card