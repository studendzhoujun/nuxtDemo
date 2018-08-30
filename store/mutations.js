const mutations = {
    increment(state) {
      state.name+='jj'
    },
    changeName(state,value){
      console.log('changename')
      state.name=value
    }
  }
  
  export default mutations