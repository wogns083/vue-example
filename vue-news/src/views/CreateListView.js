import ListView from './ListView.vue'
import bus from '../utils/bus.js'

/* 하이오더 컴포넌트(HOC) : 컴포넌트의 로직(코드)를 재사용하기 위한 고급 기술 */ 
export default function createListView(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    name: name,
    // name: 'HOCComponent',
    created () {
      bus.$emit('start:spinner');
      // setTimeout(() => {
        this.$store.dispatch('FETCH_LIST', this.$route.name)
          .then(() => {
            window.console.log('fetched');
            bus.$emit('end:spinner');
          })
          .catch((error) => {
            window.console.log(error)
          })
      // }, 3000);
    },
    render(createElement) {
      return createElement(ListView);
    }
  }
}