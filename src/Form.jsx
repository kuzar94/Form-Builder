<<<<<<< HEAD
import "./../node_modules/semantic-ui-css/semantic.css";
import "./Form.css";
import React, { Component } from "react";
import uniqid from "uniqid";
import PropTypes from "prop-types";
import SubForm from "./SubForm";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      events: [{ id: 4, name: "pytanie2" }],
      editEvents: [{ id: uniqid(), name: "pytanie3" }]
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
        <SubForm
          key={el.id}
          name={el.name}
          id={el.id}
          onRemove={id => this.handleRemoveEvent(id)}
        />
      );
    });
    return (
      <div className="form">
        <div id="baca"> MA SIE ZMIENIC </div>
        <strong>Question</strong>
        <div className="ui input question">
=======
import React from "react";
import SubForm from "./SubForm";
import PropTypes from "prop-types";
import "./Form.css";
import EditEvent from "./EditEvent";
import uniqid from "uniqid";
import "./../node_modules/semantic-ui-css/semantic.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      editedEvents: {
        id: uniqid(),
        question: "2poziom"
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
      return <SubForm onSave={() => alert("a")} />;
    });
    return (
      <div className="form">
        <form>
          <strong>Question</strong>
>>>>>>> 80c63e3090ff850961baa4971bc22e17d71d8e50
          <input
            type="text"
            name="question"
            onChange={e => console.log(e.target.name, e.target.value)}
          />
<<<<<<< HEAD
        </div>
        <br />
        <strong>Type</strong>
        <div className="ui input type">
          <select
            className="selectBox"
            name="type"
            onChange={e => console.log(e.target.name, e.target.value)}
          >
=======
          <br />
          <strong>Type</strong>
          <select
            name="type"
            onChange={e => console.log(e.target.name, e.target.value)}
          >
            <option disabled selected value>
              {" "}
              -- select an option --{" "}
            </option>
>>>>>>> 80c63e3090ff850961baa4971bc22e17d71d8e50
            <option value="Yes/No">Yes/No</option>
            <option value="Text">Text</option>
            <option value="Number">Number</option>
          </select>
<<<<<<< HEAD
        </div>
        <br />
        <div className="buttons">
          <button
            type="button"
            className="ui grey button"
            onClick={() => this.handleSaveEvent()}
          >
            Add Sub-Input
          </button>
          <button
            className="ui grey button"
            type="button"
            onClick={() => this.props.onRemove(this.props.id)}
          >
            Delete
          </button>
        </div>
        {events}
=======
          <br />
        </form>
        <div className="form">
          <EditEvent onSave={() => this.handleSaveEvent()} />
          {events}
        </div>
>>>>>>> 80c63e3090ff850961baa4971bc22e17d71d8e50
      </div>
    );
  }
}
<<<<<<< HEAD
Form.propTypes = {
  name: PropTypes.string
};
=======

>>>>>>> 80c63e3090ff850961baa4971bc22e17d71d8e50
export default Form;
