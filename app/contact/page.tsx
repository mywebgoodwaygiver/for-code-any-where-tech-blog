"use client"

import React, { useState } from "react";
import StopPoint from "../ContantComponents/StopPoint";
import { sendEmail } from "../apiCalls/Apis";

const ContactPage = () => {
  const [mailOptions, setMailOptions] = useState({
    subject: "",
    from: "",
    text: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMailOptions({ ...mailOptions, [e.target.name]: e.target.value });
    setAlertMessage("");
  };
  

  const showAlert = (message:string) => {
    setAlertMessage(message);

    // Clear the alert after 3 seconds
 
  };

     setTimeout(() => {
      setSent(false);
    }, 15000);

  const sendEmailFunc = async (e?:React.ChangeEvent<HTMLInputElement>) => {
    e?.preventDefault();

    // Check if required fields are empty before sending the email
    if (!mailOptions.subject || !mailOptions.from || !mailOptions.text) {
      showAlert("Please fill in all required fields.");
      return;
    }

    setSending(true);

    const response = await sendEmail(mailOptions);
    let data: any;

    if (typeof response === "string") {
      // Handle the case where there is an error (response is a string)
      console.error("Error:", response);
    } else {
      // Handle the case where the request was successful (response is an AxiosResponse)
      data = response.data;
    }

    // Now you can use 'data' without TypeScript errors
    console.log(data);
         


    if (data.status === 200) {
      setSent(true);
    }

    setSending(false);
    setMailOptions({
      subject: "",
      from: "",
      text: "",
    });
  };

  return (
    <>
      <div className="dark:bg-gray-900">
      <div className="mx-4 lg:mx-16 bg-gray-50 dark:bg-gray-900">
          <div className="  dark:text-white w-full lg:text-2xl shadow-lg  rounded-md py-8 bg-white dark:bg-gray-800 mx-auto  font-medium text-center">
            <span className=" w-full  text-justify">
              Hey, if you are seeing any bugs, spelling mistakes, or errors in
              the content, please inform me using the contact information below.
              I will definitely respond and fix any issues. Also you want to
              inform me something you can contact to me. You will get responece
              within 12 hours.
            </span>
            <hr className="border-t-2  border-sky-600 mt-4" />
            <span className="block pt-2 ml-4 text-start text-blue-500 text-xl">
              Contact With Email
            </span>
            <div className="email pt-5 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
              <p className="ml-2">Email</p>
            </div>
            <p className="myemail font-medium pt-1 pb-2 ">
              contact@goodwaygiver.site
            </p>
            <hr className="border-t-1 border-sky-600" />
          </div>

          <div className="bg-gradient-to-tr from-fuchsia-300 to-sky-500 mx-4 rounded mt-2 mb-4 lg:px-8 lg:mb-8">
            <section
              id="send-message"
              className="px-4 flex flex-col justify-center min-h-screen max-w-md mx-auto"
            >
              <span className="block pt-2 text-start text-white font-bold  text-xl">
                Contact Now - Fill this form{" "}
              </span>

              <div className="p-6 bg-sky-100 rounded">
                <div className="flex items-center justify-center font-black m-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 mr-3 text-red-600 animate-pulse"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h1 className="tracking-wide text-2xl text-gray-900">
                    convey your message
                  </h1>
                </div>
                <form>
                  {/* <!-- id="login_form"
            action="api_login"
            method="POST"
            className="flex flex-col justify-center" --> */}

                  <div className="flex justify-between items-center mb-3"></div>
                  <label className="text-sm font-medium">Full Name</label>
                  <input
                    className="mb-3 px-2  mt-1 block w-full  border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                    type="text"
                    name="fullname"
                    placeholder="e.g. Shivam Kumar"
                    
                  />
                  <label className="text-sm font-medium">
                    Title / Subject (Required)
                  </label>
                  <input
                    className="mb-3  mt-1 block w-full px-2 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                    type="text"
                    name="subject"
                    placeholder="spelling mistakes ..."
                    required
                    value={mailOptions.subject}
                    onChange={handleChange}
                  />
                  <label className="text-sm font-medium">Email (Required)</label>
                  <input
                    className=" mb-3 mt-1 block w-full px-2 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                    type="email"
                    name="from"
                    placeholder="Email"
                    required
                    value={mailOptions.from}
                    onChange={(e)=> handleChange(e)}
                  />
                  <label className="text-sm font-medium">Messages (Required)</label>
                  <textarea
                    className="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                    name="text"
                    rows={7}
                    placeholder="Write something"
                    value={mailOptions.text}
                    required
                    onChange={(e)=>handleChange(e)}
                  ></textarea>
                    {/* Custom Alert Component */}
       {alertMessage && (
          <div className="custom-alert">
            <p className="block mx-auto mb-1 text-semibold text-[red]">{alertMessage}</p>
          </div>
        )}
                  {!sent && !sending && (
                    <button
                      className="px-4 py-1.5 rounded-md shadow-lg bg-gradient-to-r from-pink-600 to-red-600 font-medium text-gray-100 block transition duration-300"
                      onClick={() => sendEmailFunc()}

                      
                    >
                      {/* <span id="login_process_state" className={ ` ${sending || sent?"": "hidden"}`}>
                      Sending :)
                    </span>
                    <span id="login_default_state">
                      <span className={ `subtotal ${sending || sent?"hidden": ""}`} onClick={(e)=>sendEmailFunc(e)}>Send Now</span>
                    </span>
                    <span id="sent">
                      <span id={ `subtotal ${sent ?"": "hidden"}`} >Sent</span>
                    </span> */}
                      Send Now
                    </button>
                  )}
                  {sending && (
                    <button className="px-4 py-1.5 rounded-md shadow-lg bg-gradient-to-r from-pink-600 to-red-600 font-medium text-gray-100 block transition duration-300">
                      Sending...
                    </button>
                  )}
                  {sent && (
                    <button className="px-4 py-1.5 rounded-md shadow-lg bg-gradient-to-r from-lime-600 to-green-600 font-medium text-gray-100 block transition duration-300">
                      Sent Successfully
                    </button>
                  )}
                </form>
              </div>
            </section>
          </div>
        </div>

        <StopPoint></StopPoint>
      </div>
     
    </>
  );
};

export default ContactPage;
