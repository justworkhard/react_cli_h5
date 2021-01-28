import { Effect, Reducer } from 'umi';

export interface CurrentUser {
    mallCode?: string;
    merchantCode?: string;
    merchantName?: string;
    templateCode?: string;
    key?: string;
    value?: string;
    groupCode?: string;
    type?: string;
    code?: string;
}

export interface WXInfo {
    headPicUrl?: string;
    nickName?: string;
    tel?: string;
    gender?: string;
    vipType?: string;
    point?: number;
    cardNum?: number;
    money?: number;
}
export interface UserModelState {
    currentUser?: CurrentUser;
    openid?: string;
    indexTab?: string;
    wxData?: WXInfo;
    payData?: any
}

export interface UserModelType {
    namespace: 'user';
    state: UserModelState;
    effects: {
        fetchCurrent: Effect;
        fetchOpenId: Effect;
        fetchWXData: Effect;
        fetchpayData: Effect;
        fetchIndexTab: Effect;
    };
    reducers: {
        saveCurrentUser: Reducer<UserModelState>;
        saveOpenid: Reducer<UserModelState>;
        saveIndexTab: Reducer<UserModelState>;
        saveWXData: Reducer<UserModelState>;
        savepayData: Reducer<any>;
    };
}
interface response {
    type: string,
    payload: CurrentUser,
}
interface openidModel {
    type: string,
    payload: string,
}
interface responseWXInfo {
    type: string,
    payload: WXInfo,
}

const UserModel: UserModelType = {
    namespace: 'user',

    state: {
        currentUser: {},
        // openid: '',
        openid: process.env.NODE_ENV == 'development' ? 'oeM5YuGZS2kAr1mQnRNFff9w_vhA' : '',
        indexTab: '',
        wxData: {},
        payData: [],
    },

    effects: {
        *fetchCurrent(response: response, { call, put }) {
            yield put({
                type: 'saveCurrentUser',
                payload: response.payload,
            });
        },
        *fetchOpenId(response: openidModel, { call, put }) {
            yield put({
                type: 'saveOpenid',
                payload: response.payload,
            });
        },
        *fetchIndexTab(response: openidModel, { call, put }) {
            yield put({
                type: 'saveIndexTab',
                payload: response.payload,
            });
        },
        *fetchWXData(response: openidModel, { call, put }) {
            yield put({
                type: 'saveWXData',
                payload: response.payload,
            });
        },
        *fetchpayData(response: openidModel, { call, put }) {
            yield put({
                type: 'savepayData',
                payload: response.payload,
            });
        },
    },

    reducers: {
        saveCurrentUser(state: UserModelState, action: { payload: any; }) {
            return {
                ...state,
                currentUser: action.payload || {},
            };
        },
        saveOpenid(state: UserModelState, action: { payload: any; }) {
            return {
                ...state,
                openid: action.payload || '',
            };
        },
        saveIndexTab(state: UserModelState, action: { payload: any; }) {
            return {
                ...state,
                indexTab: action.payload || '',
            };
        },
        saveWXData(state: UserModelState, action: { payload: any; }) {
            return {
                ...state,
                wxData: action.payload || '',
            };
        },
        savepayData(state: UserModelState, action: { payload: any; }) {
            return {
                ...state,
                payData: action.payload || '',
            };
        }
    },
};

export default UserModel;