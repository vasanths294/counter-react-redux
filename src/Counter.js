import React from 'react';
import { connect } from 'react-redux';
import './App.css';

class Counter extends React.Component {


    dec = () => {
        this.props.dispatch( { type: "DECREMENT" })
    };

    inc = () => {
        this.props.dispatch( { type: "INCREMENT" })
    };
render() {
    return (
        <div className="App-header"> 
        hello
        
        <button onClick={ this.dec }> DEC </button>
        { this.props.count }
        <button onClick={ this.inc }> INC</button>
        </div>
    );
    }
}

const mapStateToProps = (state) => ({
    count: state.count
});

export default connect(mapStateToProps)(Counter);
