import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    render() {
        const { text, checked, id, onToggle, onRemove, color } = this.props;
        const style = {
            color: color
        }
        return (
            <div className="todo-item" onClick={() => onToggle(id)} > {/* 해당 코드 주의... 메소드 실행하는 것이 아니라 실행 대기임. */}
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // event의 확산을 막아줌.
                    onRemove(id)
                }}>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div style={style}>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}

export default TodoItem;