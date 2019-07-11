import React from 'react';
import './TodoListTemplate.css';
const TodoListTemplate = ({ form, children, palette }) => { //비구조화 할당
    return (
        <main className="todo-list-template">
            <div className="title">
                Today Todo
                </div>
            <section className="palette-wrapper">
                {palette}
            </section>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    );
};

export default TodoListTemplate;