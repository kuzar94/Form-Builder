<<<<<<< HEAD
import "./../node_modules/semantic-ui-css/semantic.css";
import "./SubForm.css";
import React, { Component } from "react";
import uniqid from "uniqid";
import PropTypes from "prop-types";

class SubForm extends Component {
=======
import React from "react";
import "./SubForm.css";
import EditEvent from "./EditEvent";
import uniqid from "uniqid";
import "./../node_modules/semantic-ui-css/semantic.css";

class SubForm extends React.Component {
>>>>>>> 80c63e3090ff850961baa4971bc22e17d71d8e50
  constructor() {
    super();
    this.state = {
      events: [],
<<<<<<< HEAD
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
        <SubForm
          key={el.id}
          name={el.name}
          id={el.id}
          onRemove={id => this.handleRemoveEvent(id)}
        />
      );
    });
    return (
      <div className="subform">
        <strong>Condition</strong>
        <div className="ui input type2">
          <select
            className="selectBox"
            name="conditionSub"
            onChange={e => console.log(e.target.name, e.target.value)}
          >
=======
      editedEvents: {
        id: uniqid(),
        question: "3poziom"
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
      <div className="subform">
        <form>
          <strong>Condition</strong>
          <select>
            <option disabled selected value>
              {" "}
              -- select an option --{" "}
            </option>
>>>>>>> 80c63e3090ff850961baa4971bc22e17d71d8e50
            <option value="Equals">Equals</option>
            <option value="Not Equal">Not Equal</option>
            <option value="Comparison">Comparison</option>
            <option value="Less than">Less than</option>
            <option value="Greater Than">Greater Than</option>
            <option value="Less than or equal">Less than or equal</option>
            <option value="Greater than or equal">Greater than or equal</option>
          </select>
<<<<<<< HEAD
        </div>
        <div className="ui input type3">
          <select
            className="selectBox"
            name="xxxx"
            onChange={e => console.log(e.target.name, e.target.value)}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <br />
        <strong>Question</strong>
        <div className="ui input question2">
          <input type="text" name="question" value="" />
        </div>
        <br />
        <strong>Type</strong>
        <div className="ui input type">
          <select
            className="selectBox"
            name="typeSub"
            onChange={e => console.log(e.target.name, e.target.value)}
          >
=======
          <select>
            <option disabled selected value>
              {" "}
              -- select an option --{" "}
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <br />
          <strong>Question</strong>
          <input type="text" name="question" value="" />
          <br />
          <strong>Type</strong>
          <select>
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

=======
>>>>>>> 80c63e3090ff850961baa4971bc22e17d71d8e50
export default SubForm;
