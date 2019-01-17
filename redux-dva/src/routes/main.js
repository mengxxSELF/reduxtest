import React, { Component} from 'react';
import { connect } from 'dva';

@connect(
  ({main}) => ({main}),
  (dispatch) => {return {
    add() { dispatch({ type: 'main/add'}) },
    async() { dispatch({ type: 'main/asyncData'}) },
    reduce() { dispatch({ type: 'main/reduce'}) },
  }}
)
class Main extends Component {
  render () {
    return (
      <div>
        <p onClick={() => this.props.add()} > 点击 + 1 </p>
        <p onClick={() => this.props.reduce()} > 点击 - 1 </p>
        <p onClick={() => this.props.async()} > 点击进行异步请求 </p>
        <div> i am  {this.props.main} </div>
      </div>
    )
  }
}

export default Main

// import React, { Component } from 'react';
// import { connect } from 'dva';

// // @connect(
// //   ({main}) => ({main}),
// //   (dispath) => {return {
// //     add() { dispath({ type: 'main/addAction'}) }
// //   }}
// // )
// function Main({ dispatch, main }) {
//   function add() {
//     dispatch({ type: 'main/add' })
//   }
//   return (
//     <div>
//       <p onClick={add.bind(null)} > 点击 + 1 </p>
//       <p> 点击 - 1 </p>
//       <div> i am  {main} </div>
//     </div>
//   )
// }

// const MainBox = connect(
//   ({ main }) => ({ main })
// )(Main)

// export default MainBox