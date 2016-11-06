import React from 'react';
import * as counter from '../../actions/counter';
import * as fetchDispatch from '../../actions/fetch';
import * as displayBoxes from '../../actions/displayBoxes';
import {connect} from 'react-redux';
import fetch from 'isomorphic-fetch';
import DisplayBox from './DisplayBox';
import HeaderInformation from './HeaderInformation'

class Display extends React.Component{
  constructor(props){
    super(props);
    this.renderBoxes = this.renderBoxes.bind(this);
    this.urlSubmit = this.urlSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.removeBox = this.removeBox.bind(this);
    this.removeAllBoxes = this.removeAllBoxes.bind(this);
    this.state={
      value:''
    }
  }
  onChange(value){
    this.setState({value: value.target.value})
  }
  renderBoxes(boxes){

    const keys = Object.keys(boxes);


    return keys.map((item)=>{
      let title = boxes[item].title;

        return <div>

          <DisplayBox
            title={title}
            boundRemoveBox = {this.removeBox.bind(null, title)}
            key = {Math.random()}
            fetchInfo={this.props.boxes[item]}>
          </DisplayBox>

        </div>
      })

  }
  removeAllBoxes(){
    this.props.dispatch(displayBoxes.removeAllBoxes());
  }
  removeBox(title){

    this.props.dispatch(displayBoxes.removeBox(title));

  }

componentDidMount(){
  const starting = ['frontend', 'javascript']
  starting.map(url => {
    this.urlSubmit(url)
  })

}
  urlSubmit(value){
    const {dispatch} = this.props;
    const subRedit = value;
    dispatch(fetchDispatch.selectURL(subRedit));
    dispatch(fetchDispatch.fetchData());
    this.setState({value:''})
   return displayBoxes.requestInformation(subRedit, dispatch)


  }

  render(){
    const {boxes} = this.props;
    return( <div>
      <HeaderInformation subredits={Object.keys(boxes)}/>
      <div style={{paddingBottom:'2%'}}>
        <label>
        Add a Sub-reddit<br/>
        <input
        type="text"
        className=""
        value={this.state.value}
        onChange={this.onChange}/>
        </label>

      <button onClick={this.urlSubmit.bind(null, this.state.value)}>submit</button>
      </div>



      {
        boxes?this.renderBoxes(boxes): <p>nothing</p>
      }

    </div>)
  }

}

const mapStateToProps = (state) => {
const {receivedData, fetching, error, url} = state.fetchStatus
const {value} = state.counter
const {boxes} = state.displayBoxes

    return {
      receivedData,
      fetching,
      error,
      url,
      value,
      boxes: Object.keys(boxes).length>0? boxes:false

    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        dispatch
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Display);
