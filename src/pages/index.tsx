import styles from './index.less';
import {Button} from 'antd';
import { request } from 'umi';

export default function IndexPage(props:any) {
  const getDate=function(){
      //请求数据
      request('api/users').then(res=>{
        console.log(res)
      });
  };

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button onClick={getDate}> 点我获取数据</Button>
    </div>
  );
}
