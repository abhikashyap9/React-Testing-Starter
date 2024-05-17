// import { render,screen } from '@testing-library/react'
// import ExpandableText from '../components/ExpandableText'
// import userEvent from '@testing-library/user-event'

// describe("Expandable Text",()=>{
 
//     it("when less text",()=>{
//         render(<ExpandableText text={"Hi guys"}/>)
       
//        const article=screen.getByRole('article')
//        expect(article).toBeInTheDocument()
//        expect(article).toHaveTextContent(/hi guys/i)
//        expect(screen.queryByRole('button')).not.toBeInTheDocument()
//     })
    
//     it("when large text",async()=>{
//       let text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel praesentium veritatis fugit saepe eius possimus blanditiis, ea laudantium? Odio reprehenderit provident magni dicta itaque optio? Enim accusamus ipsum placeat eum sed eaque totam est, similique delectus quaerat fugit sapiente doloribus consequuntur atque! Sint ullam sapiente ab possimus voluptates reiciendis officia, perspiciatis tenetur doloremque amet dicta obcaecati? Temporibus, quos, illum tenetur reiciendis est natus quam voluptates expedita laboriosam molestiae sed ducimus amet perspiciatis, vitae veritatis corporis ut error ipsum dicta nostrum. Et, quaerat iusto. Pariatur beatae suscipit atque et sequi facilis nam fuga? Deserunt qui inventore perferendis blanditiis soluta nemo cumque?"
//       render(<ExpandableText text={text}/>)
//       const article=screen.getByRole('article')
//       const button=screen.getByRole('button')
//       expect(button).toBeInTheDocument()
//       expect(button).toHaveTextContent('Show More')
//       expect(article).toHaveLength(255)
//       const user=userEvent.setup()
//       await user.click(button)
//       expect(screen.getByRole('button')).toHaveTextContent('Show Less')
//       await user.click(button)
//       expect(screen.getByRole('button')).toHaveTextContent('Show More')
//     })

// })