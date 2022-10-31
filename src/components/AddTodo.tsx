import { ChangeEvent, FormEvent } from "react";

export type AddTodoProps = {
  task: string;
  handleChangeTodo: (e: ChangeEvent) => void;
  handleSubmit: (e: FormEvent) => void;
};

export const AddTodo = ({
  task,
  handleSubmit,
  handleChangeTodo,
}: AddTodoProps) => (
  <form onSubmit={handleSubmit}>
    <input type="text" name="task" value={task} onChange={handleChangeTodo} />
    <button type="submit" aria-label="Add todo">
      +
    </button>
  </form>
)
