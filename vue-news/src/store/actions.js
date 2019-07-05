import { 
  fetchNewsList, 
  fetchAskList, 
  fetchJobsList,
  fetchList, 
  fetchUserInfo, 
  fetchCommentItem 
} from '../api/index.js'

export default {
  /* 공통화 전에 사용하던 코드 */
  FETCH_NEWS(context) {
    return fetchNewsList()
      .then(response => {
        context.commit('SET_NEWS', response.data);
        return response; // 리턴값은 Promise 객체이므로 then() ~ catch() 문으로 처리가능
        // state.news = response.data  // 동기적인 루틴
      })
      .catch(error => {
        window.console.log(error);
      })
  },
  FETCH_ASK({ commit }) {
    return fetchAskList()
      .then(({ data }) => {
        commit('SET_ASK', data);
      })
      .catch(error => {
        window.console.log(error);
      })
  },
  FETCH_JOBS({ commit }) { // ES6 Destructuring
    return fetchJobsList()
      .then(({ data }) => { // ES6 Destructuring
        commit('SET_JOBS', data);
      })
      .catch(error => {
        window.console.log(error);
      })
  },
  //////////////////////////////////////////

  /* 공통화 메서드 */
  /* 비동기처리1 - promise */
  // FETCH_LIST({ commit }, pageName) {
  //   return fetchList(pageName)
  //     .then(({ data }) => {
  //       commit('SET_LIST', data)
  //     })
  //     .catch(error => {
  //       window.console.log(error)
  //     })
  // },
  // FETCH_USER({ commit }, name) {
  //   return fetchUserInfo(name)
  //     .then(({ data }) => commit('SET_USER', data))
  //     .catch(error => window.console.log(error))
  // },
  // FETCH_ITEM({ commit }, id) {
  //   return fetchCommentItem(id)
  //     .then(({ data }) => commit('SET_ITEM', data))
  //     .catch(error => window.console.log(error))
  // },

  /* 비동기처리2 - async */
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName);
    commit('SET_LIST', response.data);
    return response; // async 함수의 리턴값은 무조건 Promise 객체가 된다.
  },
  async FETCH_USER({ commit }, name) {
    // store - actions 단에서 예외처리
    try {
      const response = await fetchUserInfo(name);
      commit('SET_USER', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_ITEM({ commit }, id) {
    const response = await fetchCommentItem(id);
    commit('SET_ITEM', response.data);
    return response;
  }
}