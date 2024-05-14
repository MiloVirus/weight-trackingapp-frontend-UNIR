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
      <section className='excerciseCard'>
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
