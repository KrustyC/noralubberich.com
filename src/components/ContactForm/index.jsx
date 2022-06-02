import { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const ErrorLabel = ({ message }) => (
  <p className="text-red-500 text-xs font-bold">{message}</p>
);

export const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [data, setData] = useState("");

  const onSubmit = (data) => {
    setData(JSON.stringify(data));
  };

  return (
    <form
      className="w-full lg:w-8/12 flex flex-col justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form-input mb-3">
        <label htmlFor="fullName" className="form-label">
          Full Name
        </label>
        <input
          {...register("fullName", { required: "Please add your full name" })}
          type="text"
          placeholder="Jane Doe"
        />
        <ErrorMessage
          errors={errors}
          name="fullName"
          render={({ message }) => <ErrorLabel message={message} />}
        />
      </div>

      <div className="form-input mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          {...register("email", { required: "Please add your email" })}
          type="email"
          placeholder="jane@doe.com"
        />

        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => <ErrorLabel message={message} />}
        />
      </div>

      <div className="form-input mb-3">
        <label htmlFor="subject" className="form-label">
          Subject
        </label>
        <input
          {...register("subject", { required: "Please add a subject" })}
          type="text"
          placeholder="What would you like to talk about?"
        />
        <ErrorMessage
          errors={errors}
          name="subject"
          render={({ message }) => <ErrorLabel message={message} />}
        />
      </div>

      <div className="form-input mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          {...register("message", { required: "Please add a message" })}
          placeholder=""
        />
        <ErrorMessage
          errors={errors}
          name="message"
          render={({ message }) => <ErrorLabel message={message} />}
        />
      </div>

      <button
        className="mt-2 text-center text-lg font-bold px-4 py-4 text-2xl leading-none border-2 rounded text-black border-black hover:border-transparent hover:text-white hover:bg-black w-full"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
