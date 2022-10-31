export interface iTodo {
    items: iItems[],
    text: string
    }

interface iItems {
    id: number,
    text: string
}

export type Todo = {
    id: string;
    task: string;
    isCompleted: boolean;
  };

export type TodoProps = {
    todo: Todo,
    handleDeleteTodo: (id: string) => void;
    handleCheckTodo: (id: string) => void;
}