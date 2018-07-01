import React, { Component } from "react";
import FormSubmit from './components/FormSubmit';
import HeaderComponents from './components/HeaderComponents';
import List from "./components/List";
import ListItems from "./components/ListItems";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        todos: [
            { id: 1, name: "Shopping", complete: false},
            { id: 2, name: "Swimming", complete: false},
            { id: 3, name: "Watch Television", complete: false},
            { id: 4, name: "Excercise", complete: false}],
            message: ""
      };
      // โคตรงง
      this.onChangeMessage = this.onChangeMessage.bind(this);
      this.onSubmitMessage = this.onSubmitMessage.bind(this);
}

onChangeMessage(e){
  this.setState({message: e.target.value});
}

onSubmitMessage(e){
  // ป้องกันการเปลี่ยนหน้า เช่น submit แล้วไม่ต้อง reload
  e.preventDefault();
  let oldTodos = this.state.todos;
  let todosLength = this.state.todos.length;
  let lastId = this.state.todos[todosLength - 1].id
  let newmessage = {id: lastId + 1, name: this.state.message, complete: false};
  oldTodos.push(newmessage);
  this.setState({todos: oldTodos});
}
  render() {
    return (
      <div
        style={{
          borderColor: "#e12c6a",
          borderWidth: 2,
          borderStyle: "solid",
          borderRadius: 4,
          width: 1024,
          margin: "auto",
          marginTop: 20
        }}
      >
      <HeaderComponents />        
        <List todos={this.state.todos} />
        <FormSubmit onChangeMessage={this.onChangeMessage} onSubmitMessage={this.onSubmitMessage} />        
      </div>
    );
  }
}

export default App;