import Check from "./icons/Check"
import CrossIcon from "./icons/CrossIcon"
import React from "react"

const TodoItem = React.forwardRef(
  ({todo, updateTodo, removeTodo, ...props}, ref) => {
    const { id, title, completed } = todo;
      return (
          <article 
            ref={ref} 
            className="border-b border-gray-300 dark:border-b dark:border-very-dark-grayish-blue p-4 flex justify-between"
            {...props}>
          <label className="flex gap-4">
            <button className={`h-5 w-5 rounded-full border dark:border-2 dark:border-very-dark-grayish-blue ${completed ? "bg-gradient-to-br from-light-blue to-purple flex items-center justify-center" : "inline-block flex-none"}`} 
            onClick={() => updateTodo(id)}> 
            {completed && <Check />} </button>
          <p className={`text-very-dark-g-blue dark:text-light-grayish-blue ${completed && "line-through text-light-g-blue" } `}>{title}</p>
          </label>

          <button onClick={() => removeTodo(id)}><CrossIcon /></button>
        </article>
      )
})


export default TodoItem