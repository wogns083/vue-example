<template>
  <div class="header">
    <!-- router-link : 다른 페이지로 이동하는 링크(네비게이션) -->
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
  color: white;
  background-color: #42b883;
  display: flex;
  padding: 8px;
}
/* 활성화된 링크 색상 */
.header .router-link-exact-active { 
  color: #35495e;
}
/* 나머지 링크 색상 */
.header a {
  color: white;
}
</style>
