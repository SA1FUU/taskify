import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TodoContext = createContext();

export const useTodo = () => {
    return useContext(TodoContext);
};

export const TodoProvider = (props) => {
    const [inputTodo, setInputTodo] = useState('');
    const [description, setDescription] = useState('');
    const [createDate, setCreateDate] = useState('');
    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem('taskify');
        return storedTodos ? JSON.parse(storedTodos) : [];
    });
    const [editedText, setEditedText] = useState('');
    const [editedDescription, setEditedDescription] = useState('');
    const [updateDate, setUpdateDate] = useState('');
    const [editStatus, setEditStaus] = useState(false);
    const [editId, setEditId] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [socialShow, setSocialShow] = useState(false);

    const [searchValue, setSearchValue] = useState('')
    const [searchShow, setSearchShow] = useState(false);

    const [filter, setFilter] = useState({
        all: true,
        complete: false,
        incomplete: false
    })

    useEffect(() => {
        localStorage.setItem('taskify', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (title, description, createDate) => {
        const id = uuidv4();
        setTodos([
            {
                id: id,
                title: title,
                description: description,
                createDate: createDate,
                isCompleted: false
            },
            ...todos
        ]);
    };

    const updateTodo = (id, title, description, updateDate) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    title: title,
                    description: description,
                    updateDate: updateDate
                };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const removeTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    const toggleComplete = (id) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const statesToPass = {
        inputTodo,
        setInputTodo,
        description,
        setDescription,
        createDate,
        setCreateDate,
        todos,
        setTodos,
        editedText,
        setEditedText,
        editedDescription,
        setEditedDescription,
        updateDate,
        setUpdateDate,
        editStatus,
        setEditStaus,
        editId,
        setEditId,
        showForm,
        setShowForm,
        socialShow,
        setSocialShow,
        filter,
        setFilter,
        searchValue,
        setSearchValue,
        searchShow,
        setSearchShow,
        addTodo,
        removeTodo,
        updateTodo,
        toggleComplete
    };

    return (
        <TodoContext.Provider value={statesToPass}>
            {props.children}
        </TodoContext.Provider>
    );
};
