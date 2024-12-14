import React from "react";
import { Input } from "./components/Input";
import { FormProvider, useForm } from "react-hook-form";
import {
  name_validation,
  last_validation,
  email_validation,
  password_validation,
} from "./utils/inputValidations";

const Form = () => {
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div>
      <section id="hero">
        <div className="container flex flex-col md:flex-row px-24 mx-auto mt-10 space-y-0 md:space-y-0">
          <div className="flex flex-col mb-16  justify-center  space-y-12 md:w-1/2 text-white">
            <h1
              className="max-w-md text-4xl font-bold text-center
             md:text-5xl md:text-left"
            >
              Learn to code by watching others
            </h1>

            <p
              className="max-w-sm text-center 
             text-darkGrayishBlue md:text-left"
            >
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </p>
          </div>

          <div className="md:w-1/2 flex flex-col items-center p-8">
            <button
              type="submit"
              className="max-w-lg w-full mx-auto shadow-lg text-white bg-Blue hover:bg-blue-800 font-medium rounded-lg px-10 py-2.5 text-center"
            >
              Try it free 7 days then $20/mo. thereafter
            </button>
            <FormProvider {...methods}>
              <form
                onSubmit={(e) => e.preventDefault()}
                noValidate
                autoComplete="off"
                className="max-w-lg w-full mx-auto bg-white p-8 rounded-lg mt-6"
              >
                <Input {...name_validation} />
                <Input {...last_validation} />
                <Input {...email_validation} />

                <Input {...password_validation} />

                <button
                  onClick={onSubmit}
                  type="submit"
                  className="max-w-md w-full mx-auto text-white bg-Green hover:bg-blue-800 font-medium rounded-lg px-10 py-2.5 text-center"
                >
                  CLAIM YOUR FREE TRIAL
                </button>

                <p className="text-xs mt-4 text-GrayishBlue">
                  By clicking the button, you are agreeing to our{" "}
                  <span className="text-Red">Terms and Services</span>{" "}
                </p>
              </form>
            </FormProvider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
