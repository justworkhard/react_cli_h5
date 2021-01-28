import React, { useEffect, useState } from 'react';
import router from 'umi/router';
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
    data: []
}
export default (props: any) => {
    const data = ['https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3196022651,1348217134&fm=26&gp=0.jpg',
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=667380343,433390634&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3196022651,1348217134&fm=26&gp=0.jpg'
    ];
    const [startX, setStartX] = useState(0);
    const [endX, setEndX] = useState(0);
    const [index, setIndex] = useState(1);

    useEffect(() => {
        if (endX - startX < -100) {
            setIndex(index - 1);
        } else if (endX - startX > 100) {
            setIndex(index + 1);
        }
    }, [endX]);
    useEffect(() => {
      
    }, [index]);
    return (
      <div
        className={`${styles.carousel} `}
        onTouchStart={(e) => {
                setStartX(e.touches[0].clientX);
            }}
        onTouchMove={(e) => {
                setEndX(e.touches[0].clientX);
            }}
      >
        {
                data.map((item, index: number) => {
                    return (
                      <img className={styles.activeItem} src={item} alt="" />
                    );
                })
            }
      </div>
    );
};
