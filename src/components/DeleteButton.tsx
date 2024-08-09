import { useTodosContext } from "../lib/hooks"

type DeleteButtonProps = {
    id: number,
}

export default function DeleteButton({ id }: DeleteButtonProps) {
    const { handleDeleteTodo } = useTodosContext()
    return (
        <button onClick={(e) => {
            e.stopPropagation()
            handleDeleteTodo(id)
        }}>
            ❌
        </button>

    )
}
