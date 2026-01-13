import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader } from '@/components/ui/loader'
import { PageContainer } from '@/components/ui/PageContainer'
import { useLogin } from '@/hooks/useLogin'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function LoginPage() {
  const [authError, setAuthError] = useState<string | null>(null)
  const { login, isLoggingIn } = useLogin()
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    setAuthError(null)
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const isLoggedIn = await login({ email, password })
    if (isLoggedIn) {
      return navigate('/')
    }

    setAuthError('Invalid email or password')
  }

  return (
    <PageContainer className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <div className="w-full max-w-md">
        <Card className="bg-muted/40">
          <CardContent className="space-y-6 p-6">
            <h1 className="text-center text-2xl font-semibold">Login</h1>
            <form className="space-y-4" onSubmit={handleLogin}>
              {authError && <div className="text-red-500">{authError}</div>}
              {isLoggingIn && <Loader size={20} />}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoggingIn}>
                Sign In
              </Button>
              <p>Demo hardcoded details</p>
              <p>email: demo@example.com, password: 123456</p>
            </form>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  )
}
