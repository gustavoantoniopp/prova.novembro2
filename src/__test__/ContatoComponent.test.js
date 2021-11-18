const React = require('react')
import axios from "axios";
import {render, screen, fireEvent }from '@testing-library/react'
import PostForm from '../PostForm'
import api from "../service/api"


jest.mock('axios')

/* const mockUser = {
    name:'Gustavo',
    email:'gustavo@gmail.com',
    phone:'bolinho'
} */

test("mock component", async () => {
    //api.post.mockImplementation(() => Promise.resolve(mockUser))

    render(<PostForm />)
    const nameElement = await screen.findByTestId(/name/i)
    //const emailElement = await screen.findByTestId(/email/i)
    //const phoneElement = await screen.findByTestId(/phone/i)
   // const buttonElement = await screen.findByRole('button')

    fireEvent.change(nameElement, {target: {value:'gustavo'}})
    //fireEvent.change(emailElement, { target: { value: 'gustavo@gmail.com' } })
    //fireEvent.change(phoneElement, { target: { value: 'bolinho' } })
    //fireEvent.click(buttonElement)

    screen.debug()
    expect(nameElement).toBeInTheDocument()   


})
