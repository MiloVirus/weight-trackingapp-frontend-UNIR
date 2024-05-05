import { render, screen } from "@testing-library/react";
import Login from "../pages/Login";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";


test('It shows two inputs and a button', () =>
{
    render(<Login />);
    const inputName = screen.getByRole('textbox')
    const inputPass = screen.getByLabelText('Password')
    const button = screen.getByRole('button')

    expect(inputName).toBeInTheDocument()
    expect(inputPass).toBeInTheDocument()
    expect(button).toBeInTheDocument()
})

test('It calls a function when submited', async() =>
{
    render(<Login/>)

    const inputName = screen.getByRole('textbox')
    const inputPass = screen.getByLabelText('Password')
    
    await userEvent.click(inputName)
    await userEvent.keyboard('asfas@gmail.com')

    await userEvent.click(inputPass)
    await userEvent.keyboard('fsdgsdasd123')

    const button = screen.getByRole('button')

    await userEvent.click(button)
})
