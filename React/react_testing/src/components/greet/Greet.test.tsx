import {render, screen} from '@testing-library/react';

import { Greet } from './Greet';


describe("Greet", ()=>{

    test("renders Correctly",()=>{
        render (<Greet/>)
        const textElement = screen.getByText("Hello");
        expect (textElement).toBeInTheDocument();
        })
        
        test("Check prop name", ()=>{
            render (<Greet name={"GK"}/>)
            const textElement = screen.getByText("Hello GK");
            expect(textElement).toBeInTheDocument();
        })
})

// test("Greet renders Correctly",()=>{
// render (<Greet name={"g"}/>)
// const textElement = screen.getByText(/hello/i);
// expect (textElement).toBeInTheDocument();
// })

// test("Check prop name", ()=>{
//     render (<Greet name={"GK"}/>)
//     const textElement = screen.getByText("Hello GK");
//     expect(textElement).toBeInTheDocument();
// })

// skips the test
// test.skip("Check prop name once", ()=>{
//     render (<Greet name={"GK"}/>)
//     const textElement = screen.getByText("Hello GK");
//     expect(textElement).toBeInTheDocument();
// })

// runs only this test
// test.only("Check prop name only this test", ()=>{
//     render (<Greet name={"GK"}/>)
//     const textElement = screen.getByText("Hello GK");
//     expect(textElement).toBeInTheDocument();
// })