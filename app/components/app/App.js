import React from 'react';
import * as counter from '../../actions/counter';
import * as fetch from '../../actions/fetch';
import {connect} from 'react-redux';
import Display from './Display';



class App extends React.Component {
    constructor(){
        super();

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

    }

    increment(){
      return this.props.dispatch(counter.increment())
    }
    decrement(){
      return this.props.dispatch(counter.decrement())
    }

    render() {
        return (
            <div>
                <input
                    onClick={this.increment}
                    type="button"
                    value="Increment"
                    />

                <input
                    onClick={this.decrement}
                    type="button"
                    value="Decrement"
                    />

                <pre>
                    {this.props.value}
                </pre>
                <div>
                  <Display></Display>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {

    return {
        value: state.counter.value,
        url: state.fetchStatus.url
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        dispatch
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
