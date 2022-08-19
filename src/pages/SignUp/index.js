import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Input,
  Line,
  CheckBox,
  Button,
  Stack,
} from "components";

const SignUpPage = () => {
  return (
    <>
      <Column className="bg-gray_200 font-chivo mx-[auto] lg:p-[62px] xl:p-[71px] 2xl:p-[80px] 3xl:p-[96px] w-[100%]">
        <Row className="bg-white_A700 lg:ml-[39px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] lg:pl-[37px] xl:pl-[42px] 2xl:pl-[48px] 3xl:pl-[57px] rounded-bl-[6px] rounded-br-[0] rounded-tl-[6px] rounded-tr-[0] shadow-bs4 w-[87%]">
          <Column className="lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] pr-[2px] py-[2px] w-[47%]">
            <Row className="font-cinzeldecorative items-end ml-[2px] w-[29%]">
              <Img
                src="images/img_vector.svg"
                className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                alt="Vector"
              />
              <Text className="font-bold mb-[2px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-teal_400 w-[auto]">
                Growthly
              </Text>
            </Row>
            <Text className="font-bold font-chivo lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
              Create your Growly Account
            </Text>
            <Row className="font-chivo items-center lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[91%]">
              <Column className="w-[54%]">
                <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                  Firts Name
                </Text>
                <Input
                  className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                  wrapClassName="2xl:mt-[17px] 3xl:mt-[20px] lg:mt-[13px] w-[87%] xl:mt-[15px]"
                  type="text"
                  name="FormInput"
                  placeholder="First Name"
                  shape="RoundedBorder6"
                  size="lg"
                  variant="OutlineBluegray200"
                ></Input>
              </Column>
              <Column className="mt-[1px] w-[46%]">
                <Text className="font-normal ml-[4px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                  Last Name
                </Text>
                <Input
                  className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                  wrapClassName="2xl:mt-[17px] 3xl:mt-[20px] lg:mt-[13px] w-[100%] xl:mt-[15px]"
                  type="text"
                  name="FormInput One"
                  placeholder="Last Name"
                  shape="RoundedBorder6"
                  size="lg"
                  variant="OutlineBluegray200"
                ></Input>
              </Column>
            </Row>
            <Text className="font-chivo font-normal lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
              Email Address
            </Text>
            <Input
              className="font-chivo font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
              wrapClassName="2xl:mt-[17px] 3xl:mt-[20px] lg:mt-[13px] w-[91%] xl:mt-[15px]"
              type="email"
              name="FormInput Two"
              placeholder="Email Address"
              shape="RoundedBorder6"
              size="lg"
              variant="OutlineBluegray200"
            ></Input>
            <Row className="font-chivo items-center lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[91%]">
              <Column className="mt-[1px] w-[54%]">
                <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                  Company Name
                </Text>
                <Input
                  className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                  wrapClassName="2xl:mt-[15px] 3xl:mt-[18px] lg:mt-[11px] w-[87%] xl:mt-[13px]"
                  type="text"
                  name="FormInput Three"
                  placeholder="Company Name"
                  shape="RoundedBorder6"
                  size="lg"
                  variant="OutlineBluegray200"
                ></Input>
              </Column>
              <Column className="w-[46%]">
                <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                  Company size
                </Text>
                <Input
                  className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                  wrapClassName="2xl:mt-[15px] 3xl:mt-[18px] flex lg:mt-[11px] w-[100%] xl:mt-[13px]"
                  name="FormInput Four"
                  placeholder="Company Size"
                  prefix={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="lg:w-[9px] lg:ml-[4px] lg:mr-[10px] xl:w-[10px] xl:ml-[5px] xl:mr-[12px] 2xl:w-[12px] 2xl:ml-[6px] 2xl:mr-[14px] 3xl:w-[14px] 3xl:ml-[7px] 3xl:mr-[16px] my-[auto]"
                      alt="arrow_down"
                    />
                  }
                  shape="RoundedBorder6"
                  size="lg"
                  variant="OutlineBluegray200"
                ></Input>
              </Column>
            </Row>
            <Text className="font-chivo font-normal lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
              Phone Number
            </Text>
            <Row className="bg-white_A700 border border-bluegray_200 border-solid font-chivo items-center lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius6 w-[91%]">
              <Column className="bg-white_A700 items-center lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] 2xl:pb-[10px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[8px] w-[6%]">
                <div className="bg-red_800 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] w-[100%]"></div>
              </Column>
              <Img
                src="images/img_arrowdown_bluegray_600.svg"
                className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] w-[3%]"
                alt="arrowdown"
              />
              <Line className="bg-gray_200 lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] w-[1px]" />
              <Input
                className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_600 text-bluegray_600 w-[100%]"
                wrapClassName="2xl:ml-[7px] 3xl:ml-[8px] lg:ml-[5px] mt-[1px] w-[75%] xl:ml-[6px]"
                type="number"
                name="frame178"
                placeholder="Phone Number"
                size="sm"
                variant="FillWhiteA700"
              ></Input>
            </Row>
            <CheckBox
              className="font-chivo font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic lg:pl-[6px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600"
              inputClassName="h-[16px] mr-[5px] w-[16px]"
              name="BysigningupI"
              label="By signing up I agree  to Sastly Terms & Conditons and Privacy Policy"
              shape="RoundedBorder4"
              size="sm"
              variant="OutlineBluegray600"
            ></CheckBox>
            <Button
              className="font-bold font-chivo lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[91%]"
              shape="RoundedBorder6"
              size="md"
              variant="FillTeal400"
            >
              Sign Up
            </Button>
            <Row className="font-chivo items-center lg:ml-[100px] xl:ml-[114px] 2xl:ml-[129px] 3xl:ml-[154px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[35%]">
              <Text className="font-normal mb-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                Already an user?
              </Text>
              <Text className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-teal_400 w-[auto]">
                Login
              </Text>
            </Row>
            <Line className="bg-gray_200 h-[1px] lg:mt-[52px] xl:mt-[59px] 2xl:mt-[67px] 3xl:mt-[80px] w-[91%]" />
            <Row className="font-chivo mb-[1px] 3xl:ml-[109px] lg:ml-[70px] xl:ml-[80px] 2xl:ml-[91px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[55%]">
              <Text className="font-normal mb-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_200 w-[auto]">
                Terms & Conditions
              </Text>
              <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] mt-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_200 w-[auto]">
                Privacy Policy
              </Text>
            </Row>
          </Column>
          <Column className="bg-teal_400 items-center 3xl:p-[112px] lg:p-[73px] xl:p-[83px] 2xl:p-[94px] rounded-bl-[0] rounded-br-[6px] rounded-tl-[0] rounded-tr-[6px] w-[53%]">
            <Stack
              className="bg-cover bg-repeat lg:h-[313px] xl:h-[358px] 2xl:h-[403px] 3xl:h-[483px] 3xl:mt-[108px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[90px] 3xl:pr-[10px] lg:pr-[7px] xl:pr-[8px] 2xl:pr-[9px] w-[96%]"
              style={{ backgroundImage: "url('images/img_group364.svg')" }}
            >
              <Column className="absolute bg-white_A700 h-[max-content] inset-[0] justify-center m-[auto] lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius521 shadow-bs5 w-[62%]">
                <Text className="font-bold ml-[3px] mt-[3px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-gray_900 w-[auto]">
                  Data Analytics
                </Text>
                <Img
                  src="images/img_group152_1.svg"
                  className="xl:h-[106px] 2xl:h-[120px] 3xl:h-[143px] lg:h-[93px] ml-[3px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[96%]"
                  alt="Group152"
                />
              </Column>
              <Button
                className="absolute flex lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-center justify-center right-[17%] top-[6%] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                shape="icbRoundedBorder6"
                size="lgIcn"
                variant="icbOutlineIndigo9000c"
              >
                <Img
                  src="images/img_grid.svg"
                  className="flex items-center justify-center lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                  alt="grid"
                />
              </Button>
              <Button
                className="absolute bottom-[17%] flex lg:h-[41px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[63px] items-center justify-center left-[9%] lg:w-[40px] xl:w-[46px] 2xl:w-[52px] 3xl:w-[62px]"
                shape="icbRoundedBorder6"
                size="lgIcn"
                variant="icbOutlineIndigo9000c1_2"
              >
                <Img
                  src="images/img_group74.svg"
                  className="flex items-center justify-center"
                  alt="GroupSeventyFour"
                />
              </Button>
              <Stack className="absolute bg-white_A700 bottom-[13%] 3xl:h-[115px] lg:h-[74px] xl:h-[85px] 2xl:h-[96px] lg:px-[10px] xl:px-[11px] 2xl:px-[13px] 3xl:px-[15px] right-[0] rounded-radius5 shadow-bs6 3xl:w-[114px] lg:w-[73px] xl:w-[84px] 2xl:w-[95px]">
                <Img
                  src="images/img_eye.svg"
                  className="absolute lg:h-[54px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[83px] inset-[0] justify-center m-[auto] lg:w-[53px] xl:w-[61px] 2xl:w-[69px] 3xl:w-[82px]"
                  alt="eye"
                />
              </Stack>
              <Row className="absolute bg-white_A700 items-center left-[0] 3xl:p-[10px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius372 shadow-bs7 top-[13%] w-[35%]">
                <Img
                  src="images/img_grid_35X35.svg"
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                  alt="grid One"
                />
                <Column className="mb-[1px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] w-[59%]">
                  <Text className="font-normal not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-gray_900 w-[auto]">
                    Total Subscribe
                  </Text>
                  <Text className="font-bold lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-gray_900 w-[auto]">
                    61.000
                  </Text>
                </Column>
              </Row>
              <Column className="absolute bg-amber_300 items-center lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] right-[0] rounded-radius5 shadow-bs6 top-[28%] w-[23%]">
                <Line className="bg-white_A700 h-[5.21px] my-[1px] rounded-radius26 w-[99%]" />
              </Column>
              <Img
                src="images/img_computer.svg"
                className="absolute lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] left-[0] top-[36%] w-[23%]"
                alt="computer"
              />
              <Button
                className="2xl:mb-[31px] 2xl:ml-[128px] 3xl:mb-[37px] 3xl:ml-[153px] absolute bottom-[8%] flex items-center justify-center left-[36%] lg:mb-[24px] lg:ml-[99px] text-center w-[17%] xl:mb-[27px] xl:ml-[113px]"
                leftIcon={
                  <Img
                    src="images/img_vector_12X13.svg"
                    className="text-center right-[2%] absolute lg:w-[10px] lg:mr-[4px] xl:w-[11px] xl:mr-[5px] 2xl:w-[13px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:mr-[7px]"
                    alt="Vector"
                  />
                }
                shape="RoundedBorder6"
                size="sm"
                variant="FillAmber300"
              >
                <div className="bg-transparent bottom-[0] font-bold left-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px]">
                  4,8
                </div>
              </Button>
            </Stack>
            <Text className="font-bold lg:leading-[24px] xl:leading-[28px] 2xl:leading-[32px] 3xl:leading-[38px] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[100%]">
              Give trust to us to provide accurate data for your product
            </Text>
            <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] xl:mb-[104px] 2xl:mb-[118px] 3xl:mb-[141px] lg:mb-[91px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-white_A700_99 w-[96%]">
              The fastest and simple way to generate growing business solutions
              with our products
            </Text>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default SignUpPage;
