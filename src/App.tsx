import "./App.css";
import InputField from "./components/InputField";
import { useState, useRef } from "react";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

// let name: string;
// let age: number | string;
// let isStudent: boolean;
// let hobbies: string[];
// let role: [number, string];

// let printName: (name:string)=> never;

// type Person = {
//   name: string;
//   age?: number;
// }

// let person: Person = {
//   name: 'Asel',
// }

// let lotsOfPeople: Person[];

// interface Person {
//   name: string;
//   age?: number;
// }

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [list, setList] = useState<Todo[]>([]);

  console.log(todo);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setList([...list, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(list)
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={(e)=> handleAdd(e)} />
      <TodoList list={list} setList={setList} />
     
    </div>
  );
};

export default App;
