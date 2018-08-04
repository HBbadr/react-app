import React, { Component } from "react";

function ListItem(props) {
  return <li onClick={props.onClick}>{props.item}</li>;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ["Apple", "Banana", "Orange"]
    };
  }
  onClick = index => {
    var newList = this.state.list.slice();
    newList.splice(index, 1);
    this.setState({ list: newList });
  };

  addItem() {
    var item = document.getElementById("listItem").value;
    document.getElementById("listItem").value = "";
    var newList = this.state.list.slice();
    newList.push(item);
    this.setState({ list: newList });
  }

  render() {
    var listItems = [];
    this.state.list.forEach((item, i) => {
      listItems.push(
        <ListItem key={item} item={item} onClick={() => this.onClick(i)} />
      );
    });
    return (
      <div>
        <h1>Hi {this.props.name} </h1>
        <input type="text" id="listItem" placeholder="Add Item" />
        <button type="button" onClick={() => this.addItem()}>
          Add
        </button>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default App;
