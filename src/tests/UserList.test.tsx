import { render, screen } from '@testing-library/react'
import UserList from '../components/UserList'

describe('first', () => { 

    it('should show warning when user array is empty',()=>{
const users:[]=[]

        render(<UserList users={users}/>)
        expect(screen.getByText(/no users/i)).toBeInTheDocument()

    })

    it('should render list of user when there is data inside array',()=>{
        const users:{id:number,name:string}[]=[{id:1,name:'Abhishek'},{id:2,name:'Rohan'}]
        
                render(<UserList users={users}/>)
                // expect(screen.getByText(/no users/i)).toBeInTheDocument()
                 users.forEach((user)=>{
                    const link=screen.getByRole('link',{name:user.name})
                    expect(link).toBeInTheDocument()
                    expect(link).toHaveAttribute('href',`/users/${user.id}`)
                 })
            })
 })