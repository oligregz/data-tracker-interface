import FormUser from '../forms/form'
import remaxLogo from '../../../public/Balao.png'

const Main = () => {
  return (
    <div className="main">
      <header>
      <div>
        <a href="https://instagram.com/remaxverano?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noreferrer">
          <img src={remaxLogo} className="logo" alt="Remax logo" />
        </a>
      </div>
      <h1>
        Cicloturismo Papajaca
      </h1>
      <p>Edição 2023</p>
      </header>
      <FormUser />
    </div>
  )
}

export default Main