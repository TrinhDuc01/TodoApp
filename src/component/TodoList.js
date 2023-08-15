import { memo } from "react";

const TodoList = (props) => {
    const { todoList, handleDeleteTodo, handleUpdateTodo, buttonSwitch } = props
    console.log('todolistrender')
    return (
        <>
            <table>
                <thead></thead>
                <tbody>
                    {todoList.map((t) => (
                        <tr key={t.Todo}>
                            <td>{t.Todo}</td>
                            <td>
                                {buttonSwitch ? <button onClick={() => handleUpdateTodo(t.Todo)}>Edit</button> : ''}
                                {buttonSwitch ? <button onClick={() => handleDeleteTodo(t.Todo)}>Delete</button> : ''}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>

    )
}

export default memo(TodoList);