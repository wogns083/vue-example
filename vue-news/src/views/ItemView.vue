<template>
  <div>
    <section>
      <!-- 사용자 정보 -->
      <!-- 상위컴포넌트에서 slot 전달 -->
      <UserProfile :info="item">
        <router-link slot="username" :to="`/user/${item.user}`">
          <div>{{ item.user }} </div>
        </router-link>
        <template slot="time">{{ 'Posted ' + item.time_ago }}</template>
      </UserProfile>
    </section>
    <section>
      <h2>{{ item.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <!-- v-html 디렉티브 : HTML 태그를 화면에 적용해서 뿌릴때 사용 -->
      <div v-html="item.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters({
      item: 'fetchedItem'
    })
  },
  created () {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  },
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;  /* 배율 2.5배 */
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;  /* 배율 0.7배 */
}
</style>
