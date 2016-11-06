
function boxCreate(state = {
  valid: false,
  items: []
}, action){

    switch (action.type) {
      case "ADD_BOX":
        const postsPresent = true;
        const {title, items} = action.payload;

        return {
          ...state,

            valid: postsPresent,
            items:items.data.children,
            kind: items.kind,
            title: title
             }
        break;
      default:
        return state;
    }
  }

export default function displayBoxes (
  state = {boxes:{}}, action){
  const boxTitle = action.title;

  switch (action.type) {
    case 'ADD_BOX':

      return {...state,
        boxes: {...state.boxes,
          [action.payload.title]: boxCreate(state, action)
        }
      }
    case 'REMOVE_BOX':

    const targetName = action.payload.title;
    let boxes = state.boxes
      if(boxes.hasOwnProperty(targetName)){

        delete boxes[targetName]


      }

      return {...state, boxes};


    case 'REMOVE_ALL_BOXES':
      return {  }
    default:
      return state
  }
}
