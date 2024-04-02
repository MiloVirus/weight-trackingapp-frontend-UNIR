import Dashboard from './Dashboard'

const UserPanel = () => {
  return (
    <>
    <section className='userPanel'>
        <Dashboard/>
        <section className="userPanel__section">
            <article className="userPanel__article">
                <h3>Welcome, Username</h3>
                <p>April 02, 2024</p>
            </article>
        </section>
        <hr/>
    </section>
    </>
  )
}

export default UserPanel