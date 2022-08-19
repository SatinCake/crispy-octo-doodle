import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineBluegray200: "bg-white_A700 border border-bluegray_200 border-solid",
};
const shapes = { RoundedBorder6: "rounded-radius6" };
const sizes = {
  sm: "lg:pb-[27px] xl:pb-[31px] 2xl:pb-[35px] 3xl:pb-[42px] lg:pt-[14px] xl:pt-[16px] 2xl:pt-[19px] 3xl:pt-[22px] lg:px-[14px] xl:px-[16px] 2xl:px-[19px] 3xl:px-[22px]",
};
const TextArea = React.forwardRef(
  (
    {
      className,
      name,
      placeholder,
      children,
      shape,
      variant,
      size,
      errors,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <textarea
          ref={ref}
          className={`${className} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
          name={name}
          placeholder={placeholder}
          {...restProps}
        />
        {!!errors && <ErrorMessage errors={errors} />}

        {children}
      </>
    );
  }
);
TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder6"]),
  variant: PropTypes.oneOf(["OutlineBluegray200"]),
  size: PropTypes.oneOf(["sm"]),
};
TextArea.defaultProps = {
  className: "",
  name: "",
  placeholder: "",
  shape: "",
  variant: "",
  size: "",
};
export { TextArea };
