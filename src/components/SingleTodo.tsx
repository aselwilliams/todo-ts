import React, {useState, useRef, useEffect} from 'react';
import {Todo} from '../model';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import {MdDone} from 'react-icons/md';
import './styles.css'

type Props= {
    todo: Todo;
    list: Todo[];
    setList: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo:React.FC<Props> = ({todo, list, setList}:Props) => {
    const [edit, setEdit]= useState(false);
    const [editTodo, setEditTodo] = useState(todo.todo)

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(()=> {
        inputRef.current?.focus()
    },[edit])

    const handleDone=(id: number)=> {
        setList(list.map((el)=> el.id===id ? {...el, isDone:!el.isDone} : el))
    }

    const handleDelete=(id: number)=> {
        setList(list.filter((el)=> el.id!==id))
    }

    const handleEdit=(e:React.FormEvent, id: number)=> {
        e.preventDefault();

        setList(list.map((el)=> el.id===id ? {...el, todo:editTodo} : el ))
        setEdit(false)
    }
  return (
    <form className='todos__single' onSubmit={(e)=> handleEdit(e, todo.id)}>
        {
            edit ? (
                <input ref={inputRef} value={editTodo} onChange={(e)=> setEditTodo(e.target.value)} className='todos__single--text'/>
            ) : (
                todo.isDone ? (
                    <s className='todos__single--text'>{todo.todo}</s>
                ) : (
                    <span className='todos__single--text'>{todo.todo}</span>
                )
            )
        }
       
        <div>
            <span className="icon">
                <AiFillEdit onClick={()=> {
                    if(!edit && !todo.isDone){
                        setEdit(!edit)
                    }
                }}/>
            </span>
            <span className="icon">
                <AiFillDelete onClick={()=> handleDelete(todo.id)}/>
            </span>
            <span className="icon">
                <MdDone onClick={()=> handleDone(todo.id)}/>
            </span>
        </div>
    </form>
  )
}

export default SingleTodo