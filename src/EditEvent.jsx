import React from "react";
const EditEvent = props => {
  return (
    <div className="edit-event">
<<<<<<< HEAD
      <button type="button" onClick={() => props.onSave()}>
        {" "}
        {props.add}{" "}
      </button>
=======
      <button onClick={() => props.onSave()}> Add Input </button>
>>>>>>> 80c63e3090ff850961baa4971bc22e17d71d8e50
    </div>
  );
};
export default EditEvent;
