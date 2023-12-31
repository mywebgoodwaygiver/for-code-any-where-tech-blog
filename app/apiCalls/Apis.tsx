import { commonrequest } from './ApiCall';

const BASE_URL = 'https://data.goodwaygiver.site';

export const getPostsFunc = async (search: string) => {
  return await commonrequest({
    method: 'GET',
    url: `${BASE_URL}/post/getAllPost?search=${search}`,
  });
  // https://data.goodwaygiver.site/post/getAllPost?search=vnc install
};

export const getLatestPostFunc = async () => {
  return await commonrequest({
    method: 'GET',
    url: `${BASE_URL}/post/getLatest`,
  });
};

export const getPopularPostFunc = async () => {
  return await commonrequest({
    method: 'GET',
    url: `${BASE_URL}/post/getPopular`,
  });
};

export const incrementViews = async (url: string) => {
  return await commonrequest({
    method: 'POST',
    url: `${BASE_URL}/post/increment-views/${url}`,
  });
};

// https://data.goodwaygiver.site/post/increment-views/download-yt-video-short-long
export const getOnePostData = async (url: string) => {
  return await commonrequest({
    method: 'GET',
    url: `${BASE_URL}/post/getPostData/${url}`,
  });
};

export const sendEmail = async (body: any) => {
  return await commonrequest({
    method: 'POST',
    url: `${BASE_URL}/post/sendemail/`,
    body,
  });
};

export const getPostsMeta =  async ()=>{
  return await commonrequest({
    method: 'GET',
    url: `http://localhost:6010/post/getPostsMeta`,
  });
}


