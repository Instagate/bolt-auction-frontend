/*
  API request를 함수화한 library
*/
import axios from 'axios';
// const FormData = require('form-data');

// .env.development에 저장된 BASE URL(REACT_APP_URL)
// CORS 문제를 해결하기 위해서 package.json의 proxy 사용
// const apiUrl = process.env.REACT_APP_URL;

// const token = `Bearer ${localStorage.token}`;
// axios.defaults.headers.common['Authorization'] = token;

// SECTION : 회원 인증 API
/**
 * uid와 passwd로 로그인 요청
 * @param {object} body
 * @param {string} body.uid - 유저 이메일(유저 아이디)
 * @param {string} body.passwd - 비밀번호
 */
export const signin = ({ uid, passwd }) =>
  axios.post('/api/auth/login', { uid, passwd });

// 회원가입
export const signup = ({ uid, passwd, name }) =>
  axios.post('/api/member', { uid, passwd, name });

// 회원정보 조회
export const check = () =>
  axios.get('/api/member', {
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  });

// SECTION : item API
// 상품정보 조회
export const productDetail = id => axios.get(`/api/item/${id}`);

export const uploadProduct = () => axios.post(`/api/item/`);

// SECTION : 카테고리 API
// 카테고리 받아오기
export const getCategories = () => axios.get(`/api/category`);

// 카테고리로 아이템 조회
export const getCategoryItems = ({ id, filter }) =>
  axios.get(`/api/item/category/${id}?sort=${filter}`);

// 아이템 검색
export const serachItem = ({ keyword, filter }) =>
  axios.get(`/api/item?filter=name&keyword=${keyword}&sort=${filter}`);

// SECTION : 상점 API
// 상점 id로 상점 정보 불러오기
export const getStoreInfo = id => axios.get(`/api/store/${id}`);

// 상점 id로 상점에 등록된 상품 불러오기
export const getStoreProducts = id => axios.get(`/api/item/store/${id}`);

// 상점 id로 상점에 등록된 리뷰 불러오기
export const getStoreReviews = id => axios.get(`/api/review/store/${id}`);

// 상점 리뷰 등록하기 (accessToken 필요, request body로 content 필요)
export const postStoreReview = ({ id, content }) =>
  axios.post(`/api/review/store/${id}`, content, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.token}`,
    },
  });

// 상점 리뷰 삭제하기 ?? 리뷰를 다 삭제한다는 거임?
export const deleteStoreReview = id => axios.delete(`/api/review/store/${id}`);

// FIXME : parameter가 아니고 request body로 수정해야함 name도 수정할수있어야함
// 상점 정보 수정
export const putStoreInfo = ({ name, desc, file }) => {
  const formData = new FormData();
  formData.append('description', desc);
  formData.append('image', file);
  formData.append('memberName', name);
  return axios.put(`/api/store`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.token}`,
    },
  });
};

// SECTION 채팅 API
// 채팅방 생성
export const postChatroom = ({ chatRoomName, itemId, recvMemberId }) => {
  console.log({ chatRoomName, itemId, recvMemberId });
  return axios.post(
    `/api/chat/room`,
    { chatRoomName, itemId, recvMemberId },
    {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    },
  );
};

// 채팅방 목록 가져오기
export const getChatrooms = () =>
  axios.get(`/api/chat/room`, {
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  });

// 채팅 기록 가져오기
export const getChatRecords = ({ chatRoomId, page, size }) =>
  axios.get(
    `/api/chat/message?chatRoomId=${chatRoomId}&page=${page}&size=${size}&sort=createDt,desc`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    },
  );

// // 채팅 보내기
// export const postChat = (socket, msg) =>
//   socket.sendMessage('/app/chat.sendMessage', JSON.stringify(msg), {
//     Authorization: `Bearer ${localStorage.token}`,
//   });
