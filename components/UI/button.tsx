import { ReactNode } from "react";

const Button = (props: ReactNode | any) => {
  return (
    <button
      className={`${
        props?.isFilled
          ? `${props?.background || "bg-secondary"} ${
              props?.color || "text-primary"
            } hover:bg-transparent hover:text-white`
          : "bg-transparent text-secondary hover:bg-secondary hover:text-white"
      } 
      ${props?.className}
      px-16 py-4 border-4 ${
        props?.border || "border-secondary"
      }  font-semibold rounded-full 
      } transition-all duration-500 ease-in-out`}
    >
      {props?.title}
      {props?.isFilled}
    </button>
  );
};

export default Button;
