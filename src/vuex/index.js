import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state={
    items:[]
};
const store=new Vuex.Store({
    state,
    modules:{
    }
});
export default store;