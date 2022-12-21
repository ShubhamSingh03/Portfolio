import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const serviceKey = process.env.REACT_APP_GMAIL_SERVICE_KEY;
const templateId = process.env.REACT_APP_GMAIL_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_GMAIL_PUBLIC_KEY;

// contact me right form component
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    send(serviceKey, templateId, data, publicKey)
      .then((response) => {
        // console.log("SUCCESS!", response.status, response.text);
        formSuccess();
      })
      .catch((err) => {
        toast.error(err.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  const formSuccess = () => {
    toast.info("Thanks for submitting your Query!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    document.getElementById("queryForm").reset();
  };

  return (
    <>
      <ToastContainer />
      <div className="mt-8 lg:mt-4 lg:w-1/2 lg:mx-6">
        <div className="w-full px-8 py-8 mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-xl shadow-gray-300/50">
          <h1 className="text-lg font-medium">Please share details</h1>
          {/* form here */}
          <form
            className="mt-6"
            id="queryForm"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full lg:flex 1 lg:gap-x-3">
              {/* fullName input field */}
              <div className="flex-1" title="Full Name">
                <label className="block mb-2 text-sm">Full Name</label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter name here"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("from_name", {
                    required: "Name is required",
                  })}
                />
                {errors.from_name?.message && (
                  <p className="errors text-red-600 text-xs">
                    {errors.from_name?.message}
                  </p>
                )}
              </div>
              {/* email input field */}
              <div className="flex-1 mt-6 lg:mt-0" title="Email address">
                <label className="block mb-2 text-sm">Email address</label>
                <input
                  type="email"
                  name="reply_to"
                  placeholder="Email here"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("reply_to", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.reply_to?.message && (
                  <p className="errors text-red-600 text-xs">
                    {errors.reply_to?.message}
                  </p>
                )}
              </div>
            </div>
            {/* subject input field */}
            <div className="flex-1 mt-6" title="Subject">
              <label className="block mb-2 text-sm">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject here"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                {...register("subject", {
                  required: "Subject is required",
                  minLength: {
                    value: 10,
                    message: "Minimum 10 characters required",
                  },
                })}
              />
              {errors.subject?.message && (
                <p className="errors text-red-600 text-xs">
                  {errors.subject?.message}
                </p>
              )}
            </div>
            {/* Message input field */}
            <div className="w-full mt-6" title="Message here">
              <label className="block mb-2 text-sm">Message</label>
              <textarea
                name="message"
                className="block w-full h-32  px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-28 resize-none  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Message"
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 20,
                    message: "Minimum 20 characters required",
                  },
                  maxLength: {
                    value: 500,
                    message: "Maximum 500 characters allowed",
                  },
                })}
              ></textarea>
              {errors.message?.message && (
                <p className="errors text-red-600 text-xs">
                  {errors.message?.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              title="Get in touch"
              className="w-full px-6 py-3 mt-6 text-sm font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow rounded-md hover:bg-yellowDark focus:outline-none focus:ring focus:ring-yellow focus:ring-opacity-50"
            >
              get in touch
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
