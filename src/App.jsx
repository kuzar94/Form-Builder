import React, { Component } from "react";
import uniqid from "uniqid";
import Form from "./Form";
import "./../node_modules/semantic-ui-css/semantic.css";

import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      events: [{ id: 1, name: "pytanie1" }, { id: 2, name: "pytanie2" }],
      editEvents: { id: uniqid(), name: "pytanie3" }
    };
    this.handleSaveEvent = this.handleSaveEvent.bind(this);
    this.handleRemoveEvent = this.handleRemoveEvent.bind(this);
  }
  handleSaveEvent() {
    this.setState(prevState => ({
      events: [...prevState.events, prevState.editEvents],
      editEvents: {
        id: uniqid(),
        name: ""
      }
    }));
  }
  handleRemoveEvent(id) {
    this.setState(prevState => ({
      events: prevState.events.filter(el => el.id !== id)
    }));
  }
  render() {
    const events = this.state.events.map(el => {
      return (
        <Form
          key={el.id}
          name={el.name}
          id={el.id}
          onRemove={id => this.handleRemoveEvent(id)}
          zz
        />
      );
    });
    return (
      <div className="main">
        <div className="app">
          <h1>FORM BUILDER</h1>
          {events}
          <button
            type="button"
            className="ui grey button"
            onClick={() => this.handleSaveEvent()}
          >
            {" "}
            Add Input
          </button>
        </div>
      </div>
    );
  }
}

export default App;
