import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Img,
  Text,
  Button,
  List,
  Input,
  Line,
  TextArea,
  Stack,
} from "components";

const ContactPage = () => {
  const navigate = useNavigate();

  function handleNavigate4() {
    //TODO: You had integrated navigation action, since you've not selected the target page,
    // you will have to update navigation code manually.
    navigate("");
  }

  return (
    <>
      <Column className="bg-white_A700 font-chivo items-center justify-end mx-[auto] lg:pt-[11px] xl:pt-[13px] 2xl:pt-[15px] 3xl:pt-[18px] w-[100%]">
        <Column className="items-center w-[77%]">
          <header className="w-[100%]">
            <Row className="items-center justify-end pl-[2px] w-[100%]">
              <Img
                src="images/img_vector.svg"
                className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                alt="Vector"
              />
              <Text className="cursor-pointer hover:font-bold font-bold font-cinzeldecorative lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-teal_400 w-[auto]">
                Growthly
              </Text>
              <Text className="cursor-pointer hover:font-bold font-bold font-chivo lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 hover:text-teal_400 w-[auto]">
                Pricing
              </Text>
              <Text className="cursor-pointer hover:font-bold font-bold font-chivo lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 hover:text-teal_400 w-[auto]">
                Resources Center
              </Text>
              <Text className="cursor-pointer hover:font-bold font-bold font-chivo lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 hover:text-teal_400 w-[auto]">
                About
              </Text>
              <Text className="cursor-pointer hover:font-bold font-bold font-chivo lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 hover:text-teal_400 w-[auto]">
                Contact
              </Text>
              <Text className="cursor-pointer hover:font-bold font-bold font-chivo lg:ml-[225px] xl:ml-[257px] 2xl:ml-[290px] 3xl:ml-[348px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 hover:text-teal_400 w-[auto]">
                Login
              </Text>
              <Button
                className="font-bold font-chivo lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[11%]"
                shape="RoundedBorder6"
                size="md"
                variant="FillTeal400"
              >
                Sign Up
              </Button>
            </Row>
          </header>
          <Row className="items-center justify-evenly 3xl:mt-[102px] lg:mt-[66px] xl:mt-[75px] 2xl:mt-[85px] w-[100%]">
            <Column className="2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] 2xl:pt-[10px] 3xl:pt-[12px] lg:pt-[7px] xl:pt-[8px] w-[52%]">
              <Text className="font-bold lg:leading-[42px] xl:leading-[48px] 2xl:leading-[54px] 3xl:leading-[64px] lg:text-[34px] xl:text-[39px] 2xl:text-[44px] 3xl:text-[52px] text-gray_900 w-[71%]">
                Talk to our product analytics expert
              </Text>
              <Text className="font-normal lg:leading-[21px] xl:leading-[24px] 2xl:leading-[28px] 3xl:leading-[33px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[93%]">
                Have questions about pricing, plans, or Growthly? Fill out the
                form and our product analytics expert will be in touch directly.
              </Text>
              <Text className="font-bold lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-gray_900 w-[auto]">
                Our office
              </Text>
              <Img
                src="images/img_rectangle224.png"
                className="lg:h-[187px] xl:h-[214px] 2xl:h-[241px] 3xl:h-[289px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] rounded-radius6 w-[93%]"
                alt="Rectangle224"
              />
              <Text className="font-normal lg:leading-[21px] xl:leading-[24px] 2xl:leading-[28px] 3xl:leading-[33px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[93%]">
                Have questions about pricing, plans, or Growthly? Fill out the
                form and our product analytics expert will be in touch directly.
              </Text>
              <List
                className="lg:gap-[31px] xl:gap-[35px] 2xl:gap-[40px] 3xl:gap-[48px] grid grid-cols-2 min-h-[auto] lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] pt-[2px] w-[95%]"
                orientation="horizontal"
              >
                <Column className="mt-[2px] pb-[4px] pr-[4px] w-[100%]">
                  <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    United Kingdom
                  </Text>
                  <Row className="lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] pl-[1px] pt-[1px] w-[82%]">
                    <Img
                      src="images/img_location_18X15.svg"
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] ml-[1px] w-[8%]"
                      alt="location"
                    />
                    <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[87%]">
                      30 Eastbourne Terrace
                      <br />
                      Paddington, London
                      <br />
                      W2 6LA, UK
                    </Text>
                  </Row>
                  <Row className="items-center ml-[1px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[59%]">
                    <Img
                      src="images/img_vector_bluegray_600.svg"
                      className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                      alt="Vector One"
                    />
                    <Text className="font-bold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 underline w-[auto]">
                      +44 13 5135 1051
                    </Text>
                  </Row>
                </Column>
                <Column className="pb-[4px] pr-[4px] w-[100%]">
                  <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    France
                  </Text>
                  <Row className="lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] pl-[1px] pt-[1px] w-[89%]">
                    <Img
                      src="images/img_location_18X15.svg"
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] ml-[1px] w-[7%]"
                      alt="location One"
                    />
                    <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[88%]">
                      266 Place Ernest Granier
                      <br />
                      34000 Montpellier
                      <br />
                      France
                    </Text>
                  </Row>
                  <Row className="items-center ml-[1px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[59%]">
                    <Img
                      src="images/img_vector_bluegray_600.svg"
                      className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                      alt="Vector Two"
                    />
                    <Text className="font-bold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 underline w-[auto]">
                      +33 5 12 18 21 86
                    </Text>
                  </Row>
                </Column>
              </List>
            </Column>
            <Column className="bg-white_A700 lg:p-[30px] xl:p-[34px] 2xl:p-[39px] 3xl:p-[46px] rounded-radius6 shadow-bs4 w-[48%]">
              <Row className="items-center lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                <Column className="w-[54%]">
                  <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
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
                  <Text className="font-normal ml-[4px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
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
              <Text className="font-normal ml-[1px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                Email Address
              </Text>
              <Input
                className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                wrapClassName="2xl:mt-[17px] 3xl:mt-[20px] lg:mt-[13px] w-[100%] xl:mt-[15px]"
                type="email"
                name="FormInput Two"
                placeholder="Email Address"
                shape="RoundedBorder6"
                size="lg"
                variant="OutlineBluegray200"
              ></Input>
              <Text className="font-normal ml-[1px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                Company Name
              </Text>
              <Input
                className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                wrapClassName="2xl:mt-[16px] 3xl:mt-[19px] lg:mt-[12px] w-[100%] xl:mt-[14px]"
                type="text"
                name="FormInput Three"
                placeholder="Company Name"
                shape="RoundedBorder6"
                size="lg"
                variant="OutlineBluegray200"
              ></Input>
              <Text className="font-normal ml-[2px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                Phone Number
              </Text>
              <Row className="bg-white_A700 border border-bluegray_200 border-solid items-center lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius6 w-[100%]">
                <Column className="bg-white_A700 items-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] 2xl:pb-[10px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[8px] w-[6%]">
                  <div className="bg-red_800 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] w-[100%]"></div>
                </Column>
                <Img
                  src="images/img_arrowdown.svg"
                  className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] w-[3%]"
                  alt="arrowdown"
                />
                <Line className="bg-gray_200 lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] w-[1px]" />
                <Input
                  className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_600 text-bluegray_600 w-[100%]"
                  wrapClassName="2xl:ml-[7px] 3xl:ml-[8px] lg:ml-[5px] mt-[1px] w-[69%] xl:ml-[6px]"
                  type="number"
                  name="Frame179"
                  placeholder="Phone Number"
                  size="md"
                  variant="FillWhiteA700"
                ></Input>
              </Row>
              <Text className="font-normal ml-[1px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                Message
              </Text>
              <TextArea
                className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                name="FormInput Four"
                placeholder="Message"
                shape="RoundedBorder6"
                size="sm"
                variant="OutlineBluegray200"
              ></TextArea>
              <Button
                className="font-bold mb-[1px] lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                shape="RoundedBorder6"
                size="md"
                variant="FillTeal400"
              >
                Send Message
              </Button>
            </Column>
          </Row>
          <Stack className="lg:h-[249px] xl:h-[285px] 2xl:h-[321px] 3xl:h-[385px] 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[77px] xl:mt-[88px] w-[100%]">
            <Img
              src="images/img_group459.svg"
              className="absolute lg:h-[249px] xl:h-[285px] 2xl:h-[321px] 3xl:h-[385px] w-[100%]"
              alt="Group459"
            />
            <Column className="absolute h-[max-content] inset-y-[0] left-[6%] my-[auto] w-[43%]">
              <Text className="font-bold ml-[3px] lg:text-[34px] xl:text-[39px] 2xl:text-[44px] 3xl:text-[52px] text-white_A700 w-[auto]">
                Ready to get started?
              </Text>
              <Text className="font-normal lg:leading-[21px] xl:leading-[24px] 2xl:leading-[28px] 3xl:leading-[33px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700_99 w-[84%]">
                The fastest and simple way to generate growing business
                solutions with our products
              </Text>
              <Row className="bg-white_A700 border border-bluegray_200 border-solid items-center justify-end lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius6 w-[100%]">
                <Input
                  className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                  wrapClassName="w-[60%]"
                  type="email"
                  name="box"
                  placeholder="Your business email"
                  size="md"
                  variant="FillWhiteA700"
                ></Input>
                <Button
                  className="font-bold lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[32%]"
                  shape="RoundedBorder6"
                  size="md"
                  variant="FillTeal400"
                >
                  Get Started
                </Button>
              </Row>
            </Column>
          </Stack>
        </Column>
        <footer className="bg-gray_900 xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[93px] w-[100%]">
          <Column className="items-center lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] lg:ml-[125px] xl:ml-[143px] 2xl:ml-[161px] 3xl:ml-[193px] lg:mr-[127px] xl:mr-[145px] 2xl:mr-[164px] 3xl:mr-[196px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[77%]">
            <Row className="justify-evenly pb-[4px] w-[100%]">
              <Column className="lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] pr-[2px] py-[2px] w-[51%]">
                <Row className="font-cinzeldecorative items-end ml-[4px] w-[25%]">
                  <Img
                    src="images/img_signal.svg"
                    className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                    alt="signal"
                  />
                  <Text className="font-bold mb-[2px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-cyan_300 w-[auto]">
                    Growthly
                  </Text>
                </Row>
                <Text className="font-chivo font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] ml-[2px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[52%]">
                  The fastest and simple way to generate growing business
                  solutions with our products
                </Text>
                <Row className="font-chivo items-center lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] pl-[2px] py-[2px] w-[41%]">
                  <Img
                    src="images/img_mail.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] my-[2px] w-[9%]"
                    alt="mail"
                  />
                  <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] my-[2px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                    hello@dhuhacreative.com
                  </Text>
                </Row>
                <Row className="font-chivo mb-[1px] ml-[2px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[40%]">
                  <Img
                    src="images/img_grid_20X20.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                    alt="grid"
                  />
                  <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                    Join our slack community
                  </Text>
                </Row>
              </Column>
              <Column className="lg:mt-[42px] xl:mt-[48px] 2xl:mt-[55px] 3xl:mt-[66px] w-[17%]">
                <Text className="font-bold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  Product
                </Text>
                <Text className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                  Landingpages
                </Text>
                <Text className="font-normal lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                  Pricing
                </Text>
                <Text className="font-normal lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                  Benefits
                </Text>
                <Text className="font-normal lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                  Features
                </Text>
              </Column>
              <Column className="lg:mt-[44px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] w-[17%]">
                <Text className="font-bold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  Company
                </Text>
                <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                  About
                </Text>
                <Text className="font-normal lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                  Privacy Policy
                </Text>
                <Text className="font-normal lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                  Terms & Conditions
                </Text>
                <Text className="font-normal lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                  Partners
                </Text>
                <Text className="font-normal lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                  Contact
                </Text>
              </Column>
              <Column className="lg:mt-[42px] xl:mt-[48px] 2xl:mt-[55px] 3xl:mt-[66px] w-[15%]">
                <Text className="font-bold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  Resources
                </Text>
                <Text className="font-normal lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                  Guides and resources
                </Text>
                <Text className="font-normal lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                  Blog
                </Text>
                <Text className="font-normal lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                  Tools
                </Text>
                <Text className="font-normal lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                  Support
                </Text>
              </Column>
            </Row>
            <Row className="items-end lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] pt-[1px] w-[100%]">
              <Text className="font-normal lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700_a2 w-[auto]">
                © 2020 Growthly. All Right Reserved
              </Text>
              <Img
                src="images/img_bxbxlinstagra.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[575px] xl:ml-[658px] 2xl:ml-[740px] 3xl:ml-[888px] my-[1px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                alt="bxbxlinstagra"
              />
              <Img
                src="images/img_twitter.svg"
                className="common-pointer lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] my-[1px] w-[2%]"
                onClick={handleNavigate4}
                alt="twitter"
              />
              <Img
                src="images/img_vector_22X22.svg"
                className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] mb-[1px] lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] lg:w-[17px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]"
                alt="Vector Three"
              />
            </Row>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default ContactPage;
