import React, { Component } from 'react';
class ListItems  extends Component {
    
    render() {
        // let todos = this.todos.map
        return (
            <React.Fragment>
            {this.props.todos.map(item => (
                <div
                key = {item.id}
            style={{
              backgroundColor: "#fefefe",
              borderColor: "#ccc",
              borderWidth: 1,
              borderStyle: "solid",
              borderRadius: 5,
              margin: 2,
              padding: 5,
              paddingTop: 10,
              paddingBottom: 19
            }}
          >
            <input type="checkbox"/>{item.name}
          </div>
            ))}
            </React.Fragment>
        //     <React.Fragment>
        // <div
        //     style={{
        //       backgroundColor: "#fefefe",
        //       borderColor: "#ccc",
        //       borderWidth: 1,
        //       borderStyle: "solid",
        //       borderRadius: 5,
        //       margin: 2,
        //       padding: 5,
        //       paddingTop: 10,
        //       paddingBottom: 19
        //     }}
        //   >
        //     <input type="checkbox" checked /> <s> Shopping</s>
        //   </div>              
          
        //     </React.Fragment>
                     
          
        );
    }
}

export default ListItems ;