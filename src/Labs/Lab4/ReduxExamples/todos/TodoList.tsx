import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {addTodo, deleteTodo, setTodo, updateTodo} from "./todosReducer";

export default function TodoList() {
    const {todo , todos } = useSelector ((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Todo List</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <button onClick={() => dispatch(addTodo(todo))}
                            id="wd-add-todo-click"> Add </button>
                    <button onClick={() => dispatch(updateTodo(todo))}
                            id="wd-update-todo-click"> Update
                    </button>
                    <input
                        value={todo.title}
                        onChange={(e) => dispatch(setTodo({...todo, title: e.target.value}))}
                    />
                </li>
                {todos.map((todo: any) => (
                    <li key={todo.id} className="list-group-item">
                        <button onClick={() => dispatch(deleteTodo(todo.id))}
                                id="wd-delete-todo-click"> Delete
                        </button>
                        <button onClick={() => dispatch(setTodo(todo))}
                                id="wd-set-todo-click"> Edit
                        </button>
                        {todo.title}
                    </li>
                ))}
            </ul>
            <hr/>
        </div>
    );
}