import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    user:{
        username:'laoxie'
    }
  },
  mutations:{
    changeName(state,username){
        state.user.username = username
    }
  },
  actions:{
    changeName(context,id){
        axios.get('/user/'+id).then(({data})=>{
            context.commit('changeName',data.username)
        })
    }
  }
});
