import UserAccount from "../components/UserAccount"
import { render, screen } from '@testing-library/react'
import { User } from "../entities"
describe('first', () => { 
  
    it('user name render in dom',()=>{
      const user:User={
        id:1,
        name:'Rohit'
    }

      render(<UserAccount user={user}/>)
    screen.debug()

      const nameElement = screen.getByText(user.name)
     const button=screen.queryByRole('button')
      console.log(nameElement)
      expect(nameElement).toBeInTheDocument()
      expect(nameElement).toHaveTextContent(/Rohit/i)
      expect(button).not.toBeInTheDocument()
    
    })

    it('it should render edit button when admin is true',()=>{
      const user:User={
        id:1,
        name:'Rohit',
        isAdmin:true
    }

      render(<UserAccount user={user}/>)
    screen.debug()

      const nameElement = screen.getByText(user.name)
      const button=screen.queryByRole('button')

      console.log(nameElement)
      expect(nameElement).toBeInTheDocument()
      expect(button).toBeInTheDocument()
      expect(button).toHaveTextContent(/edit/i)
    })
    
 })