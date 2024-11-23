import Accordion from "./Accordion"
import {render,screen,fireEvent} from '@testing-library/react'


describe('Accordion',() =>{
    beforeEach(() =>{
        render(
            <Accordion title="Hello">
                <h3>My content</h3>
                <p>Somo content</p>
            </Accordion>
            );
    })
    test('should show tittle all the time',() =>{
        expect(screen.getByText('Hello')).toBeDefined()
        })

    test('should not show the content at start',() =>{
        expect(screen.queryByText(/content/i)).toBeNull()
    })

    test('Should show the content when title is clicked',() =>{
       const button = screen.getByText(/open/i);
        fireEvent.click(button);
        
    })

    test('should show content all the time',() =>{
        expect(screen.queryByText(/content/i)).toBeDefined()
        })


    test('Should hide the content when title is clicked',() =>{
        const button = screen.getByText(/open/i);
         fireEvent.click(button);
         fireEvent.click(button);
         expect(screen.queryByText(/content/i)).toBeNull()
     })
 
    

});