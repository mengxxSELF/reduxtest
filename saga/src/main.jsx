import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as action from './redux/action'
// import { valueAdd, valueReduce } from './redux/action'

@connect(
  ({ number, payload }) => ({ number, payload }),
  dispatch => bindActionCreators(action, dispatch)
)
class Main extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <p onClick={() => this.props.valueAdd()} > 点击 + 1 </p>
          <p onClick={() => this.props.valueReduce()} > 点击 - 1 </p>
          <div> message is {this.props.payload} ,i am {this.props.number} </div>
        </header>
      </div>
    )
  }
}
export default Main
// const MainBox = connect(
//   (state) => { return { number: state.number }},
//   dispatch => {
//     return {
//       addNumber: () => { dispatch(valueAdd()) },
//       reduceNumber: () => { dispatch(valueReduce()) }
//     }
//   }
// )(Main)
 
// export default MainBox