import { Droppable, Draggable } from "@hello-pangea/dnd";
import TodoItem from "./TodoItem"

const TodoList = ({todos, updateTodo, removeTodo, countItemLeft,clearCompleted}) => {
    return (
        <Droppable droppableId="todos">
            {(droppableProvider) => (
                <div
                    {...droppableProvider.droppableProps} 
                    ref={droppableProvider.innerRef} 
                    
                >
            
                {todos.map((todo, index) => (

                <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
                    {(draggableProvider) => (
                        <TodoItem 
                            {...draggableProvider.draggableProps}
                            ref={draggableProvider.innerRef}
                            {...draggableProvider.dragHandleProps}
                            todo={todo} updateTodo={updateTodo} removeTodo={removeTodo} 
                         />
                    )}
                    
                </Draggable>
            ))}
            
            {droppableProvider.placeholder}
            

                </div>        
            )}
        
        </Droppable>
    )
}

export default TodoList