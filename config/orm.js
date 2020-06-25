const connection = require("./connection");

const seeAllTodos = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM todos", (err, data) => {
        err? reject(err) : resolve(data);
    });
});
};

const showTodo = (todoId) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM todos WHERE ?", [{id: todoId}], (err, data)=>{
            err? reject(err) : resolve(data);
        });
    });
};

const addTodo = (userText) => {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO todos SET ?", [{text: userText}], (err) => {
            err? reject(err) : resolve({msg: "success"});
        });
    });
};

const deleteTodo = (todoId) => {
    return new Promise((resolve, reject) => {
        connection.query("DELETE FROM todos WHERE ?", [{id: todoId}], (err)=> {
            err? reject(err) : resolve({msg: "todo deleted"});
        });
    });
};

const editTodo =(obj) => {
    return new Promise((resolve, reject)=> {
        connection.query("UPDATE todo SET ? WHERE ?", [{text: obj.todoText, completed: obj.todoCompleted}, {id: obj.todoId}], (err) => {
            err? reject(err) : resolve({msg: "todo updated"});
        });
    });

};

module.exports = {seeAllTodos, showTodo, addTodo, deleteTodo, editTodo};