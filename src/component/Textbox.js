import { useState, useCallback } from "react";
import TodoList from "./TodoList";

const Textbox = () => {

    const [todo, setTodo] = useState('')
    const [todoList, setTodoList] = useState([{ Todo: "Quét nhà" }, { Todo: "Ngủ" }])
    const [buttonSwitch, setButtonSwitch] = useState(true)
    const [index, setIndex] = useState(0)
    const handleTodo = (e) => {
        setTodo(e.target.value)
        console.log('onchange')
    }
    const handleSaveTodo = () => {
        console.log('button save todo')
        todo && setTodoList([
            ...todoList,
            { Todo: todo }
        ]);
        setTodo('');
    }

    const handleDeleteTodo = useCallback((Todo) => {
        console.log('button delete to do')
        const arrDeleteTodo = todoList.filter((todo) => todo.Todo !== Todo)
        setTodoList(arrDeleteTodo)
        setTodo('')
    }, [todoList])

    const handleUpdateTodo = useCallback((Todo) => {
        console.log('button Edit to do')
        let index = todoList.findIndex((todo) => todo.Todo === Todo)
        setTodo(todoList[index].Todo)
        !buttonSwitch && setTodo('')
        setButtonSwitch(!buttonSwitch)
        setIndex(index)
    }, [todoList, buttonSwitch])

    const handleFixTodo = () => {
        console.log('button sua todo')
        const arr = [...todoList]
        todo && (arr[index].Todo = todo)
        setButtonSwitch(!buttonSwitch)
        setTodoList(arr)
        setTodo('')

        // const arrUpdateTodo = todoList.filter((todo) => todo.id !== id)
        // setTodoList(arrUpdateTodo)
    }
    return (
        <div>
            <input value={todo} onChange={(e) => handleTodo(e)} />
            {buttonSwitch ? <button onClick={() => handleSaveTodo()}>Thêm</button> : <button onClick={handleFixTodo}>Sửa</button>}
            <TodoList
                todoList={todoList}
                handleDeleteTodo={handleDeleteTodo}
                handleUpdateTodo={handleUpdateTodo}
                buttonSwitch={buttonSwitch}
            />
        </div>
    )
}

export default Textbox;