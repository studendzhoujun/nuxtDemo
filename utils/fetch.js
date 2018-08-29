
import axios from 'axios'
// import qs from 'qs'


axios.defaults.withCredentials = true;
axios.interceptors.request.use(config => {
    return config
}, err => {
    return Promise.reject(err)
})

axios.interceptors.response.use(response => response, err => Promise.resolve(err.response))

let prefix = 'http://localhost:3000/'
export default {
    get(url, params) {
        if (!url) return
        return axios({
            method: 'get',
            url: prefix + url,
            params,
            timeout: 10000
        })
    },
    // post(url, data) {
    //     if (!url) return
    //     return axios({
    //         method: 'post',
    //         url: prefix + url,
    //         data: qs.stringify(data),
    //         timeout: 10000
    //     })
    // },
    // postFile(url, data) {
    //     if (!url) return
    //     return axios({
    //         method: 'post',
    //         url: prefix + url,
    //         headers: {
    //             // 'Content-Type': 'multipart/form-data'
    //             // 'Content-Type': 'application/x-www-from-urlencoded'
    //         },
    //         data: data,
    //         timeout: 10000
    //     }).then(checkStatus).then(checkCode)
    // }
}
