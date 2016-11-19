import React from 'react';
import * as HPVActions from './actions/index';
import {connect} from 'react-redux';
import Product from './components/Product'

class App extends React.Component {
    constructor(props){
        super(props);

        this.forwardIndex = this.forwardIndex.bind(this);
        this.backIndex = this.backIndex.bind(this);
        this.selectIndex = this.selectIndex.bind(this);
        this.addStyleObj = this.addStyleObj.bind(this);

    }

    forwardIndex(){
      return this.props.dispatch(HPVActions.forwardIndex())
    }
    selectIndex(index){
      console.log('app selectIndex')
      return this.props.dispatch(HPVActions.selectIndex(index))
    }
    backIndex(){
      return this.props.dispatch(HPVActions.backIndex())
    }
    addStyleObj(){
      return this.props.dispatch(HPVActions.addStyleObj());
    }

    render() {

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

                <pre>
                    {this.props.activeIndex}
                </pre>


                <div>
                  <Product
                    selectIndex = {HPVActions.selectIndex}
                    testFun = {this.selectIndex}
                    dispatch = {this.props.dispatch}
                    activeIndex={this.props.activeIndex}
                    productArray= {this.props.productArray}/>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
console.log(state, "state")
    return {
      activeIndex: state.horizontalPView.index,
      productArray: state.horizontalPView.productArray
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        dispatch
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
