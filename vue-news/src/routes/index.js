import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
// import createListView from '../views/CreateListView'

import bus from '../utils/bus.js'
import { store } from '../store/index.js'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history', // 히스토리모드: url 주소의 해시(#)값 제거
  routes: [ // routes 항목도 모듈화가 가능하다
    // {
    //   path: 'url 주소',
    //   component: 'url 주소로 접근시 표시될 컴포넌트(views)',
    //   redirect: '특정페이지로 리다이렉트',
    // },
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView, // Mixin 사용시 컴포넌트
      // component: createListView('NewsView'), // HOC 사용시 컴포넌트
      beforeEnter: (to, from, next) => { // 라우터 가드
        bus.$emit('start:spinner');
        // setTimeout(() => { // 의도적인 시간지연 (디버깅용)
          /* 주의!! 여기서 this는 Vue 인스턴스가 아니다. */
          // this.$store.dispatch('FETCH_LIST', this.$route.name)
          store.dispatch('FETCH_LIST', to.name)
            .then(() => {
              window.console.log('fetched');
              // bus.$emit('end:spinner');
              next();
            })
            .catch((error) => {
              window.console.log(error)
            })
        // }, 3000);
      }
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      // component: createListView('AskView'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        // setTimeout(() => { // 의도적인 시간지연 (디버깅용)
          store.dispatch('FETCH_LIST', to.name)
            .then(() => {
              window.console.log('fetched');
              // bus.$emit('end:spinner');
              next();
            })
            .catch((error) => {
              window.console.log(error)
            })
        // }, 3000);
      }
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      // component: createListView('JobsView'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        // setTimeout(() => { // 의도적인 시간지연 (디버깅용)
          store.dispatch('FETCH_LIST', to.name)
            .then(() => next())
            .catch((error) => {
              window.console.log(error)
            })
        // }, 3000);
      }
    },
    {
      path: '/user/:id',  // 동적라우트 매칭
      component: UserView,
    },
    {
      path: '/item/:id',  // 동적라우트 매칭
      component: ItemView,
    },
  ]
})
