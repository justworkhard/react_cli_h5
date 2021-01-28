
import { persistEnhancer } from 'dva-model-persist';

export const dva = {
  config: {
    onError(err: ErrorEvent) {
      err.preventDefault();
      console.error(err.message);
    },
    extraEnhancers: [
      persistEnhancer()
    ],
  },
};
