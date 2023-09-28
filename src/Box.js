

function Box({ key, height, width, backgroundColor, removeBox }) {

  function handleRemove() {
    removeBox(key);
  }

  const boxStyle = { height, width, backgroundColor };
  return (
    <>
      <div className="Box" style={boxStyle}></div>
      <button className="Box-remove-button"
        onClick={handleRemove}>Remove box!</button>
    </>
  );
}

export default Box;