// import { postsMetaContext } from "@/app/components/context/ContextProvider";
// import { getPostsMeta } from "@/lib/posts";
// import React, { useContext, useEffect } from "react";

// // you have to put this in navbar.jsx file

// export default function getDataFromDataBase() {
//   const { postsMeta, setPostsMeta } = useContext(postsMetaContext);
//   const runThisFuncForPostsMeta = async () => {
//     const response = await getPostsMeta();
//     let data: any = []; // Initialize data with an empty array

//     if (typeof response === "string") {
//       // Handle the case where there is an error (response is a string)
//       console.error("Error:", response);
//     } else {
//       // Handle the case where the request was successful (response is an AxiosResponse)
//       data = response;
//     }

//     // Now you can use 'data' without TypeScript errors
//     console.log("PostsMetaData =>>>>>>⚠⚠⚠⚠⚠⚠⚠⚠", data);
//     setPostsMeta(data);
//   };

//   useEffect(() => {
//     runThisFuncForPostsMeta();
//   }, []);

//   return <></>;
// }
