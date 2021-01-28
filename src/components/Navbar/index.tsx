import React from 'react';
import router from 'umi/router';
import styles from './index.less';

interface ComponentPros {
  title?: string,
  showIcon?: boolean
  onClickLeft?: Function
}
export default (props: ComponentPros)=> {
  return (
    <div className={styles.navBar}>
      {
        props.showIcon ? (
          <div
            onClick={() => {
            props.onClickLeft ? props.onClickLeft() : router.goBack();
          }}
            className="iconfont icon-fanhui"
            style={{ fontSize: '40px', color: '#fff' }}
          />
        ) : ''
      }
      <span className={styles.title}>
        {props.title}
      </span>
    </div>
  );
};
