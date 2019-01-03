/**
 * @author xxx
 * @since
 * @copyright Copyright (c) 2018, YZKJ
 * @description main
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from '../App.vue';
import app from 'public/store';
import routeJson from './route.json';

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  base: __dirname,
  routes: routeJson.page.map((page) => {
    return {
      name: page.name,
      path: page.path,
      component: require('./page/' + page.component)
    };
  })
});

corJS.ready(function() { // eslint-disable-line
  new Vue({ // eslint-disable-line
    el: '#app',
    render: h => h(App),
    router,
    store: new Vuex.Store({
      state: {
        count: 0
      },
      mutations: {
        increment(state) {
          state.count++;
        }
      },
      modules: {
        app
      }
    })
  });
});
