import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder6: "rounded-radius6",
  icbRoundedBorder6: "rounded-radius6",
  icbRoundedBorder9: "rounded-radius9515",
};
const variants = {
  FillTeal400: "bg-teal_400 text-white_A700",
  OutlineGray90014: "bg-white_A700 shadow-bs1 text-amber_A200",
  FillAmber300: "bg-amber_300 text-white_A700",
  FillTeal401: "bg-teal_401 text-white_A700",
  icbOutlineIndigo9000c: "bg-white_A700 shadow-bs2",
  icbFillDeeporange300: "bg-deep_orange_300",
  icbFillAmber300: "bg-amber_300",
  icbFillTeal400: "bg-teal_400",
  icbFillWhiteA700: "bg-white_A700",
  icbOutlineIndigo9000c1_2: "bg-white_A700 shadow-bs",
  icbOutlineGray90014: "bg-amber_300 shadow-bs1",
  icbOutlineGray900141_2: "bg-teal_400 shadow-bs1",
};
const sizes = {
  sm: "3xl:p-[10px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px]",
  md: "lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px]",
  smIcn: "p-[4px]",
  mdIcn: "lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px]",
  lgIcn: "2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px]",
  xlIcn: "lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px]",
  "2xlIcn": "lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder6",
    "icbRoundedBorder6",
    "icbRoundedBorder9",
  ]),
  variant: PropTypes.oneOf([
    "FillTeal400",
    "OutlineGray90014",
    "FillAmber300",
    "FillTeal401",
    "icbOutlineIndigo9000c",
    "icbFillDeeporange300",
    "icbFillAmber300",
    "icbFillTeal400",
    "icbFillWhiteA700",
    "icbOutlineIndigo9000c1_2",
    "icbOutlineGray90014",
    "icbOutlineGray900141_2",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "smIcn",
    "mdIcn",
    "lgIcn",
    "xlIcn",
    "2xlIcn",
  ]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
