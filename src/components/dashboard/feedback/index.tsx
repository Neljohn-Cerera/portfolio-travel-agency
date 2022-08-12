import React from "react";
import FeedbackImage from "./image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import classnames from "classnames";

type FeedbackT = {
  email: string;
  fullname: string;
  message: string;
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  fullname: yup.string().required(),
  message: yup.string().required(),
});

const Feedback = () => {
  const [feedbackSend, setFeedbackSend] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FeedbackT>({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data: FeedbackT) => {
    console.log({ data });
    setFeedbackSend(true);
    setTimeout(() => {
      setFeedbackSend(false);
    }, 30000); // 30sec
    reset();
  };
  const handleClose = () => {
    setFeedbackSend(false);
  };
  return (
    <div className="p-16 bg-white flex flex-col">
      <h2 className="text-blue-900 font-extrabold text-3xl tracking-widest uppercase mx-auto mb-6">
        Feedback
      </h2>
      <hr className="mb-16 w-1/4 mx-auto" />
      <div className="grid grid-cols-2">
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="flex flex-col bg-gray-50 shadow-lg rounded p-16"
        >
          {feedbackSend && (
            <div className="relative p-2 bg-green-100">
              <span className="text-green-900 text-base">
                Thank you for your FEEDBACK!
              </span>
              <span
                onClick={handleClose}
                className="absolute text-green-900 cursor-pointer right-4 top-3 text-sm font-bold"
              >
                X
              </span>
            </div>
          )}

          <label className="my-2 font-normal" htmlFor="fullname">
            Fullname
          </label>
          <input
            className={classnames("rounded", {
              "border-red-500": errors?.fullname,
            })}
            id="fullname"
            type="text"
            {...register("fullname")}
            placeholder="type here..."
          />
          {errors?.fullname && (
            <span className="text-sm text-red-500 mt-1">
              {errors.fullname.message}
            </span>
          )}
          <label className="my-2 font-normal" htmlFor="email">
            Email
          </label>
          <input
            className={classnames("rounded", {
              "border-red-500": errors?.fullname,
            })}
            id="email"
            type="email"
            {...register("email")}
            placeholder="type email..."
          />
          {errors?.email && (
            <span className="text-sm text-red-500 mt-1">
              {errors.email.message}
            </span>
          )}
          <label className="my-2 font-normal" htmlFor="message">
            Message
          </label>

          <textarea
            className={classnames("rounded", {
              "border-red-500": errors?.fullname,
            })}
            id="message"
            {...register("message")}
            placeholder="type message..."
            rows={3}
          ></textarea>
          {errors?.message && (
            <span className="text-sm text-red-500 mt-1">
              {errors.message.message}
            </span>
          )}

          <button
            type="submit"
            className="inline-block py-2 w-32 bg-blue-600 text-white font-semibold text-lg 
        leading-tight uppercase rounded shadow-md mt-5
        hover:bg-blue-700 hover:shadow-lg 
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
        active:bg-blue-800 active:shadow-lg 
        transition duration-150 ease-in-out"
          >
            Send
          </button>
        </form>

        <FeedbackImage />
      </div>
    </div>
  );
};

export default Feedback;
