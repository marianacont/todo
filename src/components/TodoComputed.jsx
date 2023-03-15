
const TodoComputed = ({countItemLeft, clearCompleted}) => {

    return (
        <div className="flex justify-between items-center text-dark-g-blue pt-3 px-3 dark:text-dark-grayish-blue">
        <div className="flex gap-1">
          <span>{countItemLeft}</span>
          <p>items left</p>
        </div>
        <div>
          <button onClick={clearCompleted} className="m-2">Clear Completed</button>
        </div>
      </div>
    )
}

export default TodoComputed