import Greet from '../components/Greet'
import { render, screen } from '@testing-library/react'
describe('greet', () => { 
    it('it should render hello with whatever the name is provided',()=>{
     render(<Greet name="Abhishek"/>)
     screen.debug()
     const heading=screen.getByRole('heading')
     expect(heading).toBeInTheDocument()
     expect(heading).toHaveTextContent(/Abhishek/i)
    })

    it('it should render button when name is not provided',()=>{
        render(<Greet  />)
        screen.debug()
        const button=screen.getByRole('button')
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent(/login/i)
       })
 })