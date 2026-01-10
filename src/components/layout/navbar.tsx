import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b">
      <div className="mx-auto flex h-16 items-center px-4">
        {/* Left side */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-xl font-bold" aria-label="Vega home">
            Vega
          </Link>

          {/* Desktop nav */}
          <nav className="hidden gap-4 md:flex" aria-label="Main navigation">
            <Link className="hover:text-primary text-sm font-medium" to="/">
              Home
            </Link>
          </nav>
        </div>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-4">
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" aria-label="Navigation menu">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              <nav className="mt-4 flex flex-col gap-4" aria-label="Mobile navigation">
                <Link to="/" className="text-lg">
                  Home
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
