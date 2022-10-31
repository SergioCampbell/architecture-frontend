import { Todo, TodoProps } from "../interface/interface"

export const Row = ({ todo: {task, isCompleted, id }, handleDeleteTodo, handleCheckTodo }: TodoProps) => (
    <div>
        <p>{task}</p>
        <button aria-label="Delete a todo" onClick={() => handleDeleteTodo(id)}>
            X
        </button>
        <input type="checkbox" checked={isCompleted} onChange={() => handleCheckTodo(id)} />
    </div>
)