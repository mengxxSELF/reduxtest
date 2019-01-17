import React, { Component } from 'react';
import { connect } from 'dva';

@connect(
  ({ users }) => ({ users }),
  (dispatch) => {
    return {
      add() { dispatch({ type: 'users/add' }) },
      reduce() { dispatch({ type: 'users/reduce' }) },
    }
  }
)
class Users extends Component {
  render () {
    const { users } = this.props
    return (
      <div>  
        <p onClick={() => this.props.add()} > 点击 + 1 </p>
        <p onClick={() => this.props.reduce()} > 点击 - 1 </p>
        {
          users.length && users.map((item, index) => {
            return <span key={index}> {item.name} </span>
          })
        }
      </div>
    )
  }
}