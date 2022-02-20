import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  // handle events 
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onTouched'
  });

  // handle submit 
  const onSubmit = data => alert("تم الارسال " + JSON.stringify(data));

  return (
    <React.Fragment>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
       
            <div className="h-24 flex justify-center items-center shadow">
              <h1 className="uppercase font-bold text-4xl text-center">
                تواصل معنا
              </h1>
            </div>

            {/* body section */}
            <div>
              <div className="mx-5 space-y-8 mt-14">
                <div>
                <label> Full Name</label>
                <br />
                  <input
                    type="text"
                    placeholder="YourName"
                    className={`w-50 text-3xl h-16 placeholder-gray-500 rounded-lg ${errors.fullName &&
                      " focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                    {...register("fullName", {
                      required: {
                        value: true,
                        message: 'Full name is required'
                      },
                      minLength: {
                        value: 3,
                        message: "Please enter your company name",
                      },
                      maxLength: {
                        value: 20,
                        message: "Maximum allowed length is 20 characters ",
                      },
                      pattern: {
                        value: /[a-zA-Z]+/,
                        message: "Please enter only alphabets",
                      }
                    })}
                  />
                  <div>
                    {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName.message}</span>}
                  </div>
                </div>
                <div>
                <label> Email</label>
                <br />
                  <input
                    type="email"
                    placeholder="YourEmail"
                    className={`w-50 text-3xl h-16 placeholder-gray-500 rounded-lg ${errors.email &&
                      " focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                    {...register("email", {
                      required: {
                        value: true,
                        message: 'Email is required'
                      },

                      pattern: {
                        value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                        message: "Please enter a valid email",
                      }
                    })}
                  />
                  <div>
                    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                  </div>
                </div>

                <div>
              <label> Message</label>
                <br />
                  <textarea
                    placeholder="message"
                    className={`w-50 text-3xl h-60 placeholder-gray-500 rounded-lg ${errors.comment &&
                      " focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                    {...register("comment", {
                      required: {
                        value: true,
                        message: 'Comment is required'
                      },
                      minLength: {
                        value: 3,
                        message: "Please enter your company name",
                      },
                      maxLength: {
                        value: 60,
                        message: "Maximum allowed length is 60 characters ",
                      },

                    })}
                  />
                  <div>
                    {errors.comment && <span className="text-red-500 text-sm">{errors.comment.message}</span>}
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <input
                    type="submit"
                    value="Submit"
                    className="w-1/3 h-12 bg-indigo-500 text-white font-bold rounded-lg  btn btn-primary  btn-lg"
                  />
                </div>
              </div>
            </div>
          
        </form>
      </section>
    </React.Fragment>
  );
};

export default Contact;
