import { useEffect, useState } from "react"
import { Todo } from "../types"

interface TodosLisProps {
    todos: Todo[]
    deleteTodo: (id:number) => void
    finishTodo: (id:number) => void
    editTodo: (todo:Todo) => void
}


export default function TodoList({todos, deleteTodo, finishTodo, editTodo}: TodosLisProps) {
    const [editingTodos, setEditingTodos] = useState(()=> todos.map(x => ({...x, isEditing: false})))
    const [editingTodo, setEditingTodo] = useState<Todo | null>(null)
    
    const handleEdit = (id: number) => {
        const newTodos = editingTodos.map(x => x.id === id ? {...x, isEditing: !x.isEditing} : {...x, isEditing:false})
        const currentEditingTodo = newTodos.find(x => x.id === id)
        if(currentEditingTodo === undefined) return
        setEditingTodos(newTodos)
        setEditingTodo({
            id: currentEditingTodo.id,
            title:currentEditingTodo.title,
            description: currentEditingTodo.description ?? '',
            status: currentEditingTodo.status
        })
    }

    const submitEditform = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(editingTodo === null) return
        editTodo(editingTodo)
    }

    useEffect(() => {
        setEditingTodos(todos.map(x => ({ ...x, isEditing: false })))
    }, [todos])

    if(todos.length <= 0) return <h2>no todos yet</h2>
    return(
        <div className='todos-wrapper'>
            <ul>
                {editingTodos.map(({title,status, id, description, isEditing}) => (
                    <div key={id}>
                        <li>
                            <span className={`${status ? 'completed' : ''}`}>{title}</span>
                            <small>{description}</small>
                            <input type="checkbox" checked={status} onChange={()=> finishTodo(id)} />
                            <button onClick={()=> deleteTodo(id)}>delete</button>
                            <button onClick={()=> handleEdit(id)}>Edit</button>
                        </li>
                        {isEditing &&(
                            <form onSubmit={submitEditform}  className="edit-form">
                                <div className=''>
                                    <label htmlFor="title">
                                        Title
                                    </label>
                                    <input id='title' name='title' type="text" 
                                    value={editingTodo.title} 
                                    onChange={(e)=> setEditingTodo(prevTodo => {
                                        return({...prevTodo, title: e.target.value})
                                    })} />
                                </div>
                                <div className='input-wrapper'>
                                    <label htmlFor="description">Description</label>
                                    <input type="text" id='description' name='description' 
                                    placeholder='I need to do it before 10:00 p.m.'
                                    value={editingTodo.description}
                                    onChange={(e)=> setEditingTodo(prevTodo => {
                                        return ({...prevTodo, description: e.target.value})
                                    })} />
                                </div>
                                <div className='input-wrapper'>
                                    <label htmlFor="status">Status</label>
                                    <input type="checkbox" id='status' name='status' 
                                    checked={editingTodo.status}
                                    onChange={()=> setEditingTodo(prevTodo => {
                                        return({...prevTodo, status: !prevTodo.status})
                                    })} />
                                </div>
                                <div className='input-wrapper'>
                                    <label htmlFor="status">Save</label>
                                    <input type="submit" id='save' name='save' value='save' />
                                </div>
                            </form>
                        )}
                    </div>
                ))}
            </ul>
        </div>
    )
}