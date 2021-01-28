import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less';

interface Props {
  getMoreData: Function,
  data: Array<any>,
  children: React.ReactNode,
  maxData: number,
  noMoreDate?: boolean,
  className?: string,
  offsetHeight?: number
}
function Notice() {
  return (
    <div className={styles.noData} >
      无更多数据
    </div>
  );
}
export default (props: Props) => {
  const { getMoreData, data, maxData, noMoreDate, className, offsetHeight } = props;
  const scroll: any = useRef();
  const [notMoreFlag, setNotMoreFlag] = useState<boolean>(false);

  useEffect(() => {
    if (maxData <= data.length) {

    }
  }, []);

  return (
    <div
      ref={scroll}
      className={`${styles.contentBody} ${className}`}
      onScroll={(e) => {
        if (!(e.currentTarget.scrollHeight - e.currentTarget.clientHeight > e.currentTarget.scrollTop) && maxData > data.length) {
          getMoreData();
        }
        else if (!(e.currentTarget.scrollHeight - e.currentTarget.clientHeight > e.currentTarget.scrollTop) && maxData <= data.length) {
          const div = document.createElement('div');
          document.body.appendChild(div);
          ReactDOM.render(<Notice />, div);
          setTimeout(() => {
            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
          }, 1500);
        }
      }}
    >
      {
        props.children
      }
      {/* {
        noMoreDate && maxData <= data.length ? (
          <div className={styles.noData}>
            无更多数据
          </div>
        ) : ''
      } */}
      {/* {
        notMoreFlag ? (
          <div className={styles.noData} >
            无更多数据
          </div>
        ) : (  <div className={styles.noData} >
          无更多数据
        </div>  )
      } */}

    </div>
  );
};
