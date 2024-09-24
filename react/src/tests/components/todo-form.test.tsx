import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import TodoForm from '../../components/todo-form'

describe('Todo Form component', () => {
    it('should submit the form with the correct data', ()=> {
        // Mock function to capture the submitted todo
        const addTodoMock = vi.fn()

        // Render the component
        render(<TodoForm addTodo={addTodoMock} />)

        // Get te form elements
        const titleInput = screen.getByLabelText(/title/i)
        const descriptionInput = screen.getByLabelText(/description/i)
        const statusCheckbox = screen.getByLabelText(/status/i)
        const submitButton = screen.getByRole('button', {name: /add/i})

        // Fill in the form
        fireEvent.change(titleInput, {target: {value: 'My new task'}})
        fireEvent.change(descriptionInput, {target: {value: 'Finish the report'}})
        fireEvent.click(statusCheckbox)

        // Submit the form
        fireEvent.click(submitButton)

        // Assert that addTodo was called with the correct data
        expect(addTodoMock).toHaveBeenCalledTimes(1)
        expect(addTodoMock).toHaveBeenCalledWith({
            id: expect.any(Number),
            status: true,
            description: 'Finish the report',
            title: 'My new task'
        })
    })

    it('Should call addTodo with unchecked status if the checkbox is not checked', () => {
        const addTodoMock = vi.fn()
        render(<TodoForm addTodo={addTodoMock} />)

        const titleInput = screen.getByLabelText(/title/i)
        const descriptionInput = screen.getByLabelText(/description/i)
        const submitButton = screen.getByRole('button', {name: /add/i})

        fireEvent.change(titleInput, {target: {value: 'Another task'}})
        fireEvent.change(descriptionInput, { target: { value: 'This is another one'}})

        fireEvent.click(submitButton)

        expect(addTodoMock).toHaveBeenCalledTimes(1)
        expect(addTodoMock).toHaveBeenCalledWith({
            id: expect.any(Number),
            status: false,
            description: 'This is another one',
            title: 'Another task'
        })
    })


})