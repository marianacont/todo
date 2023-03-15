import { useState } from "react"
import CircleIcon from "./icons/CircleIcon"

const TodoCreate = ({createTodo}) => {
const [title, setTitle] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!title.trim()){
      return setTitle('')
    } 
    createTodo(title)
    return setTitle('')
    
  }

    return (
        <form 
          onSubmit={handleSubmit}
          className="bg-very-light-gray dark:bg-very-dark-desaturated-blue rounded flex justify-between p-4 flex gap-4">
        <CircleIcon></CircleIcon>
        <input 
          className="w-full dark:bg-very-dark-desaturated-blue dark:border dark:border-very-dark-grayish-blue dark:text-dark-grayish-blue p-1" 
          type="text" name="" 
          id="" 
          placeholder="Enter a new task to do..."
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
      </form>
    )
}

export default TodoCreate