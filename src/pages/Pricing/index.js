import React from "react";

import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import {
  Column,
  Stack,
  Row,
  Img,
  Text,
  Button,
  List,
  Line,
  Grid,
  Input,
} from "components";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";

const PricingPage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
  });

  function handleNavigate3() {
    //TODO: You had integrated navigation action, since you've not selected the target page,
    // you will have to update navigation code manually.
    navigate("");
  }

  return (
    <>
      <Column className="bg-white_A700 font-chivo items-center mx-[auto] w-[100%]">
        <Stack className="2xl:h-[1057px] 3xl:h-[1268px] lg:h-[822px] xl:h-[940px] w-[100%]">
          <Column
            className="absolute bg-cover bg-repeat items-center lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] top-[0] w-[100%]"
            style={{ backgroundImage: "url('images/img_group109.png')" }}
          >
            <header className="lg:mb-[503px] xl:mb-[575px] 2xl:mb-[647px] 3xl:mb-[776px] w-[79%]">
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
          </Column>
          <Column className="absolute bottom-[0] inset-x-[0] items-center justify-end mx-[auto] 3xl:pt-[10px] lg:pt-[7px] xl:pt-[8px] 2xl:pt-[9px] w-[77%]">
            <Column className="items-center w-[48%]">
              <Text className="font-bold lg:leading-[45px] xl:leading-[51px] 2xl:leading-[58px] 3xl:leading-[69px] lg:text-[40px] xl:text-[46px] 2xl:text-[52px] 3xl:text-[62px] text-center text-gray_900 w-[100%]">
                Pricing plan for every product of all sizes.
              </Text>
              <Text className="font-normal lg:leading-[21px] xl:leading-[24px] 2xl:leading-[28px] 3xl:leading-[33px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 text-center w-[100%]">
                Start connecting with all your team and plan payment for every
                product as you want
              </Text>
            </Column>
            <List
              className="lg:gap-[31px] xl:gap-[35px] 2xl:gap-[40px] 3xl:gap-[48px] grid grid-cols-3 min-h-[auto] lg:mt-[52px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] w-[100%]"
              orientation="horizontal"
            >
              <Stack className="lg:h-[509px] xl:h-[582px] 2xl:h-[655px] 3xl:h-[786px] w-[100%]">
                <Column className="absolute bg-white_A700 bottom-[0] items-center justify-center lg:p-[30px] xl:p-[34px] 2xl:p-[39px] 3xl:p-[46px] rounded-radius6 shadow-bs4 w-[100%]">
                  <Text className="font-bold lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[auto]">
                    Free
                  </Text>
                  <Text className="font-bold lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 w-[auto]">
                    <span className="text-gray_900 font-chivo lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
                      $0
                    </span>
                    <span className="text-gray_900 font-chivo font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                      /month
                    </span>
                  </Text>
                  <Column className="lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[99%]">
                    <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 text-center w-[94%]">
                      All the basics for businesses that are just getting
                      started
                    </Text>
                    <Button
                      className="font-bold lg:ml-[41px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[58%]"
                      shape="RoundedBorder6"
                      size="md"
                      variant="FillTeal401"
                    >
                      Get Started
                    </Button>
                    <Line className="bg-gray_200 h-[1px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]" />
                    <Row className="ml-[3px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[64%]">
                      <Img
                        src="images/img_vector_teal_401.svg"
                        className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] mt-[1px] w-[9%]"
                        alt="Vector One"
                      />
                      <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900_99 w-[auto]">
                        Single Project Use
                      </Text>
                    </Row>
                    <Row className="items-center ml-[3px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[97%]">
                      <Img
                        src="images/img_vector_teal_401.svg"
                        className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] w-[6%]"
                        alt="Vector One"
                      />
                      <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900_99 w-[auto]">
                        Unlimited User Authentication
                      </Text>
                    </Row>
                    <Row className="ml-[3px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[97%]">
                      <Img
                        src="images/img_vector_teal_401.svg"
                        className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] mt-[1px] w-[6%]"
                        alt="Vector Two"
                      />
                      <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900_99 w-[auto]">
                        Unlimited data history & seats
                      </Text>
                    </Row>
                    <Row className="ml-[3px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[67%]">
                      <Img
                        src="images/img_vector_teal_401.svg"
                        className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] mt-[1px] w-[9%]"
                        alt="Vector Three"
                      />
                      <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900_99 w-[auto]">
                        Monitoring & alerts
                      </Text>
                    </Row>
                    <Row className="items-center ml-[3px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[94%]">
                      <Img
                        src="images/img_vector_teal_401.svg"
                        className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] w-[6%]"
                        alt="Vector Four"
                      />
                      <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900_99 w-[auto]">
                        Basic Roles and Permissions
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Stack className="absolute bg-white_A700 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] inset-x-[0] mx-[auto] lg:px-[22px] xl:px-[25px] 2xl:px-[29px] 3xl:px-[34px] rounded-radius6 shadow-bs2 top-[0] 2xl:w-[100px] 3xl:w-[120px] lg:w-[77px] xl:w-[88px]">
                  <Img
                    src="images/img_thumbsup.svg"
                    className="absolute lg:h-[31px] xl:h-[35px] 2xl:h-[40px] 3xl:h-[47px] inset-[0] justify-center m-[auto] w-[41%]"
                    alt="thumbsup"
                  />
                </Stack>
              </Stack>
              <Stack className="lg:h-[509px] xl:h-[582px] 2xl:h-[655px] 3xl:h-[786px] w-[100%]">
                <Column className="absolute bg-white_A700 bottom-[0] items-center justify-center lg:p-[30px] xl:p-[34px] 2xl:p-[39px] 3xl:p-[46px] rounded-radius6 shadow-bs4 w-[100%]">
                  <Text className="font-bold lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[auto]">
                    Growth
                  </Text>
                  <Text className="font-bold lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 w-[auto]">
                    <span className="text-gray_900 font-chivo lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
                      $99
                    </span>
                    <span className="text-gray_900 font-chivo font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                      /month
                    </span>
                  </Text>
                  <Column className="mb-[4px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]">
                    <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 text-center w-[100%]">
                      Suitable for growth-stage startups
                      <br />
                      with advanced requirements.
                    </Text>
                    <Button
                      className="font-bold lg:ml-[41px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[58%]"
                      shape="RoundedBorder6"
                      size="md"
                      variant="FillTeal401"
                    >
                      Try for free
                    </Button>
                    <Line className="bg-gray_200 h-[1px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]" />
                    <Row className="items-center ml-[4px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[60%]">
                      <Img
                        src="images/img_vector_teal_401.svg"
                        className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] w-[10%]"
                        alt="Vector Two"
                      />
                      <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                        <span className="text-gray_900 font-chivo">
                          All features{" "}
                        </span>
                        <span className="text-gray_900 font-chivo font-bold">
                          Free
                        </span>
                      </Text>
                    </Row>
                    <Row className="items-center ml-[4px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[73%]">
                      <Img
                        src="images/img_vector_teal_401.svg"
                        className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] w-[8%]"
                        alt="Vector One One"
                      />
                      <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                        Advanced Dashboard
                      </Text>
                    </Row>
                    <Row className="items-center ml-[4px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[95%]">
                      <Img
                        src="images/img_vector_teal_401.svg"
                        className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] w-[6%]"
                        alt="Vector Two One"
                      />
                      <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                        Unlimited Roles & Permission
                      </Text>
                    </Row>
                    <Row className="ml-[4px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[80%]">
                      <Img
                        src="images/img_vector_teal_401.svg"
                        className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] mt-[1px] w-[8%]"
                        alt="Vector Three One"
                      />
                      <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                        1 Enterprise integration
                      </Text>
                    </Row>
                    <Row className="ml-[4px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[86%]">
                      <Img
                        src="images/img_vector_teal_401.svg"
                        className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] mt-[1px] w-[7%]"
                        alt="Vector Four One"
                      />
                      <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                        External API management
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Stack className="absolute bg-white_A700 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] inset-x-[0] mx-[auto] lg:px-[21px] xl:px-[24px] 2xl:px-[28px] 3xl:px-[33px] rounded-radius6 shadow-bs2 top-[0] 2xl:w-[100px] 3xl:w-[120px] lg:w-[77px] xl:w-[88px]">
                  <Img
                    src="images/img_checkmark.svg"
                    className="absolute lg:h-[32px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] inset-[0] justify-center m-[auto] lg:w-[31px] xl:w-[36px] 2xl:w-[41px] 3xl:w-[49px]"
                    alt="checkmark"
                  />
                </Stack>
              </Stack>
              <Stack className="lg:h-[509px] xl:h-[582px] 2xl:h-[655px] 3xl:h-[786px] w-[100%]">
                <Column className="absolute bg-white_A700 bottom-[0] items-center justify-center lg:p-[30px] xl:p-[34px] 2xl:p-[39px] 3xl:p-[46px] rounded-radius6 shadow-bs4 w-[100%]">
                  <Text className="font-bold lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[auto]">
                    Enterprise
                  </Text>
                  <Text className="font-bold lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-gray_900 w-[auto]">
                    <span className="text-gray_900 font-chivo">$120</span>
                    <span className="text-gray_900 font-chivo font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                      /month
                    </span>
                  </Text>
                  <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 text-center w-[82%]">
                    Suitable for Hyper-growth or Enterprise companies
                  </Text>
                  <Button
                    className="font-bold lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[58%]"
                    shape="RoundedBorder6"
                    size="md"
                    variant="FillTeal401"
                  >
                    Contact Sales
                  </Button>
                  <Column className="lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[99%]">
                    <Line className="bg-gray_200 h-[1px] w-[100%]" />
                    <Row className="ml-[3px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[75%]">
                      <Img
                        src="images/img_vector_teal_401.svg"
                        className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] mt-[1px] w-[8%]"
                        alt="Vector Three"
                      />
                      <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                        <span className="text-gray_900 font-chivo">
                          Every Thing in{" "}
                        </span>
                        <span className="text-gray_900 font-chivo font-bold">
                          Growth
                        </span>
                      </Text>
                    </Row>
                    <Row className="items-center ml-[3px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[87%]">
                      <Img
                        src="images/img_vector_teal_401.svg"
                        className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] w-[7%]"
                        alt="Vector One Two"
                      />
                      <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                        Advanced access controls
                      </Text>
                    </Row>
                    <Row className="items-center ml-[3px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[84%]">
                      <Img
                        src="images/img_vector_teal_401.svg"
                        className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] w-[7%]"
                        alt="Vector Two Two"
                      />
                      <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                        Dedicated SaaS solutions
                      </Text>
                    </Row>
                    <Row className="ml-[3px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[52%]">
                      <Img
                        src="images/img_vector_teal_401.svg"
                        className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] mt-[1px] w-[12%]"
                        alt="Vector Three Two"
                      />
                      <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                        24/7 Support{" "}
                      </Text>
                    </Row>
                    <Row className="items-center ml-[3px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[95%]">
                      <Img
                        src="images/img_vector_teal_401.svg"
                        className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] w-[6%]"
                        alt="Vector Four Two"
                      />
                      <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                        Dedicated customer success
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Stack className="absolute bg-white_A700 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] inset-x-[0] mx-[auto] lg:px-[21px] xl:px-[24px] 2xl:px-[28px] 3xl:px-[33px] rounded-radius6 shadow-bs2 top-[0] 2xl:w-[100px] 3xl:w-[120px] lg:w-[77px] xl:w-[88px]">
                  <Img
                    src="images/img_plus.svg"
                    className="absolute lg:h-[32px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] inset-[0] justify-center m-[auto] lg:w-[31px] xl:w-[36px] 2xl:w-[41px] 3xl:w-[49px]"
                    alt="plus"
                  />
                </Stack>
              </Stack>
            </List>
          </Column>
        </Stack>
        <Text className="font-bold 2xl:mt-[108px] 3xl:mt-[129px] lg:mt-[84px] xl:mt-[96px] lg:text-[34px] xl:text-[39px] 2xl:text-[44px] 3xl:text-[52px] text-gray_900 w-[auto]">
          Learn what you get in every plan
        </Text>
        <Text className="font-normal lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_600 text-center w-[33%]">
          <span className="text-bluegray_600 font-chivo">Get </span>
          <span className="text-teal_401 font-chivo font-bold">100+ </span>
          <span className="text-bluegray_600 font-chivo">
            features out of the box with Growthly integrated per-transaction
            pricing
          </span>
        </Text>
        <Grid className="xl:gap-[110px] 2xl:gap-[124px] 3xl:gap-[148px] lg:gap-[96px] grid grid-cols-3 lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[77%]">
          <Column className="lg:pb-[3px] xl:pb-[4px] 2xl:pb-[5px] 3xl:pb-[6px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] w-[100%]">
            <Img
              src="images/img_google.svg"
              className="common-pointer lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] ml-[4px] w-[14%]"
              onClick={googleSignIn}
              alt="google"
            />
            <Text className="font-bold lg:leading-[24px] xl:leading-[28px] 2xl:leading-[32px] 3xl:leading-[38px] lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[95%]">
              Monitoring analytics data and alert
            </Text>
            <Row className="items-center ml-[4px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[39%]">
              <Img
                src="images/img_vector_teal_401.svg"
                className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] w-[15%]"
                alt="Vector Four"
              />
              <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                Live view{" "}
              </Text>
            </Row>
            <Row className="items-center ml-[4px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[72%]">
              <Img
                src="images/img_vector_teal_401.svg"
                className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] w-[8%]"
                alt="Vector One Three"
              />
              <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                Custom dashboards
              </Text>
            </Row>
            <Row className="items-center ml-[4px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[65%]">
              <Img
                src="images/img_vector_teal_401.svg"
                className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] w-[9%]"
                alt="Vector Two Three"
              />
              <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                Alert Notifications
              </Text>
            </Row>
          </Column>
          <Column className="pr-[3px] py-[3px] w-[100%]">
            <Img
              src="images/img_volume_41X41.svg"
              className="lg:h-[32px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] ml-[3px] lg:w-[31px] xl:w-[36px] 2xl:w-[41px] 3xl:w-[49px]"
              alt="volume"
            />
            <Text className="font-bold lg:leading-[24px] xl:leading-[28px] 2xl:leading-[32px] 3xl:leading-[38px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[71%]">
              Data collection and tracking analytics
            </Text>
            <Row className="items-center ml-[4px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[55%]">
              <Img
                src="images/img_vector_teal_401.svg"
                className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] w-[10%]"
                alt="Vector Five"
              />
              <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                Data collection
              </Text>
            </Row>
            <Row className="ml-[4px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[46%]">
              <Img
                src="images/img_vector_teal_401.svg"
                className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] mt-[1px] w-[12%]"
                alt="Vector One Four"
              />
              <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                Data import
              </Text>
            </Row>
            <Row className="mb-[1px] ml-[4px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[48%]">
              <Img
                src="images/img_vector_teal_401.svg"
                className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] mt-[1px] w-[12%]"
                alt="Vector Two Four"
              />
              <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                Integrations
              </Text>
            </Row>
          </Column>
          <Column className="pb-[3px] pr-[3px] w-[100%]">
            <Img
              src="images/img_lock_41X35.svg"
              className="lg:h-[32px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] w-[12%]"
              alt="lock"
            />
            <Text className="font-bold lg:leading-[24px] xl:leading-[28px] 2xl:leading-[32px] 3xl:leading-[38px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[84%]">
              Customer security and privacy
            </Text>
            <Row className="ml-[4px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[44%]">
              <Img
                src="images/img_vector_teal_401.svg"
                className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] mt-[1px] w-[13%]"
                alt="Vector Six"
              />
              <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                Encryption
              </Text>
            </Row>
            <Row className="items-center ml-[4px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[90%]">
              <Img
                src="images/img_vector_teal_401.svg"
                className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] w-[6%]"
                alt="Vector One Five"
              />
              <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                Two-Factor Authentication
              </Text>
            </Row>
            <Row className="ml-[4px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[57%]">
              <Img
                src="images/img_vector_teal_401.svg"
                className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] mt-[1px] w-[10%]"
                alt="Vector Two Five"
              />
              <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                User device log{" "}
              </Text>
            </Row>
          </Column>
          <Column className="pb-[3px] pr-[3px] w-[100%]">
            <Img
              src="images/img_volume_2.svg"
              className="lg:h-[32px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] ml-[4px] lg:w-[31px] xl:w-[36px] 2xl:w-[41px] 3xl:w-[49px]"
              alt="volume One"
            />
            <Text className="font-bold lg:leading-[24px] xl:leading-[28px] 2xl:leading-[32px] 3xl:leading-[38px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[87%]">
              Reporting and analytics sales data
            </Text>
            <Row className="items-center ml-[4px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[66%]">
              <Img
                src="images/img_vector_teal_401.svg"
                className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] w-[9%]"
                alt="Vector Seven"
              />
              <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                Customer records
              </Text>
            </Row>
            <Row className="ml-[4px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[89%]">
              <Img
                src="images/img_vector_teal_401.svg"
                className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] mt-[1px] w-[6%]"
                alt="Vector One Six"
              />
              <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                Core subscription metrics{" "}
              </Text>
            </Row>
            <Row className="ml-[4px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[57%]">
              <Img
                src="images/img_vector_teal_401.svg"
                className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] mt-[1px] w-[10%]"
                alt="Vector Two Six"
              />
              <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                Refund reports
              </Text>
            </Row>
          </Column>
          <Column className="pr-[2px] py-[2px] w-[100%]">
            <Img
              src="images/img_map_45X41.svg"
              className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] ml-[4px] w-[14%]"
              alt="map"
            />
            <Text className="font-bold lg:leading-[24px] xl:leading-[28px] 2xl:leading-[32px] 3xl:leading-[38px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[98%]">
              Integration with any social media
            </Text>
            <Row className="ml-[4px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[76%]">
              <Img
                src="images/img_vector_teal_401.svg"
                className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] mt-[1px] w-[7%]"
                alt="Vector Eight"
              />
              <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                Advertising platforms{" "}
              </Text>
            </Row>
            <Row className="ml-[4px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[86%]">
              <Img
                src="images/img_vector_teal_401.svg"
                className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] mt-[1px] w-[7%]"
                alt="Vector One Seven"
              />
              <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                Customer data platforms{" "}
              </Text>
            </Row>
            <Row className="mb-[1px] ml-[4px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[62%]">
              <Img
                src="images/img_vector_teal_401.svg"
                className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] mt-[1px] w-[9%]"
                alt="Vector Two Seven"
              />
              <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                Data governance
              </Text>
            </Row>
          </Column>
          <Column className="pb-[3px] pr-[3px] w-[100%]">
            <Stack className="bg-teal_401 lg:h-[32px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] rounded-radius10 w-[13%]">
              <Img
                src="images/img_menu.svg"
                className="absolute lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] inset-[0] justify-center m-[auto] w-[51%]"
                alt="menu"
              />
            </Stack>
            <Text className="font-bold lg:leading-[24px] xl:leading-[28px] 2xl:leading-[32px] 3xl:leading-[38px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[94%]">
              Task and activity tracking for dashboard
            </Text>
            <Row className="ml-[4px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[73%]">
              <Img
                src="images/img_vector_teal_401.svg"
                className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] mt-[1px] w-[8%]"
                alt="Vector Nine"
              />
              <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                Calendar integration
              </Text>
            </Row>
            <Row className="items-center ml-[4px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[61%]">
              <Img
                src="images/img_vector_teal_401.svg"
                className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] w-[9%]"
                alt="Vector One Eight"
              />
              <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                Task automation
              </Text>
            </Row>
            <Row className="ml-[4px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[86%]">
              <Img
                src="images/img_vector_teal_401.svg"
                className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] mt-[1px] w-[7%]"
                alt="Vector Two Eight"
              />
              <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                Task appointment setting
              </Text>
            </Row>
          </Column>
        </Grid>
        <Text className="font-bold lg:mt-[112px] xl:mt-[128px] 2xl:mt-[145px] 3xl:mt-[174px] lg:text-[34px] xl:text-[39px] 2xl:text-[44px] 3xl:text-[52px] text-gray_900 w-[auto]">
          Frequently Asked Question
        </Text>
        <Accordion
          preExpanded={[0]}
          className="lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[64%]"
        >
          {" "}
          {[...Array(6)].map((item, index) => (
            <AccordionItem uuid={index} key={Math.random()}>
              <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[100%]">
                <AccordionItemHeading className="w-full">
                  <AccordionItemButton>
                    <AccordionItemState>
                      {({ expanded }) => (
                        <Row className="justify-between mt-[1px] w-[100%]">
                          <Text className="font-bold lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-teal_401 w-[auto]">
                            How secure is my data?
                          </Text>
                          {expanded && (
                            <Img
                              src="images/img_vector_teal_401_2X14.svg"
                              className="xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] mt-[4px] w-[2%]"
                              alt="Vector Ten"
                            />
                          )}
                          {!expanded && (
                            <Img
                              src="images/img_plus_14X14.svg"
                              className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] mr-[1px] mt-[1px] lg:w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px]"
                              alt="plus One"
                            />
                          )}
                        </Row>
                      )}
                    </AccordionItemState>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="w-full">
                  <Column className="items-center lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[40px] ml-[1px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[77%]">
                    <Text className="font-normal lg:leading-[21px] xl:leading-[24px] 2xl:leading-[28px] 3xl:leading-[33px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[100%]">
                      We monitor our systems and code 24/7/365 with both
                      automated tools and our experienced staff to prevent and
                      eliminate attacks on our service and to protect our
                      customers’ data.
                    </Text>
                  </Column>
                </AccordionItemPanel>
              </Column>
              <Line className="self-center w-[100%] h-[1px] bg-bluegray_200" />
            </AccordionItem>
          ))}
        </Accordion>
        <Stack className="lg:h-[249px] xl:h-[285px] 2xl:h-[321px] 3xl:h-[385px] 3xl:mt-[118px] lg:mt-[77px] xl:mt-[88px] 2xl:mt-[99px] w-[77%]">
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
              The fastest and simple way to generate growing business solutions
              with our products
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
                onClick={handleNavigate3}
                alt="twitter"
              />
              <Img
                src="images/img_vector_22X22.svg"
                className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] mb-[1px] lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] lg:w-[17px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]"
                alt="Vector Eleven"
              />
            </Row>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default PricingPage;
