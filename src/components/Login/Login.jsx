import React, {useState} from 'react'
import { Input } from '../Input'
import {useLogin} from '../../shared/hooks/useLogin'
import {
  emailValidationMessage,
  passwordValidationMessage,
  validateEmail,
  validatePassword
} from '../../shared/validators/validator'
import { Link } from 'react-router-dom'

export const Login = () => {
  const form ={
    email: {
      value: '',
      isValid: false,
      showError: false
    },
    password: {
      value: '',
      isValid: false,
      showError: false
    }
  }

  const [formData, setFormData] = useState(form)
  const { login } = useLogin()

  const isSubmitButtonDisabled = !formData.email.isValid ||
                                  !formData.password.isValid

  const handleSubmit = (event)=>{
    event.preventDefault()
    console.log(formData)
    login(
        formData.email.value,
        formData.password.value
    )
  }

  const handleValidationOnBlur = (value, field) =>{
    let isValid = false
    switch (field){
      case 'email': 
        isValid = validateEmail(value)
        break 
      case 'password':
        isValid = validatePassword(value)
        break
      default:
        break
    }

    setFormData((prevData)=> (
      {
          ...prevData,
          //Inyección de nuevo valor:
          [field]: {
              ...prevData[field],
              isValid,
              showError: !isValid
          }
      }
    ))
  }

  const handleValueChange = (value, field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: {
        ...prevData[field],
        value
      }
    }))
  }

  return (
    <div className='login-container'>
      <form className='auth-form' onSubmit={handleSubmit}>
        <Input
          field='email'
          label='Email'
          value={formData.email.value}
          onChangeHandler={handleValueChange}
          placeholder={formData.email.value}
          type='email'
          onBlurHandler={handleValidationOnBlur}
          showErrorMessage={formData.email.showError}
          validationMessage={emailValidationMessage}
        />
        <Input
          field='password'
          label='Password'
          value={formData.password.value}
          onChangeHandler={handleValueChange}
          placeholder={formData.password.value}
          type='password'
          onBlurHandler={handleValidationOnBlur}
          showErrorMessage={formData.password.showError}
          validationMessage={passwordValidationMessage}
        />
        <button disabled={isSubmitButtonDisabled} type='submit'>
          Iniciar Sesión
        </button>
      </form>
      <div className='redirect-to-login'>
        <p>No tienes una cuenta? <Link to="/auth/register">Registrate aquí</Link></p>
      </div>
    </div>
  )
}