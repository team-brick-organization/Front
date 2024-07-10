import { useState } from 'react'

function usePasswordVisibility() {
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordCheck, setShowPasswordCheck] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState)
  }

  const togglePasswordCheckVisibility = () => {
    setShowPasswordCheck((prevState) => !prevState)
  }

  return {
    showPassword,
    showPasswordCheck,
    togglePasswordVisibility,
    togglePasswordCheckVisibility,
  }
}

export default usePasswordVisibility
