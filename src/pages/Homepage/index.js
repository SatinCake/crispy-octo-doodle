import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Input,
  Stack,
  Line,
  List,
} from "components";

const HomepagePage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
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
          <Row className="justify-evenly 3xl:mt-[102px] lg:mt-[66px] xl:mt-[75px] 2xl:mt-[85px] 3xl:pt-[10px] lg:pt-[7px] xl:pt-[8px] 2xl:pt-[9px] w-[100%]">
            <Column className="w-[50%]">
              <Text className="font-bold lg:leading-[45px] xl:leading-[51px] 2xl:leading-[58px] 3xl:leading-[69px] lg:text-[40px] xl:text-[46px] 2xl:text-[52px] 3xl:text-[62px] text-gray_900 w-[96%]">
                We help any business to get analytics and sales marketing
              </Text>
              <Text className="font-normal lg:leading-[21px] xl:leading-[24px] 2xl:leading-[28px] 3xl:leading-[33px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[72%]">
                The fastest and simple way to generate growing business
                solutions with our products
              </Text>
              <Row className="bg-gray_50 border border-solid border-teal_400 items-center justify-end lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius6 w-[86%]">
                <Input
                  className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                  wrapClassName="w-[60%]"
                  type="email"
                  name="box"
                  placeholder="Your business email"
                  size="sm"
                  variant="FillGray50"
                ></Input>
                <Button
                  className="font-bold lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] my-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[32%]"
                  shape="RoundedBorder6"
                  size="md"
                  variant="FillTeal400"
                >
                  Get Started
                </Button>
              </Row>
              <Text className="font-normal italic lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                *we will not disseminate your email and so you avoid spam
              </Text>
              <Row className="items-center lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] pr-[4px] py-[4px] w-[69%]">
                <Column className="my-[1px] w-[58%]">
                  <Text className="font-bold lg:text-[34px] xl:text-[39px] 2xl:text-[44px] 3xl:text-[52px] text-gray_900 w-[auto]">
                    350+
                  </Text>
                  <Text className="font-normal lg:leading-[21px] xl:leading-[24px] 2xl:leading-[28px] 3xl:leading-[33px] ml-[1px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[72%]">
                    Over 500 business powered with us
                  </Text>
                </Column>
                <Column className="my-[1px] w-[41%]">
                  <Text className="font-bold lg:text-[34px] xl:text-[39px] 2xl:text-[44px] 3xl:text-[52px] text-gray_900 w-[auto]">
                    4.8
                  </Text>
                  <Text className="font-normal lg:leading-[21px] xl:leading-[24px] 2xl:leading-[28px] 3xl:leading-[33px] ml-[1px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[99%]">
                    Rating on google play and app store
                  </Text>
                </Column>
              </Row>
            </Column>
            <Stack className="lg:h-[338px] xl:h-[387px] 2xl:h-[435px] 3xl:h-[522px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[50%]">
              <Stack className="absolute lg:h-[337px] xl:h-[386px] 2xl:h-[434px] 3xl:h-[520px] inset-y-[0] my-[auto] right-[0] w-[85%]">
                <Stack className="absolute lg:h-[333px] xl:h-[380px] 2xl:h-[428px] 3xl:h-[513px] top-[1%] w-[100%]">
                  <Img
                    src="images/img_group10.svg"
                    className="absolute lg:h-[333px] xl:h-[380px] 2xl:h-[428px] 3xl:h-[513px] right-[0] w-[71%]"
                    alt="GroupTen"
                  />
                  <Row className="absolute left-[0] top-[7%] w-[37%]">
                    <Column className="bg-white_A700 justify-end 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] shadow-bs3 w-[77%]">
                      <Column
                        className="bg-cover bg-repeat items-center justify-end mt-[2px] lg:p-[21px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] w-[99%]"
                        style={{
                          backgroundImage: "url('images/img_group104.png')",
                        }}
                      >
                        <Button
                          className="flex lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] items-center justify-center mt-[1px] lg:w-[14px] xl:w-[16px] 2xl:w-[19px] 3xl:w-[22px]"
                          shape="icbRoundedBorder9"
                          size="smIcn"
                          variant="icbFillDeeporange300"
                        >
                          <Img
                            src="images/img_polygon20.svg"
                            className="flex items-center justify-center lg:h-[7px] xl:h-[8px] 2xl:h-[9px] 3xl:h-[10px]"
                            alt="PolygonTwenty"
                          />
                        </Button>
                      </Column>
                      <Stack className="lg:h-[32px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[71%]">
                        <Column className="absolute bottom-[5%] left-[0] w-[89%]">
                          <div className="bg-gray_300 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] w-[51%]"></div>
                          <div className="bg-bluegray_50 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] mt-[4px] w-[100%]"></div>
                        </Column>
                        <Img
                          src="images/img_car.svg"
                          className="absolute lg:h-[32px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] left-[1%] w-[99%]"
                          alt="car"
                        />
                      </Stack>
                      <div className="bg-blue_50 lg:h-[18px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[99%]"></div>
                    </Column>
                    <Img
                      src="images/img_group1.svg"
                      className="3xl:h-[101px] lg:h-[66px] xl:h-[75px] 2xl:h-[85px] 3xl:mt-[100px] lg:mt-[65px] xl:mt-[74px] 2xl:mt-[84px] w-[23%]"
                      alt="GroupOne"
                    />
                  </Row>
                </Stack>
                <Img
                  src="images/img_group95.svg"
                  className="absolute bottom-[15%] lg:h-[108px] xl:h-[123px] 2xl:h-[139px] 3xl:h-[166px] left-[21%] w-[7%]"
                  alt="GroupNinetyFive"
                />
                <Img
                  src="images/img_image58.png"
                  className="absolute lg:h-[284px] xl:h-[324px] 2xl:h-[365px] 3xl:h-[438px] right-[14%] top-[0] w-[57%]"
                  alt="imageFiftyEight"
                />
              </Stack>
              <Stack className="absolute bottom-[22%] lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] right-[0] w-[40%]">
                <Stack className="absolute lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] w-[100%]">
                  <div className="absolute backdrop-opacity-[0.5] bg-gray_600_6c blur-[74.00px] bottom-[0] lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius10 w-[100%]"></div>
                  <div className="absolute bg-white_A700 lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] top-[0] w-[100%]"></div>
                </Stack>
                <Row className="absolute bottom-[1%] inset-x-[0] justify-between mx-[auto] pb-[1px] w-[90%]">
                  <Img
                    src="images/img_ellipse15.png"
                    className="lg:h-[30px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] rounded-radius50 lg:w-[29px] xl:w-[33px] 2xl:w-[38px] 3xl:w-[45px]"
                    alt="EllipseFifteen"
                  />
                  <Img
                    src="images/img_group472.svg"
                    className="lg:h-[41px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[63px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[76%]"
                    alt="Group472"
                  />
                </Row>
              </Stack>
              <Img
                src="images/img_line.svg"
                className="absolute bottom-[6%] lg:h-[22px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] left-[25%] w-[18%]"
                alt="Line"
              />
              <Img
                src="images/img_50.svg"
                className="absolute bottom-[29%] lg:h-[37px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] left-[0] w-[19%]"
                alt="Fifty"
              />
            </Stack>
          </Row>
          <Row className="items-center 3xl:mt-[117px] lg:mt-[76px] xl:mt-[87px] 2xl:mt-[98px] w-[96%]">
            <Img
              src="images/img_microsoft1.svg"
              className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] w-[13%]"
              alt="MicrosoftOne"
            />
            <Img
              src="images/img_vector_teal_200.svg"
              className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[50px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[11%]"
              alt="Vector One"
            />
            <Img
              src="images/img_trash.svg"
              className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] 2xl:ml-[101px] 3xl:ml-[121px] lg:ml-[78px] xl:ml-[89px] w-[6%]"
              alt="trash"
            />
            <Img
              src="images/img_shopify.svg"
              className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] 3xl:ml-[115px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] w-[11%]"
              alt="Shopify"
            />
            <Img
              src="images/img_group_teal_200.svg"
              className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] lg:ml-[49px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] w-[13%]"
              alt="Group"
            />
            <Img
              src="images/img_intel.svg"
              className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] 3xl:ml-[105px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[88px] w-[7%]"
              alt="Intel"
            />
          </Row>
          <Text className="font-bold lg:leading-[42px] xl:leading-[48px] 2xl:leading-[54px] 3xl:leading-[64px] 2xl:mt-[111px] 3xl:mt-[133px] lg:mt-[86px] xl:mt-[98px] lg:text-[34px] xl:text-[39px] 2xl:text-[44px] 3xl:text-[52px] text-center text-gray_900 w-[39%]">
            How our platform process easy to use?
          </Text>
          <Row className="items-end justify-end lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] pb-[4px] pl-[4px] w-[100%]">
            <Column className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[23%]">
              <Column className="bg-teal_400 items-center 2xl:ml-[103px] 3xl:ml-[123px] lg:ml-[80px] xl:ml-[91px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius6 shadow-bs2 w-[38%]">
                <Line className="bg-white_A700 h-[6px] my-[2px] rounded-radius3 w-[100%]" />
              </Column>
              <Stack className="lg:h-[100px] xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[74%]">
                <Column className="absolute bg-white_A700 left-[0] lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius8 shadow-bs4 w-[90%]">
                  <Button
                    className="flex lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    shape="icbRoundedBorder6"
                    size="lgIcn"
                    variant="icbFillAmber300"
                  >
                    <Img
                      src="images/img_user.svg"
                      className="flex items-center justify-center"
                      alt="user"
                    />
                  </Button>
                  <Column className="bg-white_A700 items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] 3xl:p-[10px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius6 shadow-bs2 w-[74%]">
                    <Line className="bg-bluegray_200 h-[6px] my-[3px] rounded-radius3 w-[100%]" />
                  </Column>
                </Column>
                <Button
                  className="absolute bottom-[9%] flex lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center right-[0] lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                  shape="icbRoundedBorder6"
                  size="xlIcn"
                  variant="icbFillTeal400"
                >
                  <Img
                    src="images/img_volume.svg"
                    className="flex items-center justify-center"
                    alt="volume"
                  />
                </Button>
                <Column className="absolute bg-white_A700 items-center 3xl:p-[10px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] right-[4%] rounded-radius6 shadow-bs2 top-[16%] w-[51%]">
                  <Line className="bg-bluegray_200 h-[6px] my-[3px] rounded-radius3 w-[100%]" />
                </Column>
              </Stack>
              <Column className="items-center lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[89%]">
                <Text className="font-bold lg:leading-[24px] xl:leading-[28px] 2xl:leading-[32px] 3xl:leading-[38px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-gray_900 w-[100%]">
                  Login or sign up to be able use our platform
                </Text>
                <Text className="font-normal lg:leading-[21px] xl:leading-[24px] 2xl:leading-[28px] 3xl:leading-[33px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 text-center w-[99%]">
                  You must log in first to be able to use our platform to get
                  your product analytics
                </Text>
              </Column>
            </Column>
            <Img
              src="images/img_directionline.svg"
              className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:mb-[180px] xl:mb-[206px] 2xl:mb-[232px] 3xl:mb-[278px] 2xl:mt-[111px] 3xl:mt-[133px] lg:mt-[86px] xl:mt-[98px] w-[14%]"
              alt="DirectionLine"
            />
            <Column className="items-center mb-[1px] lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[22%]">
              <Stack className="lg:h-[132px] xl:h-[151px] 2xl:h-[170px] 3xl:h-[203px] w-[76%]">
                <Column className="absolute bg-white_A700 bottom-[0] left-[0] lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius6 shadow-bs4 w-[93%]">
                  <Row className="items-center ml-[1px] w-[77%]">
                    <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                      12,62
                    </Text>
                    <Button
                      className="flex lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                      shape="icbRoundedBorder6"
                      size="lgIcn"
                      variant="icbOutlineIndigo9000c"
                    >
                      <Img
                        src="images/img_grid.svg"
                        className="flex items-center justify-center lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px]"
                        alt="grid"
                      />
                    </Button>
                  </Row>
                  <Line className="bg-bluegray_200 h-[6px] ml-[1px] rounded-radius3 w-[49%]" />
                  <Line className="bg-bluegray_200 h-[6px] ml-[1px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rounded-radius3 w-[49%]" />
                  <div className="bg-teal_400 lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] ml-[1px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] rounded-radius6 w-[98%]"></div>
                </Column>
                <Button
                  className="absolute flex lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center right-[34%] top-[0] lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                  shape="icbRoundedBorder6"
                  size="lgIcn"
                  variant="icbOutlineIndigo9000c"
                >
                  <Img
                    src="images/img_group74.svg"
                    className="flex items-center justify-center"
                    alt="GroupSeventyFour"
                  />
                </Button>
                <Button
                  className="absolute flex lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] items-center justify-center right-[9%] top-[9%] lg:w-[27px] xl:w-[31px] 2xl:w-[35px] 3xl:w-[42px]"
                  shape="icbRoundedBorder6"
                  size="mdIcn"
                  variant="icbOutlineIndigo9000c"
                >
                  <Img
                    src="images/img_grid_35X35.svg"
                    className="flex items-center justify-center lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                    alt="grid One"
                  />
                </Button>
                <Button
                  className="absolute bottom-[33%] flex lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center right-[0] lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                  shape="icbRoundedBorder6"
                  size="lgIcn"
                  variant="icbOutlineIndigo9000c"
                >
                  <Img
                    src="images/img_group105.png"
                    className="flex items-center justify-center"
                    alt="Group105"
                  />
                </Button>
              </Stack>
              <Text className="font-bold lg:leading-[24px] xl:leading-[28px] 2xl:leading-[32px] 3xl:leading-[38px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-gray_900 w-[95%]">
                Connect your website with just a few click
              </Text>
              <Text className="font-normal lg:leading-[21px] xl:leading-[24px] 2xl:leading-[28px] 3xl:leading-[33px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 text-center w-[100%]">
                Select the application you wanted to be able to connect with
                just a few clicks
              </Text>
            </Column>
            <Img
              src="images/img_directionline.svg"
              className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:mb-[178px] xl:mb-[203px] 2xl:mb-[229px] 3xl:mb-[274px] lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] xl:mt-[101px] 2xl:mt-[114px] 3xl:mt-[136px] lg:mt-[88px] w-[14%]"
              alt="DirectionLine One"
            />
            <Column className="items-center justify-end mb-[1px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] w-[22%]">
              <Stack className="lg:h-[122px] xl:h-[139px] 2xl:h-[157px] 3xl:h-[188px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[81%]">
                <Stack
                  className="absolute bg-cover bg-repeat bottom-[0] lg:h-[100px] xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] px-[2px] right-[0] w-[89%]"
                  style={{ backgroundImage: "url('images/img_group88.svg')" }}
                >
                  <Img
                    src="images/img_polygon2.svg"
                    className="absolute 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] right-[14%] rounded-radius2 top-[25%] w-[14%]"
                    alt="PolygonTwo"
                  />
                  <Column className="absolute bg-teal_400 lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] right-[0] rounded-radius4 top-[3%] w-[41%]">
                    <Row className="justify-between ml-[2px] w-[93%]">
                      <Text className="font-normal mb-[2px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]">
                        40%
                      </Text>
                      <Button
                        className="flex lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] items-center justify-center mt-[3px] lg:w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px]"
                        shape="icbRoundedBorder6"
                        size="smIcn"
                        variant="icbFillWhiteA700"
                      >
                        <Img
                          src="images/img_polygon2_teal_400.svg"
                          className="flex items-center justify-center"
                          alt="PolygonTwo One"
                        />
                      </Button>
                    </Row>
                    <div className="bg-white_A700_7e xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] ml-[2px] my-[1px] rounded-radius15 w-[48%]"></div>
                  </Column>
                </Stack>
                <Img
                  src="images/img_folder.svg"
                  className="absolute lg:h-[46px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] left-[0] top-[0] w-[38%]"
                  alt="folder"
                />
                <Stack className="absolute lg:h-[122px] xl:h-[139px] 2xl:h-[157px] 3xl:h-[188px] w-[100%]">
                  <Stack
                    className="absolute bg-cover bg-repeat bottom-[0] lg:h-[100px] xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] px-[2px] right-[0] w-[89%]"
                    style={{ backgroundImage: "url('images/img_group88.svg')" }}
                  >
                    <Img
                      src="images/img_polygon2.svg"
                      className="absolute 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] right-[14%] rounded-radius2 top-[25%] w-[14%]"
                      alt="PolygonTwo Two"
                    />
                    <Column className="absolute bg-teal_400 lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] right-[0] rounded-radius4 top-[3%] w-[41%]">
                      <Row className="justify-between ml-[2px] w-[93%]">
                        <Text className="font-normal mb-[2px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]">
                          40%
                        </Text>
                        <Button
                          className="flex lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] items-center justify-center mt-[3px] lg:w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px]"
                          shape="icbRoundedBorder6"
                          size="smIcn"
                          variant="icbFillWhiteA700"
                        >
                          <Img
                            src="images/img_polygon2_teal_400.svg"
                            className="flex items-center justify-center"
                            alt="PolygonTwo Three"
                          />
                        </Button>
                      </Row>
                      <div className="bg-white_A700_7e xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] ml-[2px] my-[1px] rounded-radius15 w-[48%]"></div>
                    </Column>
                  </Stack>
                  <Img
                    src="images/img_folder.svg"
                    className="absolute lg:h-[46px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] left-[0] top-[0] w-[38%]"
                    alt="folder One"
                  />
                </Stack>
              </Stack>
              <Text className="font-bold lg:leading-[24px] xl:leading-[28px] 2xl:leading-[32px] 3xl:leading-[38px] lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-gray_900 w-[95%]">
                Take some sales data that you want
              </Text>
              <Text className="font-normal lg:leading-[21px] xl:leading-[24px] 2xl:leading-[28px] 3xl:leading-[33px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 text-center w-[99%]">
                You already have sales data of your product with some variants
                you want
              </Text>
            </Column>
          </Row>
        </Column>
        <Column className="items-center 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[77px] xl:mt-[88px] w-[100%]">
          <Row className="bg-teal_401 lg:p-[31px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] w-[100%]">
            <Column className="xl:ml-[111px] 2xl:ml-[125px] 3xl:ml-[150px] lg:ml-[97px] lg:mt-[48px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[46%]">
              <Row className="items-end w-[75%]">
                <Column className="items-center mb-[1px] w-[46%]">
                  <Button
                    className="flex items-center justify-center text-center w-[50%]"
                    leftIcon={
                      <Img
                        src="images/img_vector_18X19.svg"
                        className="text-center lg:w-[14px] lg:mr-[4px] xl:w-[16px] xl:mr-[5px] 2xl:w-[19px] 2xl:mr-[6px] 3xl:w-[22px] 3xl:mr-[7px]"
                        alt="Vector"
                      />
                    }
                    shape="RoundedBorder6"
                    size="md"
                    variant="OutlineGray90014"
                  >
                    <div className="bg-transparent font-bold lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]">
                      4,8
                    </div>
                  </Button>
                  <Column className="bg-white_A700 items-center justify-end lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius6 shadow-bs4 w-[85%]">
                    <Text className="font-bold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[34px] xl:text-[39px] 2xl:text-[44px] 3xl:text-[52px] text-teal_401 w-[auto]">
                      76.8%
                    </Text>
                    <Text className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-teal_401 w-[auto]">
                      Engagement
                    </Text>
                    <Row className="justify-center lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[53%]">
                      <Img
                        src="images/img_polygon2_bluegray_700.svg"
                        className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] mt-[3px] w-[15%]"
                        alt="PolygonTwo Four"
                      />
                      <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                        18,21%
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-white_A700 justify-end lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius6 shadow-bs4 w-[54%]">
                  <Text className="font-bold ml-[4px] mt-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-teal_401 w-[auto]">
                    Data Analytics
                  </Text>
                  <Img
                    src="images/img_group152.svg"
                    className="lg:h-[106px] xl:h-[121px] 2xl:h-[137px] 3xl:h-[164px] ml-[4px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[96%]"
                    alt="Group152"
                  />
                </Column>
              </Row>
              <Row className="lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[82%]">
                <Row className="bg-white_A700 items-end lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius6 shadow-bs4 w-[75%]">
                  <Column className="mb-[1px] ml-[1px] w-[53%]">
                    <Text className="font-bold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-teal_401 w-[auto]">
                      New Subscribers
                    </Text>
                    <Text className="font-bold lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-teal_401 w-[auto]">
                      +4201
                    </Text>
                    <Row className="ml-[2px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[65%]">
                      <Img
                        src="images/img_polygon2_bluegray_700.svg"
                        className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] mt-[1px] w-[8%]"
                        alt="PolygonTwo Five"
                      />
                      <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                        32% this month
                      </Text>
                    </Row>
                  </Column>
                  <Img
                    src="images/img_group154.svg"
                    className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] mb-[4px] lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[46%]"
                    alt="Group154"
                  />
                </Row>
                <Img
                  src="images/img_illustrations.svg"
                  className="3xl:h-[106px] lg:h-[69px] xl:h-[79px] 2xl:h-[89px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[23%]"
                  alt="Illustrations"
                />
              </Row>
            </Column>
            <Column className="lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] pb-[4px] pr-[4px] w-[35%]">
              <Text className="font-bold lg:leading-[42px] xl:leading-[48px] 2xl:leading-[54px] 3xl:leading-[64px] ml-[1px] lg:text-[34px] xl:text-[39px] 2xl:text-[44px] 3xl:text-[52px] text-white_A700 w-[98%]">
                The reasons to prefer choosing our platform
              </Text>
              <Text className="font-normal lg:leading-[21px] xl:leading-[24px] 2xl:leading-[28px] 3xl:leading-[33px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[78%]">
                Seamless integration of more than 20+ apps that can help
                analytics your product
              </Text>
              <Row className="items-center justify-evenly lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[99%]">
                <Column className="mb-[2px] pr-[3px] pt-[3px] w-[55%]">
                  <Img
                    src="images/img_volume_33X33.svg"
                    className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] ml-[3px] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
                    alt="volume One"
                  />
                  <Text className="font-bold lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-white_A700 w-[auto]">
                    Real time data
                  </Text>
                  <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[71%]">
                    Get the data you need to make smarter decisions.
                  </Text>
                </Column>
                <Column className="mt-[2px] w-[45%]">
                  <Img
                    src="images/img_location.svg"
                    className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] ml-[3px] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
                    alt="location"
                  />
                  <Text className="font-bold ml-[1px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-white_A700 w-[auto]">
                    Fast and Easy to use
                  </Text>
                  <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[89%]">
                    Easily to convert API with just a few clicks
                  </Text>
                </Column>
              </Row>
              <Row className="items-center lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[88%]">
                <Column className="w-[62%]">
                  <Img
                    src="images/img_lock.svg"
                    className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[11%]"
                    alt="lock"
                  />
                  <Column className="lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[62%]">
                    <Text className="font-bold lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-white_A700 w-[auto]">
                      Safely Security
                    </Text>
                    <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[93%]">
                      All customer data is encrypted
                    </Text>
                  </Column>
                </Column>
                <Column className="w-[38%]">
                  <Img
                    src="images/img_grid_33X33.svg"
                    className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] ml-[3px] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
                    alt="grid Two"
                  />
                  <Text className="font-bold lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-white_A700 w-[auto]">
                    Powerfull App
                  </Text>
                  <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[100%]">
                    Provide simple and minimalist dashboard
                  </Text>
                </Column>
              </Row>
            </Column>
          </Row>
          <Row className="items-center 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[77px] xl:mt-[88px] w-[77%]">
            <Column className="pb-[3px] pr-[3px] w-[52%]">
              <Text className="font-bold lg:leading-[42px] xl:leading-[48px] 2xl:leading-[54px] 3xl:leading-[64px] lg:text-[34px] xl:text-[39px] 2xl:text-[44px] 3xl:text-[52px] text-gray_900 w-[75%]">
                We provide features for your product
              </Text>
              <Column className="bg-white_A700 justify-end lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius12 shadow-bs4 w-[84%]">
                <Row className="items-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mr-[auto] mt-[1px] w-[83%]">
                  <Img
                    src="images/img_map.svg"
                    className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] w-[9%]"
                    alt="map"
                  />
                  <Text className="font-bold lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[auto]">
                    Integrated with Social Media
                  </Text>
                </Row>
                <Column className="lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] lg:mr-[26px] xl:mr-[30px] 2xl:mr-[34px] 3xl:mr-[40px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[77%]">
                  <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[100%]">
                    Seamless integration of more than 20+ apps that can help
                    analytics
                  </Text>
                  <Text className="font-bold lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-teal_400 underline w-[auto]">
                    Learn More
                  </Text>
                </Column>
              </Column>
              <Row className="items-end lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] pl-[2px] py-[2px] w-[50%]">
                <Button
                  className="flex lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] items-center justify-center ml-[1px] my-[1px] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
                  size="smIcn"
                  variant="icbFillTeal400"
                >
                  <Img
                    src="images/img_minimize.svg"
                    className="flex items-center justify-center"
                    alt="minimize"
                  />
                </Button>
                <Text className="font-bold lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_200 w-[auto]">
                  Always in syncronized
                </Text>
              </Row>
              <Row className="items-end lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[39%]">
                <Img
                  src="images/img_volume_1.svg"
                  className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] mb-[1px] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
                  alt="volume Two"
                />
                <Text className="font-bold lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_200 w-[auto]">
                  Powerful report
                </Text>
              </Row>
            </Column>
            <Column
              className="bg-cover bg-repeat lg:pr-[167px] xl:pr-[191px] 2xl:pr-[215px] 3xl:pr-[258px] lg:py-[167px] xl:py-[191px] 2xl:py-[215px] 3xl:py-[258px] w-[48%]"
              style={{ backgroundImage: "url('images/img_group101.svg')" }}
            >
              <Button
                className="flex lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] items-center justify-center lg:mb-[37px] xl:mb-[42px] 2xl:mb-[48px] 3xl:mb-[57px] lg:w-[54px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                shape="icbRoundedBorder6"
                size="2xlIcn"
                variant="icbOutlineIndigo9000c"
              >
                <Img
                  src="images/img_group.svg"
                  className="flex items-center justify-center lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px]"
                  alt="Group One"
                />
              </Button>
            </Column>
          </Row>
          <Text className="font-normal 2xl:mt-[104px] 3xl:mt-[124px] lg:mt-[80px] xl:mt-[92px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-yellow_700 w-[auto]">
            Global Scale
          </Text>
          <Text className="font-bold lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[34px] xl:text-[39px] 2xl:text-[44px] 3xl:text-[52px] text-gray_900 w-[auto]">
            Trusted by company around the world
          </Text>
          <Img
            src="images/img_illustrationma.svg"
            className="lg:h-[288px] xl:h-[330px] 2xl:h-[371px] 3xl:h-[445px] lg:mt-[45px] xl:mt-[52px] 2xl:mt-[59px] 3xl:mt-[70px] w-[77%]"
            alt="IllustrationMa"
          />
          <Row className="items-center lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] pr-[4px] py-[4px] w-[77%]">
            <Column className="w-[26%]">
              <Text className="font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-gray_900 w-[auto]">
                350+
              </Text>
              <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[76%]">
                Over 500k business powered with us
              </Text>
            </Column>
            <Column className="w-[26%]">
              <Text className="font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-gray_900 w-[auto]">
                750k
              </Text>
              <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[70%]">
                Users used our platform in around the world
              </Text>
            </Column>
            <Column className="w-[26%]">
              <Text className="font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-gray_900 w-[auto]">
                4.8{" "}
              </Text>
              <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[77%]">
                Rating on google play and app store
              </Text>
            </Column>
            <Column className="mt-[1px] w-[20%]">
              <Text className="font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-gray_900 w-[auto]">
                24+
              </Text>
              <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[100%]">
                More than 30 countries trust our platform
              </Text>
            </Column>
          </Row>
          <Text className="font-bold lg:leading-[42px] xl:leading-[48px] 2xl:leading-[54px] 3xl:leading-[64px] 2xl:mt-[110px] 3xl:mt-[132px] lg:mt-[85px] xl:mt-[97px] lg:text-[34px] xl:text-[39px] 2xl:text-[44px] 3xl:text-[52px] text-center text-gray_900 w-[36%]">
            See what our customers have to say about us
          </Text>
          <List
            className="lg:gap-[31px] xl:gap-[35px] 2xl:gap-[40px] 3xl:gap-[48px] grid grid-cols-3 min-h-[auto] lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] w-[77%]"
            orientation="horizontal"
          >
            <Column className="bg-gray_50 lg:p-[24px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius6 w-[100%]">
              <Img
                src="images/img_vector_deep_orange_A400.svg"
                className="lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[37%]"
                alt="Vector Three"
              />
              <Text className="font-normal italic leading-[150.00%] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[89%]">
                “I’ve used Growthly at many companies before—it’s the go-to
                solution when you need user and product analytics.”
              </Text>
              <Row className="items-center 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[72%]">
                <Img
                  src="images/img_ellipse1905.png"
                  className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                  alt="Ellipse1905"
                />
                <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[67%]">
                  <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    Try Washington
                  </Text>
                  <Text className="font-normal lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                    CEO of Netflix
                  </Text>
                </Column>
              </Row>
            </Column>
            <Column className="bg-gray_50 lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius6 w-[100%]">
              <Img
                src="images/img_microsoft.svg"
                className="lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] ml-[1px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[44%]"
                alt="Microsoft"
              />
              <Text className="font-normal italic leading-[150.00%] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[94%]">
                “Uses Growthly as the source of truth for all its product data,
                and to determine where the team should focus its time.”
              </Text>
              <Row className="items-end lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] ml-[1px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] pb-[3px] w-[76%]">
                <Img
                  src="images/img_ellipse1906.png"
                  className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                  alt="Ellipse1906"
                />
                <Column className="mb-[1px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[69%]">
                  <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    Cyhntya Rebecca
                  </Text>
                  <Text className="font-normal mt-[4px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                    CEO of Microsoft
                  </Text>
                </Column>
              </Row>
            </Column>
            <Column className="bg-gray_50 lg:p-[24px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius6 w-[100%]">
              <Img
                src="images/img_shopify_30X106.svg"
                className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[38%]"
                alt="Shopify One"
              />
              <Text className="font-normal italic leading-[150.00%] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[96%]">
                “Uses Growthly to get deeper user insights that could be easily
                shared among teams throughout the world, improving the company
                investment.”{" "}
              </Text>
              <Row className="items-center 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[76%]">
                <Img
                  src="images/img_ellipse1907.png"
                  className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                  alt="Ellipse1907"
                />
                <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[69%]">
                  <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    Derry Alasca
                  </Text>
                  <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                    Manager of Shopify
                  </Text>
                </Column>
              </Row>
            </Column>
          </List>
          <Stack className="lg:h-[249px] xl:h-[285px] 2xl:h-[321px] 3xl:h-[385px] 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[77px] xl:mt-[88px] w-[77%]">
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
                  name="box One"
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
                      alt="grid Three"
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
                  onClick={handleNavigate1}
                  alt="twitter"
                />
                <Img
                  src="images/img_vector_22X22.svg"
                  className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] mb-[1px] lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] lg:w-[17px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]"
                  alt="Vector Four"
                />
              </Row>
            </Column>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default HomepagePage;
