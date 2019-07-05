<template>
  <div>
    <ul class="news-list">
      <li v-for="(item, index) in this.items" :key="index" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <!-- 타이틀 영역 -->
          <p class="news-title">
            <!-- template 속성과 v-if 디렉티브를 활용해 페이지별 분기 -->
            <template v-if="item.domain">
              <a :href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link :to="`/item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by 
            <!-- template 속성과 v-if 디렉티브를 활용해 페이지별 분기 -->
            <template v-if="item.user">
              <router-link :to="`/user/${item.user}`" class="link-text">
                {{ item.user }}
              </router-link>
            </template>
            <template v-else>
              <a :href="item.url">{{ item.domain }}</a>
            </template>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // props: ['subject'],
  /* props로 각 페이지정보를 넘기는것보다,
   * 현재 route 객체정보의 path나 name을 활용하는 것이 더 좋은 방법이다.
   */
  computed: {
    items () {
      return this.$store.state.list;
      // const name = this.$route.name;
      // if( name === 'news' ) return this.$store.state.news;
      // else if( name === 'ask' ) return this.$store.state.ask;
      // else if( name === 'jobs' ) return this.$store.state.jobs;
    }
  },
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;  /* grid, flex 등 디스플레이모드설정 */
  align-items: center;  /* flex모드에서 수직중앙정렬 */
  justify-content: center;  /* flex모드에서 수평중앙정렬 */
  color: #42B882;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>