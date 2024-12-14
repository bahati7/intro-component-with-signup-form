/*-------------------------------------------------------------------
|  🐼 React FC Input
|
|  🦝 Todo: CREATE RE-USEABLE INPUT COMPOENT
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import cn from "classnames";
import { findInputError, isFormInvalid } from "../utils";
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { MdError } from "react-icons/md";

export const Input = ({ label, type, id, placeholder,validation, name }) => {
  const { 
    register,
    formState:{errors},
 } = useFormContext()

 const inputError=findInputError(errors,name)
 const isInvalid = isFormInvalid(inputError)

  return (
    <div className="mb-2 relative">
        <AnimatePresence  mode="wait" initial={false}>
            {isInvalid && (
                <InputError
                    message={inputError.error.message}
                    key={inputError.error.message}
                />
            )
            }

        </AnimatePresence>
        
        

      <input
        type={type}
        id={id}
        className={`border mt-5  ${isInvalid ? ' border-Red focus:ring-red-500 focus:border-red-500 block':' border-DarkBlue'} text-DarkBlue  placeholder-DarkBlue text-sm rounded-md block w-full p-2.5`}
        placeholder={placeholder}
        {...register(name,validation)}
      />
      <label htmlFor={id} className=" mt-2 text-xs text-Red flex justify-end text-end italic">
      {isInvalid && (
                <span className="text-red-500">{inputError.error.message}</span>
            )
            }
      </label>
    </div>
  );
};

const InputError = ({ message }) => {
  return (
    <motion.p
    //   className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
    className="absolute inset-y-0 end-0 flex items-center ps-5 pb-5 pr-5 text-2xl pointer-events-none text-red-500 "
      {...framer_error}
    >
      <MdError />
      {/* {message} */}
    </motion.p>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};
