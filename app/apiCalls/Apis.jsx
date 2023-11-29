import { commonrequest } from "./ApiCall";
// import dotenv from 'dotenv';
// dotenv.config();
const BASE_URL = "https://data.goodwaygiver.site";

export const getPostsFunc = async (search) => {
  return await commonrequest(
    "GET",
    `${BASE_URL}/post/getAllPost?search=${search}`,
    ""
  );
  // https://data.goodwaygiver.site/post/getAllPost?search=vnc install
};
export const getLatestPostFunc = async ()=>{
  return await commonrequest(
    "GET",
    `${BASE_URL}/post/getLatest`,
    ""
  );

}
export const getPopularPostFunc = async ()=>{
  return await commonrequest(
    "GET",
    `${BASE_URL}/post/getPopular`,
    ""
  );

}



export const incrementViews = async (url) => {
  return await commonrequest(
    "POST",
    `${BASE_URL}/post/increment-views/${url}`,
    ""
  );
};

// https://data.goodwaygiver.site/post/increment-views/download-yt-video-short-long
export const getOnePostData = async (url) => {
  return await commonrequest(
    "GET",
    `${BASE_URL}/post/getPostData/${url}`,
    ""
  );
};
export const sendEmail = async (body) => {
  return await commonrequest(
    "POST",
    `${BASE_URL}/post/sendemail/`,
    body
  );
};