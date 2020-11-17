import axios from 'axios';
import {message} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from "@/router";
// axios.defaults.baseURL = baseUrl;
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: process.env.VUE_APP_TITLE_API,
    // 超时
    timeout: 10000,
});
service.interceptors.request.use(config => {
    return config
}, error => {
    return error
})

service.interceptors.response.use(config => {
    if(config.data.code!==0){
        if(sessionStorage.getItem('err')==0){
            message.error({content:config.data.msg,maxCount:1});
            sessionStorage.setItem('err',1);
        }
    }else {
        sessionStorage.setItem('err',0)
        return config.data
    }
},error => {
    if(error.response&&error.response.status === 401){
        router.push('/login');
        if(sessionStorage.getItem('err')==0){
            message.error({content:error.response.data.msg,maxCount:1})
            sessionStorage.setItem('err',1);
        }
    }
    return error
})

const request = (method, url, params) => {
    // return new Promise((resolve, reject) => {
        let options = {};
        if(method==='post'){
            options = {
                method: method,
                url: url,
                data: params
            }
        }else if(method === 'get'){
            options = {
                method: method,
                url: url,
                params: params

            }
        }
        return service(options)/*.then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })*/
    // })
}


export default request