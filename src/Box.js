

function Box({ id, height, width, backgroundColor, removeBox }) {

  function handleRemove() {
    removeBox(id);
  }

  const boxStyle = { height:height + "px", width:width + "px", backgroundColor, marginTop:"20px"};
  return (
    <>
      <div className="Box" style={boxStyle}></div>
      <button className="Box-remove-button"
        onClick={handleRemove}>Remove box!</button>
    </>
  );
}

export default Box;