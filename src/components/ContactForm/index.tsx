import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import { animated, config, useSpring } from "@react-spring/web";
import { LoadingSpinner } from "./LoadingSpinner";

// @TODO Type form

const ErrorLabel = ({ message }: { message: string }) => (
  <p className="text-red-500 text-xs font-bold">{message}</p>
);

function encode(data: any) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const successContainerAnimationStyle = useSpring({
    opacity: success ? 1 : 0,
    y: success ? -51 : -10,
    delay: 200,
    config: config.molasses,
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data: Record<string, unknown>) => {
    try {
      setLoading(true);
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...data }),
      });

      // Dealy a bit the laoding success state to make it feel more real
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
      }, 1200);
    } catch (err) {
      setTimeout(() => {
        setLoading(false);
        setError(err as Error);
      }, 1200);
    }
  };

  if (success) {
    return (
      <animated.div
        style={successContainerAnimationStyle}
        className="w-full lg:w-8/12 pl-6 flex text-2xl flex-col lg:justify-center lg:items-center mt-12"
      >
        <p>
          Your request has been submitted. <br />
          Thanks for getting in touch. I will get back to you as soon as
          possible,
          <br />
          <br />
          Nora
        </p>
      </animated.div>
    );
  }

  return (
    <form
      name="contact"
      className="w-full pl-6 lg:w-8/12 flex flex-col justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input type="hidden" name="form-name" value="contact" />
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
          render={({ message }) => <p className="error-label">{message}</p>}
        />
      </div>

      <div className="form-input mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          {...register("email", {
            required: "Please add your email",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please eneter a valid email address",
            },
          })}
          type="email"
          placeholder="jane@doe.com"
        />

        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => <p className="error-label">{message}</p>}
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
          render={({ message }) => <p className="error-label">{message}</p>}
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
          render={({ message }) => <p className="error-label">{message}</p>}
        />
      </div>

      <button
        className="mt-2 text-center text-lg flex justify-center font-bold px-4 py-4 text-2xl leading-none border-2 rounded text-black border-black hover:border-transparent hover:text-white hover:bg-black w-full disabled:bg-[#F5F5F5] disabled:hover:bg-[#F5F5F5] disabled:text-gray-400 disabled:border-gray-200 disabled:shadow-none  disabled:cursor-not-allowed"
        type="submit"
        disabled={loading}
      >
        {loading ? <LoadingSpinner /> : "Submit"}
      </button>
    </form>
  );
};
