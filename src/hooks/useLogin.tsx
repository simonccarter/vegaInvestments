import { DEMO_EMAIL, DEMO_PASSWORD } from '@/constants/demoLoginDetails'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useState } from 'react'

export const useLogin = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const { setItem, removeItem } = useLocalStorage()

  const login = async ({ email, password }: { email: string; password: string }) => {
    setIsLoggingIn(true)
    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
      setIsLoggingIn(false)
      setItem('isLoggedIn', 'true')
      return true
    }

    setItem('isLoggedIn', 'false')
    setIsLoggingIn(false)
    return false
  }

  const logout = async () => {
    setIsLoggingOut(true)
    removeItem('isLoggedIn')
    setIsLoggingOut(false)
  }

  return {
    login,
    logout,
    isLoggingIn,
    isLoggingOut,
  }
}
