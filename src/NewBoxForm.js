
function NewBoxForm({addBox}){
  const [formData, setFormData] = useState({
    height: "",
    width: "",
    backgroundColor: "",
  })

  return (
    <form onSubmit={addBox}>
      <input type="text"
        id="input-height"
        name="height"
        value= {formData.height}
        onChange={handleChange}
      />
      <label htmlFor="input-height">Height: </label>

      <input type="text"
        id="input-width"
        name="width"
        value= {formData.width}
        onChange={handleChange}
      />
      <label htmlFor="input-width">Width: </label>

      <input type="text"
        id="input-backgroundColor"
        name="backgroundColor"
        value= {formData.backgroundColor}
        onChange={handleChange}
      />
      <label htmlFor="input-backgroundColor">Background Color: </label>
    </form>
  )
}

export default NewBoxForm;
