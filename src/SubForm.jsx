import "./../node_modules/semantic-ui-css/semantic.css";
import "./SubForm.css";
import React, { Component } from "react";
import uniqid from "uniqid";

class SubForm extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
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
            <option value="Equals">Equals</option>
            <option value="Not Equal">Not Equal</option>
            <option value="Comparison">Comparison</option>
            <option value="Less than">Less than</option>
            <option value="Greater Than">Greater Than</option>
            <option value="Less than or equal">Less than or equal</option>
            <option value="Greater than or equal">Greater than or equal</option>
          </select>
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
            <option value="Yes/No">Yes/No</option>
            <option value="Text">Text</option>
            <option value="Number">Number</option>
          </select>
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
      </div>
    );
  }
}
export default SubForm;
