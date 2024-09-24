import { Todo } from "../types"

interface TodoFormProps {
    addTodo: (todo:Todo) => void
}

export default function TodoForm({addTodo}: TodoFormProps){
    const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        
        const status = formData.get("status") !== null ? true : false
        const description = formData.get("description") as FormDataEntryValue as string ?? ''
        const title = formData.get("title") as FormDataEntryValue as string ?? ''
        const newTodo: Todo = {
            id: +new Date(),
            status,
            description,
            title
        }
        addTodo(newTodo)
        event.target.reset()
    }

    return(
    <div className='form-wrapper'>
        <form onSubmit={handleForm}>
          <fieldset>
            <legend>task form</legend>

            <div className='input-wrapper'>
              <label htmlFor="title">
                Title
              </label>
              <input id='title' name='title' type="text" />
            </div>
            
            <div className='input-wrapper'>
              <label htmlFor="description">Description</label>
              <input type="text" id='description' name='description' placeholder='I need to do it before 10:00 p.m.' />
            </div>

            <div className='input-wrapper'>
              <label htmlFor="status">
                Status
              </label>
              <input type="checkbox" id='status' name='status' />
            </div>

            <input type="submit" value='Add' />
          </fieldset>
        </form>
      </div>
    )
}