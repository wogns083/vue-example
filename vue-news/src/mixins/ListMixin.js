import bus from '../utils/bus.js'

/* 믹스인(Mixins) : 여러 컴포넌트 간에 공통으로 사용하고 있는 로직, 기능들을 재사용하는 방법 */
export default {
  // 재사용할 컴포넌트 옵션 & 로직
  mounted() {
    bus.$emit('end:spinner');
  },

  // created() {
  //   bus.$emit('start:spinner');
  //   // setTimeout(() => { // 의도적인 시간지연 (디버깅용)
  //     this.$store.dispatch('FETCH_LIST', this.$route.name)
  //       .then(() => {
  //         window.console.log('fetched');
  //         bus.$emit('end:spinner');
  //       })
  //       .catch((error) => {
  //         window.console.log(error)
  //       })
  //   // }, 3000);
  // }
}