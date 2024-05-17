import '../styles/ExcerciseCard.css'
interface componentProps 
{
  id: number,
  name: String,
  description: String,
  difficulty: String,
  muscle_groups: Array<String>,
  image_url: String,
  clickEvent: (data: object) => void,
  value: String,
  color: String
}


export const ExcerciseCard: React.FC<componentProps> = ({id, name, image_url, clickEvent, value, color}) => {

  return (
    <>
      <section className='excerciseCard' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(36, 36, 36, 0.1)), url(${image_url})`, backgroundColor:`${color}` }}>
        <div>
          <h2>{name}</h2>
        </div>
        <div className='exerciseCard__buttonContainer'>
          <button style={{ backgroundColor:`${color}` }} onClick={()=> clickEvent({
            id,
            name,  
            image_url, 
            clickEvent})} className='excerciseCard__button'>{value}</button>
        </div>
      </section>
    </>
    
  )
}
