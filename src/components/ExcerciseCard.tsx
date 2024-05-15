import '../styles/ExcerciseCard.css'
interface componentProps 
{
  name: String,
  description: String,
  difficulty: String,
  muscle_groups: Array<String>,
  image_url: String
}


export const ExcerciseCard: React.FC<componentProps> = ({name, description, difficulty, muscle_groups, image_url}) => {

  return (
    <>
      <section className='excerciseCard' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(36, 36, 36, 0.1)), url(${image_url})` }}>
        <div>
          <h2>{name}</h2>
        </div>
        <div className='exerciseCard__buttonContainer'>
          <button className='excerciseCard__button'>+</button>
        </div>
      </section>
    </>
    
  )
}
