import React, { Component } from "react";
import FormSubmit from "./components/FormSubmit";
import HeaderComponents from "./components/HeaderComponents";
import List from "./components/List";
import ListItems from "./components/ListItems";
import Axios from "axios";
//มี . นำหน้า คือค้นหาจากไฟล์ของเรา ถ้าไม่มี . คือหาจาก node_modules

// สร้างตัวแปรเก็บ url เพื่อเรียกใช้ให้ง่ายขึ้น
const URL ="http://localhost:3001";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      message: ""
    };
    // โคตรงง
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmitMessage = this.onSubmitMessage.bind(this);
  }

  componentDidMount = () => {
    // Axios.get("http://localhost:3001/todos").then(response => {
    Axios.get(URL +"/todos").then(response => {
      // console.log(response);
      this.setState({todos: response.data});
    });
  };

  onChangeMessage(e) {
    this.setState({ message: e.target.value });
  }

  onSubmitMessage(e) {
    // ป้องกันการเปลี่ยนหน้า เช่น submit แล้วไม่ต้อง reload
    // e.preventDefault();
    // let oldTodos = this.state.todos;
    // let todosLength = this.state.todos.length;
    // let lastId = this.state.todos[todosLength - 1].id;
    // let newmessage = {
    //   // id: lastId + 1,
    //   name: this.state.message,
    //   complete: false
    // };
    // oldTodos.push(newmessage);
    // this.setState({ todos: oldTodos });
    Axios.post(URL +"/todos",{
      name: this.state.message,
      complete: false
    }).then(response => {
      let oldState = this.state.todos;
      oldState.push(response.data);
      this.setState({todos: oldState});
    })
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
        <FormSubmit
          onChangeMessage={this.onChangeMessage}
          onSubmitMessage={this.onSubmitMessage}
        />
      </div>
    );
  }
}

export default App;
