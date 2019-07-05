<template>
  <div>
    <!-- 상위컴포넌트에서 slot 전달 -->
    <UserProfile :info="userInfo">
      <div slot="username">{{ userInfo.id }}</div>
      <span slot="time">{{ 'Joined ' + userInfo.created }}, </span>
      <span slot="karma">{{ userInfo.karma }}</span>
    </UserProfile>
  </div>  
</template>

<script>
import UserProfile from '../components/UserProfile'

export default {
  components: {
    UserProfile,
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    } 
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName) // 인자(payload)는 한개만전달가능
  },
}
</script>

<style>

</style>
