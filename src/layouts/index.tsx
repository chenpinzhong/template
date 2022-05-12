import React from 'react';
const Index=(props:any)=>{
    return (
        <div>
            <div>header 头部</div>
            {props.children}
            <div>Footer 底部</div>
        </div>
    );
};
export default Index;
