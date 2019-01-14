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
        <strong>Question</strong>
        <div className="ui input question">
          <input
            type="text"
            name="question"
            onChange={e => console.log(e.target.name, e.target.value)}
          />
        </div>
        <br />
        <strong>Type</strong>
        <div className="ui input type">
          <select
            className="selectBox"
            name="type"
            onChange={e => console.log(e.target.name, e.target.value)}
          >
            <option value="Yes/No">Yes/No</option>
            <option value="Text">Text</option>
            <option value="Number">Number</option>
          </select>
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
      </div>
    );
  }
}
Form.propTypes = {
  name: PropTypes.string
};
export default Form;
