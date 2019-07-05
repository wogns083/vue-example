export default {
  SET_NEWS(state, news) {
    state.news = news;
  },
  SET_ASK (state, ask) {
    state.ask = ask;
  },
  SET_JOBS (state, jobs) {
    state.jobs = jobs;
  },
  // 공통화 메서드
  SET_LIST (state, list) {
    state.list = list;
  },
  SET_USER (state, user) {
    state.user = user;
  },
  SET_ITEM (state, item) {
    state.item = item;
  },
}