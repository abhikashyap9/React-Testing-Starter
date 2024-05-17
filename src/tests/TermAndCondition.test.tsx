import { render, screen } from '@testing-library/react'
import TermsAndConditions from '../components/TermsAndConditions'
import userEvent from '@testing-library/user-event'


describe("Term and condition",()=>{
    const renderComponent=()=>{
     render(<TermsAndConditions/>)
     return {
        heading:screen.getByRole('heading'),
        checkbox:screen.getByRole('checkbox'),
        button:screen.getByRole('button')
     }
    }

    it("but should be disabled",()=>{
    const {heading,checkbox,button}=renderComponent()

    expect(heading).toHaveTextContent('Terms & Conditions')

    expect(checkbox).not.toBeChecked()
    
    expect(button).toBeDisabled()
})

it('it should enabled button when clicked',async()=>{
    const {checkbox}=renderComponent()

    const user=userEvent.setup();
    
    await user.click(checkbox)
    
    expect(screen.getByRole('button')).toBeEnabled()
})
})