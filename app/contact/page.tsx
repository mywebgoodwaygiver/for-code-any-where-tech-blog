"use client";

import React, { useState } from "react";
import StopPoint from "../ContantComponents/StopPoint";
import { sendEmail } from "../apiCalls/Apis";
import Link from "next/link";
const ContactPage = () => {
  const [mailOptions, setMailOptions] = useState({
    subject: "",
    from: "",
    text: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [errWSent, setErrWSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMailOptions({ ...mailOptions, [e.target.name]: e.target.value });
    setAlertMessage("");
  };

  const showAlert = (message: string) => {
    setAlertMessage(message);

    // Clear the alert after 3 seconds
  };

  const handleSendAgain =()=> {
    setSending(false);
  }
  

  const sendEmailFunc = async (e?: React.ChangeEvent<HTMLInputElement>) => {
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
      return setErrWSent(true)


    } else {
      // Handle the case where the request was successful (response is an AxiosResponse)
      data = response.data;
    }

    // Now you can use 'data' without TypeScript errors
    console.log("response=>>>", response);
    console.log(data);

    if (response.status === 200 ) {
      setSent(true);
    }
    else{
setErrWSent(true)
    }

    
    setMailOptions({
      subject: "",
      from: "",
      text: "",
    });
  };

  return (
    <>
    <div className="mx-4 lg:mx-16">
      <div className="  dark:text-white w-full lg:text-2xl shadow-lg rounded-md py-8 font-medium bg-gray-50 dark:bg-slate-800">
        <span className=" w-full  text-justify text-gray-400">
          Hey, if you are seeing any bugs, spelling mistakes, or errors in the
          content, please inform me using the contact information below. I will
          definitely respond and fix any issues. Also you want to inform me
          something you can contact to me. You will get responece within 12
          hours. Email {"=>"}{" "}
          <b className="text-gray-100 text-underline">contact@goodwaygiver.site</b>{" "}
          <Link className="text-blue-500" target="_blank" href={"mailto:contact%40goodwaygiver.site"}>Contect Now</Link>
        </span>
        <StopPoint style="dark:bg-slate-800"  ></StopPoint>
        <div
          id="send-message"
          className="px-4 flex flex-col justify-center min-h-screen max-w-md mx-auto"
        >
          <span className="block pt-2 text-start text-white font-bold  text-xl">
            Contact Now - Fill this form{" "}
          </span>

          <div className="relative py-3 sm:mx-auto sm:min-w-[35rem] my-4">
            <div className="to-light-blue-500 absolute inset-0 -skew-y-6 transform rounded-3xl bg-gradient-to-r from-cyan-400 shadow-lg sm:-rotate-6 sm:skew-y-0"></div>
            <div className="relative rounded-3xl bg-white p-20 px-4 py-10 shadow-lg">
              <form>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-600"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="title"
                    className="mb-2 block text-sm font-medium text-gray-600"
                  >
                    Title / Subject <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="subject"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800"
                    required
                    value={mailOptions.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-600"
                  >
                    Email<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="from"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800"
                    required
                    value={mailOptions.from}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-600"
                  >
                    Messages<span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="text"
                    rows={6}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 "
                    required
                    value={mailOptions.text}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="mt-6">
                  {alertMessage && (
                    <div className="custom-alert">
                      <p className="block mx-auto mb-1 text-semibold text-[red]">
                        {alertMessage}
                      </p>
                    </div>
                  )}
                  {!sent && !sending && (
                    <button
                      className="to-light-blue-500 hover:to-light-blue-600 w-full rounded-md bg-gradient-to-r from-cyan-400 px-4 py-2 text-base font-medium text-white hover:bg-gradient-to-r hover:from-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 focus:ring-offset-2"
                      onClick={() => sendEmailFunc()}
                    >
                      Send Message
                    </button>
                  )}
                  {sending && (
                    <button 
                    className="to-light-blue-500 hover:to-light-blue-600 w-full rounded-md bg-gradient-to-r from-cyan-400 px-4 py-2 text-base font-medium text-white hover:bg-gradient-to-r hover:from-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 focus:ring-offset-2"
                    >
                    Sending...
                    </button>
                  )}
                  {sent && (
                    <div className="flex gap-2">
                    <button 
                    className="to-light-blue-500 hover:to-light-blue-600 w-full rounded-md bg-gradient-to-r from-lime-400 px-4 py-2 text-base font-medium text-white hover:bg-gradient-to-r hover:from-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 focus:ring-offset-2"
                    >
                    Sent Successfully
                    </button>
                      <button 
                      className="to-light-blue-500 hover:to-light-blue-600 w-full rounded-md bg-gradient-to-r from-cyan-400px-4 py-2 text-base font-medium text-white hover:bg-gradient-to-r hover:from-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 focus:ring-offset-2"
                      onClick={handleSendAgain}
                      >
                     Send Again
                      </button>
                      </div>
                  )}
                  {errWSent && (
                    <div className="flex gap-2"> <button 
                    className="to-light-blue-500 hover:to-light-blue-600 w-full rounded-md bg-gradient-to-r from-red-600 px-4 py-2 text-base font-medium text-white hover:bg-gradient-to-r hover:from-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-red-600 focus:ring-offset-2"
                    >
                    Error while sending
                    </button>
                    <button 
                    className="to-light-blue-500 hover:to-light-blue-600 w-full rounded-md bg-gradient-to-r from-cyan-400px-4 py-2 text-base font-medium text-white hover:bg-gradient-to-r hover:from-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 focus:ring-offset-2"
                    onClick={handleSendAgain}
                    >
                   Send Again
                    </button>
                    </div>
                   
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

{/* create a div and write "The End" */}


      <StopPoint style="dark:bg-slate-800" ></StopPoint>
      </div>
    </>
  );
};

export default ContactPage;
