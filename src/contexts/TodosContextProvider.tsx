import { createContext, useEffect, useState } from "react";
import { Todo } from "../lib/types";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
//import { arraysOfObjectsEqual } from "../lib/hooks";

type TodosContextProviderProps = {
    children: React.ReactNode
}

type TTodosContext = {
    todos: Todo[],
    totalNumberOfTodos: number,
    numberOfCompletedTodos: number,
    handleAddTodo: (todoText: string) => void,
    handleToggleTodo: (id: number) => void,
    handleDeleteTodo: (id: number) => void
}

/*type EndPointTodos = {
    id: number
    todo: string
    completed: boolean
    userId: number
}*/

const getInitialTodos = () => {
    const savedTodos: string | null = localStorage.getItem("todos")
    if (savedTodos) {
        return JSON.parse(savedTodos)
    } else {
        return []
    }
}

export const TodosContext = createContext<TTodosContext | null>(null);

export default function TodosContextProvider({ children }: TodosContextProviderProps) {
    //state
    const [todos, setTodos] = useState<Todo[]>(getInitialTodos);
    const { isAuthenticated } = useKindeAuth();
    //derived state
    const totalNumberOfTodos: number = todos.length
    const numberOfCompletedTodos: number = todos.filter((todo) => todo.isCompleted).length

    //event handlers / actions
    const handleAddTodo = (todoText: string) => {
        if (todos.length >= 3 && !isAuthenticated) {
            alert("Log in to add more than 3 todos")
            return;
        } else if (todoText.trim() === "") {
            alert("Todo text cannot be empty");
            return;
        } else {
            setTodos(prev => [
                ...prev,
                {
                    id: prev.length + 1,
                    text: todoText,
                    isCompleted: false
                }
            ])
        }
    }

    const handleToggleTodo = (id: number) => {
        setTodos(
            todos.map((t) => {
                if (t.id === id) {
                    return { ...t, isCompleted: !t.isCompleted }
                }
                return t
            })
        )
    }

    const handleDeleteTodo = (id: number) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }

    //side effects
    /*useEffect(() => {

        const fetchTodos = async () => {
            const response = await fetch("https://dummyjson.com/todos")
            const todosResponse = await response.json()

            if (!arraysOfObjectsEqual(todosResponse, todos) || todos.length === 0) {
                const todosValues: Todo[] | [] = todosResponse.todos.map((todo: EndPointTodos) => {
                    return {
                        ...todo,
                        text: todo.todo,
                        isCompleted: todo.completed
                    }
                })
                setTodos(todosValues)
            }
        }
        fetchTodos()
    }, []) */

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return (
        <TodosContext.Provider value={{
            todos,
            totalNumberOfTodos,
            numberOfCompletedTodos,
            handleAddTodo,
            handleToggleTodo,
            handleDeleteTodo
        }}>
            {children}
        </TodosContext.Provider>
    )
}
