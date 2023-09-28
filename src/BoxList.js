import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

//TODO: docstrings!
function BoxList() {
  const initialBoxes = [{ id: "123", height: "20", width: "20", backgroundColor: "red" }];
  const [boxes, setBoxes] = useState(initialBoxes);


  //function to add to Boxes
  function addBox(box) {
    console.log("box inside addBox()", box);
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }

  //removes box based on matching key
  function removeBox(id) {
    setBoxes(oldBoxes => oldBoxes.filter(box => box.id !== id));
  }

  //function that will map over boxes and return a JSX array
  function makeboxesJSX() {
    //this should make elements like: ...boxes[i], }
    let newBoxes = boxes.map(box => {
      const newBox = <Box
        key={box.id}
        id={box.id}
        width={box.width}
        height={box.height}
        backgroundColor={box.backgroundColor}
        removeBox={removeBox}
      />;
      return newBox;
    });
    return newBoxes;
  }

  console.log("makeboxesJSX()", makeboxesJSX());
  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {makeboxesJSX()}
    </div>
  );
}

export default BoxList;
