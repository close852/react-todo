import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList'
import Palette from './components/Palette'
const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];
class App extends Component {


  id = 3
  state = {
    input: '',
    color: '#343a40',
    todos: [
      { id: 0, text: ' 리액트 소개1', checked: false, color: '#f03e3e' },
      { id: 1, text: ' 리액트 소개2', checked: true, color: '#12b886' },
      { id: 2, text: ' 리액트 소개3', checked: false, color: '#228ae6' }
    ]
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleCreate = () => {
    const { input, todos, color } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({ // 데이터 추가시, push가 아닌 concat 등을 이용하여 추가할 것.(원본 변경하면 안됨.)
        id: this.id++,
        text: input,
        checked: false,
        color: color
      })
    });
  }
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }
  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    //아래 방법으로도 구현 가능
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    }
    this.setState({
      todos: nextTodos
    })
    /*
    this.setState({
      todos: [
        ...todos.slice(0, index),
        {
          ...selected,
          checked: !selected.checked
        },
        ...todos.slice(index + 1, todos.length)
      ]
    })
    */
  }
  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }

  handleColor = (color) => {
    this.setState({
      color: color
    })
  }


  render() {
    const { input, todos, color } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleColor
    } = this;

    return (
      <TodoListTemplate form={(
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
          color={color}
        />
      )}
        palette={(
          <Palette colors={colors} onSelect={handleColor} selected={color} />
        )}
      >
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
      </TodoListTemplate>
    );
  }
}

export default App;
