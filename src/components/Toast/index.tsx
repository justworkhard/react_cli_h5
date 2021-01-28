import React, { useEffect, useRef, useState } from 'react';
import styles from './index.less';

interface Props {
  show: Boolean
}
export default (props: Props) => {
  const { show } = props;
  return (
    <div>
      {
        show ? (
          <div className={styles.loading}>
            <img className={styles.img} src={require('./loading.gif')} alt="" />
          </div>
        ) : ''
      }
    </div>
  );
};

