import React, { Component } from "react";
import uniqid from "uniqid";
import Form from "./Form";
<<<<<<< HEAD
import "./../node_modules/semantic-ui-css/semantic.css";

import "./App.css";
=======
import "./App.css";
import EditEvent from "./EditEvent";
>>>>>>> 80c63e3090ff850961baa4971bc22e17d71d8e50
class App extends Component {
  constructor() {
    super();
    this.state = {
<<<<<<< HEAD
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
=======
      events: [],
      editedEvents: {
        id: uniqid(),
        question: "1poziom"
      }
    };
    this.handleEditEvent = this.handleEditEvent.bind(this);
    this.handleSaveEvent = this.handleSaveEvent.bind(this);
  }
  handleEditEvent(val) {
    this.setState(prevState => {
      return {
        editedEvents: Object.assign(prevState.editedEvents, val)
      };
    });
  }
  handleSaveEvent() {
    this.setState(prevState => ({
      events: [...prevState.events, prevState.editedEvent],
      editedEvent: {
        id: uniqid(),
        question: ""
      }
    }));
  }
  render() {
    const events = this.state.events.map(el => {
      return <Form onSave={() => alert("a")} />;
    });
    return (
      <div className="app">
        {events}
        <EditEvent onSave={() => this.handleSaveEvent()} />
>>>>>>> 80c63e3090ff850961baa4971bc22e17d71d8e50
      </div>
    );
  }
}

export default App;
