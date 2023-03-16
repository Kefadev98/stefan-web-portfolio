import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";
//Internal imports
import Information from "./Information";
import { ContactTypes } from "../../types/ContactTypes";

const Contact = () => {
  /*In this component I used React-hook-form combined with emailjs library
  for send emails using only client-side technologies*/

  const {
    register,
    handleSubmit,
    resetField,
    watch,
    formState: { errors },
  } = useForm<ContactTypes>({
    defaultValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
  });
  console.log(watch());

  /*Data is sent to Emailjs through the sendForm method,
   where I specified  Service ID, Template ID, and Public Key,
   Once you click send, the data is sent to my email*/

  const form = useRef<HTMLFormElement>(null);

  const sendForm: SubmitHandler<ContactTypes> = () => {
    try {
      if (form.current) {
        emailjs.sendForm(
          "service_eh4xgt9",
          "template_ub61q6s",
          form.current,
          "vbNm2-yr6zT-Ko0mI"
        );
      }
    } catch (err: any) {
      console.log(err.text);
    }
    resetField("user_name");
    resetField("user_email");
    resetField("message");
  };

  //Animate on scroll
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
      delay: 100,
    });
  });

  return (
    <div
      id="contact"
      className="w-full overflow-hidden lg:h-screen bg-gray-300 dark:bg-darkBackground"
    >
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <div data-aos="fade-up">
          <h5>Contact</h5>
          <h2 className="py-4 text-slate-800 dark:text-gray-300">
            Get In Touch
          </h2>
        </div>
        <div data-aos="fade-up" className="ml-2 grid lg:grid-cols-5 gap-8">
          <Information />

          <div className="contact-form">
            <div className="p-4">
              <form ref={form} onSubmit={handleSubmit(sendForm)}>
                <div>
                  <div className="flex justify-between">
                    <label className="uppercase text-sm py-2 text-slate-800 dark:text-gray-300">
                      Name
                    </label>
                    <small className="text-rose-700 relative mt-2">
                      {errors.user_name?.message}
                    </small>
                  </div>
                  <input
                    {...register("user_name", {
                      required: "Please enter your name",
                    })}
                    type="text"
                    name="user_name"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <div className="flex justify-between">
                    <label className="uppercase text-sm py-2 text-slate-800 dark:text-gray-300">
                      E-mail
                    </label>
                    <small className="text-rose-700 relative mt-2">
                      {errors.user_email?.message}
                    </small>
                  </div>
                  <input
                    {...register("user_email", {
                      required: "Please enter your e-mail adress",
                    })}
                    aria-invalid={errors.user_email ? "true" : "false"}
                    type="email"
                    name="user_email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <div className="flex justify-between">
                    <label className="uppercase text-sm py-2 text-slate-800 dark:text-gray-300">
                      Message
                    </label>
                    <small className="text-rose-700 relative mt-2">
                      {errors.message?.message}
                    </small>
                  </div>
                  <textarea
                    {...register("message", {
                      required: "Please enter message to me",
                    })}
                    rows={10}
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4 rounded-md uppercase bg-gradient-to-r from-blue-500 to-pink-800">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-8">
          <Link href="/">
            <div className="rounded-full shadow-md p-4 cursor-pointer shadow-slate-800 dark:shadow-blue-400 hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-gray-500" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
