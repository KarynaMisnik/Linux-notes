import React, { useState } from "react";

const ResumeOne = () => {
  const [editableText, setEditableText] = useState("Edit me!");

  const handleInputChange = (event) => {
    setEditableText(event.target.innerText);
  };

  const handleSave = () => {
    // You can implement your save logic here
    console.log("Text saved:", editableText);
  };

  return (
    <div>
      <h1
        contentEditable
        onBlur={handleInputChange}
        style={{ borderBottom: "1px dashed #ccc", cursor: "text" }}
      >
        {editableText}
      </h1>
      <br />
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
};

export default ResumeOne;
