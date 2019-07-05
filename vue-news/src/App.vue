<template>
  <div id="app">
    <!-- router-view : url 값에 따라 다른 페이지 컴포넌트가 뿌려짐 -->
    <Toolbar></Toolbar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <Spinner :loading="loadingStatus"></Spinner> <!-- 로딩 상태 -->
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
import Spinner from './components/Spinner.vue'
import bus from './utils/bus.js'

export default {
  components: {
    Toolbar,
    Spinner,
  }, 
  data () {
    return {
      loadingStatus: false,
    }
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
  created () {
    // 이벤트버스 요청처리 등록
    bus.$on('start:spinner', this.startSpinner);  
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    // 이벤트버스 요청처리 해제(반드시 해주어야함)
    bus.$off('start:spinner', this.startSpinner); 
    bus.$off('end:spinner', this.endSpinner);
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {  /* 하이퍼링크 태그의 기본스타일: 기본 밑줄 제거 */
  color: #34495e;
  text-decoration: none; 
}
a.router-link-exact-active {  /* 하이퍼링크 태그가 활성화되었을때 */
  text-decoration: underline;
}
a:hover {  /* 하이퍼링크 태그에 상태변화가 일어났을때 */
  color: #42B882;
  text-decoration: underline;
}

/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
