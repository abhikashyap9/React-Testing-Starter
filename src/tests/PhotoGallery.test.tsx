import { render, screen } from '@testing-library/react'
import ProductImageGallery from '../components/ProductImageGallery'


describe('Should Render Null When Dom Is Empty', () => {
    it('Should Render Null When Dom Is Empty',()=>{
      const user:[]=[]

        const {container}=render(<ProductImageGallery imageUrls={user}/>)
        screen.debug()
        expect(container).toBeEmptyDOMElement()
    })

    it('Should render images',()=>{
        const imageUrls:string[]=['https://images.pexels.com/photos/4117191/pexels-photo-4117191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/2817862/pexels-photo-2817862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        ]
  
        render(<ProductImageGallery imageUrls={imageUrls}/>)
        const image=screen.getAllByRole('img')
        expect(image).toHaveLength(2)
        imageUrls.forEach((url,index)=>{
          expect(image[index]).toHaveAttribute('src',url)
        })
      })
})