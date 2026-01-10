import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useLogin } from "@/hooks/useLogin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "@/components/ui/loader";

export function LoginPage() {
  const [authError, setAuthError] = useState<string | null>(null)
  const {login, isLoggingIn} = useLogin()
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    setAuthError(null)
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    console.log('email', email)
    console.log('password', password)
    const isLoggedIn = await login({ email, password })
    if (isLoggedIn) {
      return navigate('/')
    }

    setAuthError('Invalid email or password')
  }

  return (
    <Container className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">

      <div className="w-full max-w-md">

        <div className="bg-muted/40 rounded-lg border p-6 space-y-6">
          <h1 className="text-2xl font-semibold text-center">Login</h1>
          <form className="space-y-4" onSubmit={handleLogin}>

          {authError && <div className="text-red-500">{authError}</div>}
          {isLoggingIn && <Loader className="animate-spin" size={20} />}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" name="password" placeholder="Enter your password" />
            </div>
            <Button type="submit" className="w-full" disabled={isLoggingIn}>
              Sign In
            </Button>
            <p>Demo hardcoded details</p>
            <p>email: demo@example.com, password: 123456</p>
          </form>
        </div>
      </div>
    </Container>
  )
}