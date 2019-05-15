import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from "./components/Form";
import TodoItemList from './components/TodoItemList';

class App extends Component {
  id = 3

  state = {
    input: '',
    todos: [
      { id: 0, text: ' 1', checked : false },
      { id: 1, text: ' 2', checked : false },
      { id: 2, text: ' 3', checked : true },
    ]
  }
  
  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
      })
    });
  }

  handleChange = (e) => {
    this.setState({
        input: e.target.value
    });
  }

  handleKeyPress = (e) => {
      if(e.key === 'Enter'){
        this.handleCreate();
      }
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  render() {
    const { input } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
    } = this;

    return (
      <TodoListTemplate
        form= { 
          <Form
            value={input}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            onCreate={handleCreate}
          />
        }
      >
        <TodoItemList
          todos={ this.state.todos}
          onToggle={ handleToggle }
          onRemove={ handleRemove }
        />
      </TodoListTemplate>
    );
  }
}

export default App;
