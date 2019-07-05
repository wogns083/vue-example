<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import ListMixin from '../mixins/ListMixin.js'
import bus from '../utils/bus.js'

export default {
  components: {
    ListItem,
  },
  // mounted() {
  //   bus.$emit('end:spinner');
  // },
  mixins: [ListMixin],

  // created () {
  //   // 이벤트버스 요청전달
  //   bus.$emit('start:spinner');
  //   setTimeout(() => {
  //     this.$store.dispatch('FETCH_NEWS')
  //       .then(() => {
  //         console.log('fetched');
  //         bus.$emit('end:spinner');
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       })
  //   }, 3000);
  // },
}
</script>

<style scoped>

</style>
