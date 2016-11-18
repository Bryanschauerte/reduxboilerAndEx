import React from 'react';
import * as HPVActions from './actions/index';
import {connect} from 'react-redux';

import Product from './components/Product'
import StaggeredMo from './components/StaggeredMo'

class App extends React.Component {
    constructor(props){
        super(props);

        this.forwardIndex = this.forwardIndex.bind(this);
        this.backIndex = this.backIndex.bind(this);
        this.addStyleObj = this.addStyleObj.bind(this);


        this.state = {
          hovering:false,
          height:null,
          width:null
        }

    }

    forwardIndex(){
      return this.props.dispatch(HPVActions.forwardIndex())
    }
    backIndex(){
      return this.props.dispatch(HPVActions.backIndex())
    }
    addStyleObj(){
      const obj = {color:'red', backgroundColor:'blue'}
      this.props.dispatch(HPVActions.addStyleObj);
    }





    render() {
      console.log(this.props, "props")
        return (
            <div id='productContainer'>

                <input
                    onClick={this.forwardIndex}
                    type="button"
                    value="Next"
                    />

                <input
                  onClick={this.backIndex}
                  type='button'
                  value='Previous'/>
                  <div>

                  </div>

                <pre>
                    {this.props.activeIndex}
                </pre>

            
<div><StaggeredMo activeIndex={this.props.activeIndex} productArray= {this.props.productArray}/></div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
console.log(state, "state")
    return {
      activeIndex: state.horizontalPView.index,
      productArray: state.horizontalPView.productArray,
      changeHapping: state.horizontalPView.changeHappening,
      changeComplete: state.horizontalPView.changeDone
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        dispatch
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
