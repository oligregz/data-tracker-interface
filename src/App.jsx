import remaxLog from '/Balao.png'
import './App.css'
import FormUser from './components/forms/form'

function App() {
  return (
    <div className="main">
      <header>
      <div>
        <a href="https://instagram.com/remaxverano?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noreferrer">
          <img src={remaxLog} className="logo" alt="Remax logo" />
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

export default App
