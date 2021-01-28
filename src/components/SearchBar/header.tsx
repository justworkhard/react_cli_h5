import React, { useState, useEffect } from 'react';

import router from 'umi/router';
import styles from './index.less';

export default (props: any) => {
  const [searchPage, setSearchPage] = useState(false);
  function search() {
    setSearchPage(true);
  }
  function hiddenSearchPage() {
    setSearchPage(false);
  }
  return (
    <div className={styles.app}>
      {
        props.showIcon ? (
          <div
            onClick={() => {
            router.push('/');
          }}
            className="iconfont icon-fanhui"
            style={{ fontSize: '40px', color: '#fff' }}
          />
        ) : ''
      }
      <div className={styles.search} onClick={search}>
        <div style={{ fontSize: '50px' }} className='iconfont icon-sousuo' />
        <input placeholder='搜索美食/饮品/酒店/景点/租车' type="text" />
      </div>
      {
        searchPage ? (
          <div className={styles.searchPage}>
            <div className={styles.header}>
              <div onClick={hiddenSearchPage} className="iconfont icon-fanhui" style={{ fontSize: '40px' }} />
              <div className={styles.searchBox}>
                <div className="iconfont icon-sousuo" style={{ fontSize: '35px' }} />
                <input type="text" placeholder='请输入' />
              </div>
              <div className={styles.btn}>搜索</div>
            </div>
          </div>
        ) : ''
      }

    </div>
  );
};