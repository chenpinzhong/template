import React from 'react';
import {connect} from 'umi';
import {Button} from "antd";

const Dva = (props) => {
    const {dispatch}=props;
    console.log(props.userList)
    const getData=()=>{
      console.log(props.userList)
      dispatch({
        type:'userList/fethUsers',
      })
    }
    return (
      <div>
        <h3>Dva的使用</h3>
        <Button onClick={getData}>1</Button>
      </div>
    );
}

export default connect(({userList})=>({userList}))(Dva);

