import styles from './index.less';
import {Button} from 'antd';
import {request} from 'umi';
import Header from '../layouts/header'
import React,{Component} from "react";

class Index extends React.Component{
    ref=React.createRef();
    state={
        site_name:'12222223'//站点名称
    }
    array=[1,3,4]
    logoClick=()=>{
        let temp_name=this.state.site_name
        this.setState({site_name:temp_name+'-x'});
        console.log(this.ref);
    };
    render() {
        let {site_name}= this.state;
        let p={name:'123'}
        return (
            <div>
                <Header {...p}>1111</Header>
                <div className={styles['default-navbar']} data-mode="site">
                    <a className={styles['default-navbar-logo']} href="#" onClick={this.logoClick} >{site_name}</a>
                    <nav>
                        <div className={styles['default-search']}>
                            <input ref={this.ref} type="search" className={styles['default-search-input']} />
                            <ul>
                                {
                                    this.array.map((item,index)=>{
                                        return <li key={index}>{item}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}
export default Index;




