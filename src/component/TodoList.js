import { memo} from "react";

const TodoList = (props) => {
    const { todoList, handleDeleteTodo, handleUpdateTodo, buttonSwitch } = props
    console.log('todolistrender')
    return (
        <>
            {todoList.map((t) => (
                <li key={t.Todo}>{t.Todo}{' '}
                    {buttonSwitch?<button onClick={() => handleUpdateTodo(t.Todo)}>Edit</button>:''}
                    {buttonSwitch?<button onClick={() => handleDeleteTodo(t.Todo)}>Delete</button>:''}
                    
                </li>
            ))}
        </>

    )
}

export default memo(TodoList) ;