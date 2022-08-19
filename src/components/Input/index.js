import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineBluegray200: "bg-white_A700 border border-bluegray_200 border-solid",
  FillGray50: "bg-gray_50",
  FillWhiteA700: "bg-white_A700",
};
const shapes = { RoundedBorder6: "rounded-radius6" };
const sizes = {
  sm: "3xl:p-[10px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px]",
  md: "2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px]",
  lg: "lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder6"]),
  variant: PropTypes.oneOf([
    "OutlineBluegray200",
    "FillGray50",
    "FillWhiteA700",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "",
  size: "",
};

export { Input };
