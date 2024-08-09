import DeleteButton from "./DeleteButton";
import { useTodosContext } from "../lib/hooks";

export default function TodoList() {

    const { todos, handleToggleTodo } = useTodosContext()

    return (
        <ul className="overflow-y-auto">
            {
                todos.length === 0 && (<li className="h-full flex justify-center items-center font-semibold">Start by adding a todo</li>)
            }

            {todos.map((todo) => {
                return (
                    <li className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]" key={todo.id}
                        onClick={() => {
                            handleToggleTodo(todo.id)
                        }}
                    >
                        <span className={`${todo.isCompleted ? 'line-through text-[#ccc]' : ''}`}>{todo.text}</span>
                        <DeleteButton id={todo.id} />
                    </li>
                )
            })}

        </ul>
    )
}
