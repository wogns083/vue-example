import axios from 'axios'

// API 호출동작은 views 대신 api 디렉토리로 따로 빼서 처리한다.
// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2. API 함수들을 정리
/* Usage: fetchNewsList().then().catch()
 * axios 요청결과인 new Promise() 객체를 리턴하므로 then, catch문 사용가능 */
function fetchNewsList() {
  // return axios.get(config.baseUrl + 'news/1.json');
  return axios.get(`${config.baseUrl}news/1.json`);  // ES6 템플릿 리터럴(백틱) 활용
}

function fetchAskList() {
  return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}
// 공통화 메서드
function fetchList(pageName) {
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}

async function fetchCommentItem(userid) {
  // API 단에서 예외처리
  try {
    const response =  await axios.get(`${config.baseUrl}item/${userid}.json`); 
    return response; 
  } catch (error) {
    console.log(error);
  }
}


export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchList,
  fetchUserInfo,
  fetchCommentItem,
}