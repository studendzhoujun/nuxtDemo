import Vuex from 'vuex'

import mutations from './mutations'
import axios from '../utils/fetch.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      name:'zhou'
    },
    mutations,
    actions:{
      async goAbout({commit}){
        return axios.get('about/s')
        .then((res) => {
          console.log(res)
           commit('changeName',res.data.message)
        })
      }
    }
  })
}

export default createStore