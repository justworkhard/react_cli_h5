import React, { useState, useEffect} from 'react';
import { ConnectState } from '@/models/connect';
import { connect } from 'dva';
import styles from './index.less';

function basicApp(props: any) {

  useEffect(() => {
  }, []);

  return (
    <div className={styles.normal}>
    </div >
  );
}

export default connect(({ user }: ConnectState) => ({
  userInfo: user.currentUser,
  indexTab: user.indexTab
}))(basicApp);