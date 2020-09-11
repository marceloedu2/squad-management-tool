import { ValidationError } from 'yup'

interface IErrors {
  [index: string]: string
}

const getValidationErrors = (error: ValidationError): IErrors => {
  const validationErrors: IErrors = {}

  error.inner.forEach(error => {
    validationErrors[error.path] = error.message
  })

  return validationErrors
}

export default getValidationErrors
