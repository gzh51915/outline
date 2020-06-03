import Vue from 'vue';

import App from './App.vue';
import router from './router'
// import store from './store'

// import axios from 'axios';

// Vue.prototype.axios = axios;

new Vue({
    el:'#app',
    router,
    // store,
    render(create){
        return create(App)
    }
})