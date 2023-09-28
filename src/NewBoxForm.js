import { useState } from "react";


function NewBoxForm({ addBox }) {

  const initialState = {
    height: "",
    width: "",
    backgroundColor: "",
  };

  const [formData, setFormData] = useState(initialState);


  // handles form change
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input-height">Height: </label>
      <input type="text"
        id="input-height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />
      <br/>

      <label htmlFor="input-width">Width: </label>
      <input type="text"
        id="input-width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />
      <br/>

      <label htmlFor="input-backgroundColor">Background Color: </label>
      <input type="text"
        id="input-backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      <br/>
      <button type="submit">Create Box!</button>
    </form>
  );
}

export default NewBoxForm;
