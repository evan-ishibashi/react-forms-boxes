import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import {v4 as uuid} from "uuid";

function BoxList() {
  const [boxes, setBoxes] = useState([]);
  //boxes will look like:
  [{width: 1, height: 1, backgroundColor: 'red'}]
  //function to add to Boxes
  function addBox(){
    //this will have setBoxes do something.

    //in this addbox, make sure to add key with uuid.
  }

  function removeBox(key){
    //loop through boxes state, checking which box has key = key
  }

  //function that will map over boxes and return a JSX array
  function makeboxesJSX(){
    //this should make elements like: ...boxes[i], }
    let newBoxes = boxes.map(box => {
      <Box
      key={box.key}
      width={box.width}
      height={box.height}
      backgroundColor={box.backgroundColor}
      removeBox = {removeBox}
    />
    })
    return newBoxes;
  }

  return (
    <div className="BoxList">
      {makeboxesJSX()}
      <NewBoxForm addBox={addBox}/>
    </div>
  );
}

export default BoxList;
