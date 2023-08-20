import './globals.css'
import Nav from '../components/Nav'
import Provider from '../components/Provider'

export const metadata = {
  title: 'Promptopia',
  description: 'Create and share interesting and informative prompts',
}

export default function RootLayout({ children }) {
  return (
   <html lang="en">
    < div>
     <Nav/>
      {children}
      
     
    </div>

  </html> 
  )
}
