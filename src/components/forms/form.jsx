import { useState, useEffect } from 'react'
import InputMask from 'react-input-mask'
import postUser from '../../service/postUser'
import './style.css'

const FormUser = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    telephone: '',
  })

  const [isFormValid, setIsFormValid] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const isValid = Object.values(formData).every((value) => value.trim() !== '')
    setIsFormValid(isValid)
  }, [formData])

  const handleFieldChange = (event) => {
    if (!isSubmitting) {
      const { id, value } = event.target
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }))
    }
  }

  const redirect = (status) => {
    const url = `https://drive.google.com/drive/folders/1Y1zfw36-D3NE3ZV2uwrKk7mrzYNvBNJZ?usp=sharing`

    if (!status) {
      alert('Preencha os campos corretamente')
    }
    window.open(url, '_blank')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (isFormValid && !isSubmitting) {
      setIsSubmitting(true)
      try {
        const user = await registerUser(formData)
        console.log('Usuário registrado:', user)
        redirect(user.status_req)
      } catch (error) {
        console.error(error)
      } finally {
        setIsSubmitting(false)
      }
    } else {
      alert('Por favor, preencha todos os campos.')
    }
  }

  const registerUser = async (formData) => {
    try {
      const response = await postUser(formData)
      if (response) {
        return response
      } else {
        throw new Error('Erro ao obter o link')
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  return (
    <div className="form-user">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="ex: seuemail@gemail.com"
            value={formData.email}
            onChange={handleFieldChange}
            disabled={isSubmitting}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Nome Completo</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="ex: João Severino Andrade"
            value={formData.name}
            onChange={handleFieldChange}
            disabled={isSubmitting}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Telefone/Whatsapp</label>
          <InputMask
            mask="(99) 99999-9999"
            type="text"
            className="form-control"
            id="telephone"
            placeholder="ex: (99) 99999-9999"
            value={formData.telephone}
            onChange={handleFieldChange}
            disabled={isSubmitting}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!isFormValid || isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Ver fotos'}
        </button>
      </form>
    </div>
  )
}

export default FormUser
