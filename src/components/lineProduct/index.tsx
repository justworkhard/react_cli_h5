import React, { useEffect, useState } from 'react';
import router from 'umi/router';
import publicStyle from '@/public.less';
import { getAcountTime } from '@/public';
import LazyLoad from 'react-lazyload';
import styles from './index.less';

interface Product {
  productionCode: string,
  id: string,
  productionUrl: string,
  productionName: string,
  lableValue: Array<Object>,
  discountPrice: number,
  avgSaleAmountPerMonth: number,
  merchantCode: string,
  merchantName: string,
  endDate: string,
  price: number
}
interface Props {
  productData: Product
}
export default (props: any) => {
  const { productData } = props;
  const [time, setTime] = useState('');

  useEffect(() => {
    if (parseInt(getAcountTime(productData.endDate).day) > 0) {
      setTime(`${getAcountTime(productData.endDate).day}天`);
    } else if (parseInt(getAcountTime(productData.endDate).hour) > 0) {
      setTime(`${getAcountTime(productData.endDate).hour}小时`);
    } else {
      if (parseInt(getAcountTime(productData.endDate).minu) <= 1) {
        setTime(`不足1分钟`);
      } else {
        setTime(`${getAcountTime(productData.endDate).minu}分`);
      }
    }
  }, []);
  return (
    <div className={`${styles.productList} `}>
      <div
        key={productData.id}
        className={styles.product}
        onClick={() => {
          if (productData.state == 'soldOut') {
            return;
          }
          router.push(`/detail?productionCode=${productData.productionCode}&id=${productData.id}`);
        }}
      >
        <div className={styles.productImgBox}>
          {
            productData.state == 'soldOut' ? (
              <img className={styles.imgBox} src={require('@/static/img/soldOut.png')} alt="" />
            ) : ''
          }
          <LazyLoad
            height={200}
            offset={[200, 0]}
            overflow
            placeholder={<img width="100%" height="100%" src={require('@/static/img/loading.gif')} alt="logo" />}
          >
            <img src={productData.productionUrl} alt="" className={styles.avadar} />
          </LazyLoad>
          {
            productData.state == 'soldOut' ? '' : (
              <p className={styles.time}>剩余{time}</p>
            )
          }
        </div>
        <div className={`${styles.info}`}>
          <div className={`${styles.name} ${publicStyle.threeLineEllipsis}`}>{productData.productionName}</div>
          <div className={styles.mess}>
            <span className={`${styles.sall} `}> 门市价：￥{productData.price / 100}
            </span>
            <span className={styles.price}>￥{productData.discountPrice / 100}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
