
export default function counter(
  state = {
    value: 0
  }, action) {

    switch(action.type) {
        case 'INCREMENT':

            return Object.assign({}, state, {
                value: ++state.value
            });

        case 'DECREMENT':
          if(state.value != 0){
              return {...state, value: --state.value}
            }
          return state;

        default:
            return state;
    }
}
