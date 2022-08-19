import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Button, Input, Stack, List } from "components";

const ResourceCenterPage = () => {
  const navigate = useNavigate();

  function handleNavigate5() {
    //TODO: You had integrated navigation action, since you've not selected the target page,
    // you will have to update navigation code manually.
    navigate("");
  }

  return (
    <>
      <Column className="bg-white_A700 font-chivo items-center justify-end mx-[auto] lg:pt-[11px] xl:pt-[13px] 2xl:pt-[15px] 3xl:pt-[18px] w-[100%]">
        <Column className="items-center w-[77%]">
          <Row className="items-center justify-end pl-[2px] w-[100%]">
            <Img
              src="images/img_vector.svg"
              className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
              alt="Vector"
            />
            <Text className="font-bold font-cinzeldecorative lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-teal_400 w-[auto]">
              Growthly
            </Text>
            <Text className="font-bold font-chivo lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
              Pricing
            </Text>
            <Text className="font-bold font-chivo lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
              Resources Center
            </Text>
            <Text className="font-bold font-chivo lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
              About
            </Text>
            <Text className="font-bold font-chivo lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
              Contact
            </Text>
            <Text className="font-bold font-chivo lg:ml-[225px] xl:ml-[257px] 2xl:ml-[290px] 3xl:ml-[348px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
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
          <Row className="items-center justify-evenly 3xl:mt-[102px] lg:mt-[66px] xl:mt-[75px] 2xl:mt-[85px] w-[97%]">
            <Column className="w-[58%]">
              <Text className="font-bold lg:leading-[45px] xl:leading-[51px] 2xl:leading-[58px] 3xl:leading-[69px] lg:text-[40px] xl:text-[46px] 2xl:text-[52px] 3xl:text-[62px] text-gray_900 w-[77%]">
                With our resources help your business grow rapidly
              </Text>
              <Text className="font-normal lg:leading-[21px] xl:leading-[24px] 2xl:leading-[28px] 3xl:leading-[33px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[75%]">
                Our books, guides, and others have helped thousands of your
                peers get better at their business
              </Text>
              <Column className="bg-white_A700 items-center lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] rounded-radius6 w-[76%]">
                <Row className="bg-gray_50 border border-bluegray_200 border-solid items-end justify-end lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius6 w-[100%]">
                  <Input
                    className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                    wrapClassName="2xl:mt-[7px] 3xl:mt-[8px] lg:mt-[5px] mb-[4px] w-[63%] xl:mt-[6px]"
                    name="box"
                    placeholder="Search resources"
                    size="md"
                    variant="FillGray50"
                  ></Input>
                  <Button
                    className="2xl:ml-[11px] 3xl:ml-[13px] flex items-center justify-center lg:ml-[8px] text-center w-[32%] xl:ml-[9px]"
                    leftIcon={
                      <Img
                        src="images/img_search.svg"
                        className="text-center lg:w-[14px] lg:h-[14px] lg:mr-[10px] xl:w-[16px] xl:h-[17px] xl:mr-[11px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[13px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mr-[15px]"
                        alt="search"
                      />
                    }
                    shape="RoundedBorder6"
                    size="md"
                    variant="FillTeal400"
                  >
                    <div className="bg-transparent font-bold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                      Search
                    </div>
                  </Button>
                </Row>
              </Column>
            </Column>
            <Stack className="lg:h-[277px] xl:h-[316px] 2xl:h-[356px] 3xl:h-[427px] w-[42%]">
              <Img
                src="images/img_pattern.svg"
                className="absolute lg:h-[273px] xl:h-[312px] 2xl:h-[351px] 3xl:h-[421px] inset-y-[0] left-[0] my-[auto] w-[92%]"
                alt="Pattern"
              />
              <Row className="absolute justify-between w-[100%]">
                <Column className="w-[14%]">
                  <Button
                    className="flex lg:h-[50px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] items-center justify-center w-[100%]"
                    shape="icbRoundedBorder6"
                    size="2xlIcn"
                    variant="icbOutlineGray90014"
                  >
                    <Img
                      src="images/img_search_white_A700.svg"
                      className="flex items-center justify-center lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                      alt="search One"
                    />
                  </Button>
                  <Stack className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] ml-[4px] lg:mt-[140px] xl:mt-[161px] 2xl:mt-[181px] 3xl:mt-[217px] lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]">
                    <Button
                      className="absolute bottom-[2%] flex lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center w-[100%]"
                      shape="icbRoundedBorder6"
                      size="xlIcn"
                      variant="icbOutlineGray900141_2"
                    >
                      <Img
                        src="images/img_airplane.svg"
                        className="flex items-center justify-center"
                        alt="airplane"
                      />
                    </Button>
                    <Button
                      className="absolute flex lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center top-[2%] w-[100%]"
                      shape="icbRoundedBorder6"
                      size="xlIcn"
                      variant="icbOutlineGray900141_2"
                    >
                      <Img
                        src="images/img_airplane.svg"
                        className="flex items-center justify-center"
                        alt="airplane One"
                      />
                    </Button>
                  </Stack>
                </Column>
                <Stack className="lg:h-[276px] xl:h-[315px] 2xl:h-[355px] 3xl:h-[426px] mt-[1px] w-[81%]">
                  <Stack className="absolute lg:h-[276px] xl:h-[315px] 2xl:h-[355px] 3xl:h-[426px] top-[0] w-[100%]">
                    <Column className="absolute bottom-[0] left-[0] w-[68%]">
                      <Stack className="lg:h-[148px] xl:h-[170px] 2xl:h-[191px] 3xl:h-[229px] w-[100%]">
                        <Img
                          src="images/img_group290.svg"
                          className="absolute lg:h-[148px] xl:h-[170px] 2xl:h-[191px] 3xl:h-[229px] top-[1%] w-[100%]"
                          alt="Group290"
                        />
                        <Img
                          src="images/img_group290.svg"
                          className="absolute bottom-[1%] lg:h-[148px] xl:h-[170px] 2xl:h-[191px] 3xl:h-[229px] w-[100%]"
                          alt="Illustrations"
                        />
                      </Stack>
                      <Stack className="bg-white_A700 2xl:h-[111px] 3xl:h-[133px] lg:h-[86px] xl:h-[98px] lg:ml-[43px] xl:ml-[49px] 2xl:ml-[56px] 3xl:ml-[67px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:px-[11px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] rounded-radius6 shadow-bs2 2xl:w-[110px] 3xl:w-[132px] lg:w-[85px] xl:w-[97px]">
                        <Img
                          src="images/img_eye.svg"
                          className="absolute lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] inset-[0] justify-center m-[auto] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                          alt="eye"
                        />
                      </Stack>
                    </Column>
                    <Stack className="absolute bg-white_A700 bottom-[0] 2xl:h-[111px] 3xl:h-[133px] lg:h-[86px] xl:h-[98px] left-[15%] lg:px-[11px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] rounded-radius6 shadow-bs2 2xl:w-[110px] 3xl:w-[132px] lg:w-[85px] xl:w-[97px]">
                      <Img
                        src="images/img_eye.svg"
                        className="absolute lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] inset-[0] justify-center m-[auto] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                        alt="eye One"
                      />
                    </Stack>
                    <Stack
                      className="absolute bg-cover bg-repeat bottom-[23%] lg:h-[100px] xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] right-[0] w-[46%]"
                      style={{
                        backgroundImage: "url('images/img_group88.svg')",
                      }}
                    >
                      <Img
                        src="images/img_group88.svg"
                        className="absolute lg:h-[100px] xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] w-[100%]"
                        alt="Illustrations One"
                      />
                    </Stack>
                    <Button
                      className="absolute flex lg:h-[60px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] items-center justify-center right-[16%] top-[0] lg:w-[59px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]"
                      shape="icbRoundedBorder6"
                      size="2xlIcn"
                      variant="icbOutlineGray900141_2"
                    >
                      <Img
                        src="images/img_settings.svg"
                        className="flex items-center justify-center"
                        alt="settings"
                      />
                    </Button>
                  </Stack>
                  <Button
                    className="absolute flex lg:h-[60px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] items-center justify-center right-[16%] top-[0] lg:w-[59px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]"
                    shape="icbRoundedBorder6"
                    size="2xlIcn"
                    variant="icbOutlineGray900141_2"
                  >
                    <Img
                      src="images/img_settings.svg"
                      className="flex items-center justify-center"
                      alt="settings One"
                    />
                  </Button>
                </Stack>
              </Row>
            </Stack>
          </Row>
          <List
            className="gap-[0] min-h-[auto] 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[77px] xl:mt-[88px] w-[100%]"
            orientation="vertical"
          >
            <Column className="bg-red_300 3xl:ml-[1037px] lg:ml-[672px] xl:ml-[768px] 2xl:ml-[864px] my-[0] lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius6 w-[22%]">
              <Text className="font-bold lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-white_A700 w-[auto]">
                Customer Stories
              </Text>
              <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700_a2 w-[96%]">
                See what Growly success looks like
              </Text>
              <Text className="font-bold mb-[3px] lg:mt-[63px] xl:mt-[72px] 2xl:mt-[81px] 3xl:mt-[97px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 underline w-[auto]">
                View All
              </Text>
            </Column>
            <Column className="bg-lime_700 lg:ml-[448px] xl:ml-[512px] 2xl:ml-[576px] 3xl:ml-[691px] lg:mr-[224px] xl:mr-[256px] 2xl:mr-[288px] 3xl:mr-[345px] my-[0] lg:p-[17px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] rounded-radius6 w-[22%]">
              <Text className="font-bold ml-[1px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-white_A700 w-[auto]">
                Webinars
              </Text>
              <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700_a2 w-[86%]">
                Your all-access pass to exclusive content
              </Text>
              <Text className="font-bold mb-[3px] ml-[1px] lg:mt-[63px] xl:mt-[72px] 2xl:mt-[81px] 3xl:mt-[97px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 underline w-[auto]">
                View All
              </Text>
            </Column>
            <Column className="bg-green_400 lg:ml-[224px] xl:ml-[256px] 2xl:ml-[288px] 3xl:ml-[345px] lg:mr-[448px] xl:mr-[512px] 2xl:mr-[576px] 3xl:mr-[691px] my-[0] lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius6 w-[22%]">
              <Text className="font-bold lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-white_A700 w-[auto]">
                Blog
              </Text>
              <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700_a2 w-[94%]">
                Our best tips for growing your business
              </Text>
              <Text className="font-bold mb-[3px] lg:mt-[60px] xl:mt-[69px] 2xl:mt-[78px] 3xl:mt-[93px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 underline w-[auto]">
                View All
              </Text>
            </Column>
            <Column className="bg-deep_purple_300 3xl:mr-[1037px] lg:mr-[672px] xl:mr-[768px] 2xl:mr-[864px] my-[0] lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius6 w-[22%]">
              <Text className="font-bold lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-white_A700 w-[auto]">
                Guides{" "}
              </Text>
              <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700_a2 w-[88%]">
                Evertything you need to know our platform
              </Text>
              <Text className="font-bold mb-[3px] lg:mt-[60px] xl:mt-[69px] 2xl:mt-[78px] 3xl:mt-[93px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 underline w-[auto]">
                View All
              </Text>
            </Column>
          </List>
          <Row className="items-center justify-between 2xl:mt-[104px] 3xl:mt-[124px] lg:mt-[80px] xl:mt-[92px] w-[100%]">
            <Text className="font-bold lg:text-[34px] xl:text-[39px] 2xl:text-[44px] 3xl:text-[52px] text-gray_900 w-[auto]">
              Guides and Resources
            </Text>
            <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 underline w-[auto]">
              View All
            </Text>
          </Row>
          <Row className="items-center justify-evenly lg:mt-[41px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] w-[100%]">
            <Column className="pb-[3px] pr-[3px] w-[52%]">
              <Img
                src="images/img_rectangle217.png"
                className="lg:h-[249px] xl:h-[285px] 2xl:h-[321px] 3xl:h-[385px] rounded-radius6 w-[94%]"
                alt="Rectangle217"
              />
              <Text className="font-normal lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-teal_400 w-[auto]">
                Guides
              </Text>
              <Text className="font-bold lg:leading-[31px] xl:leading-[35px] 2xl:leading-[40px] 3xl:leading-[48px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 w-[87%]">
                Getting started with Guide for your help center: Setting up
              </Text>
              <Text className="font-normal lg:leading-[21px] xl:leading-[24px] 2xl:leading-[28px] 3xl:leading-[33px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[87%]">
                Guide enables you to provide end users with a complete
                self-service support option and empowers agents to better help
                customer
              </Text>
              <Text className="font-bold lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 underline w-[auto]">
                Read Now
              </Text>
            </Column>
            <List
              className="gap-[0] min-h-[auto] w-[48%]"
              orientation="vertical"
            >
              <Row className="justify-between lg:my-[15px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] lg:pr-[17px] xl:pr-[19px] 2xl:pr-[22px] 3xl:pr-[26px] w-[100%]">
                <Img
                  src="images/img_rectangle218.png"
                  className="lg:h-[140px] xl:h-[161px] 2xl:h-[181px] 3xl:h-[217px] w-[48%]"
                  alt="Rectangle218"
                />
                <Column className="mt-[4px] w-[45%]">
                  <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-teal_400 w-[auto]">
                    Guides
                  </Text>
                  <Text className="font-bold lg:leading-[24px] xl:leading-[28px] 2xl:leading-[32px] 3xl:leading-[38px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[100%]">
                    Advance your product analytics strategy
                  </Text>
                  <Text className="font-bold lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 underline w-[auto]">
                    Read Now
                  </Text>
                </Column>
              </Row>
              <Row className="lg:my-[15px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] lg:pr-[49px] xl:pr-[56px] 2xl:pr-[63px] 3xl:pr-[75px] w-[100%]">
                <Img
                  src="images/img_rectangle219.png"
                  className="lg:h-[140px] xl:h-[161px] 2xl:h-[181px] 3xl:h-[217px] w-[52%]"
                  alt="Rectangle219"
                />
                <Column className="lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] mt-[4px] w-[41%]">
                  <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-teal_400 w-[auto]">
                    Guides
                  </Text>
                  <Text className="font-bold lg:leading-[24px] xl:leading-[28px] 2xl:leading-[32px] 3xl:leading-[38px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[100%]">
                    A tour of Growthly automations
                  </Text>
                  <Text className="font-bold lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 underline w-[auto]">
                    Read Now
                  </Text>
                </Column>
              </Row>
              <Row className="lg:my-[15px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] lg:pr-[26px] xl:pr-[30px] 2xl:pr-[34px] 3xl:pr-[40px] w-[100%]">
                <Img
                  src="images/img_rectangle220.png"
                  className="lg:h-[140px] xl:h-[161px] 2xl:h-[181px] 3xl:h-[217px] w-[49%]"
                  alt="Rectangle220"
                />
                <Column className="lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] mt-[4px] w-[44%]">
                  <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-teal_400 w-[auto]">
                    Guides
                  </Text>
                  <Text className="font-bold lg:leading-[24px] xl:leading-[28px] 2xl:leading-[32px] 3xl:leading-[38px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[100%]">
                    How to get support about Growly with us
                  </Text>
                  <Text className="font-bold lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 underline w-[auto]">
                    Read Now
                  </Text>
                </Column>
              </Row>
            </List>
          </Row>
          <Row className="items-center justify-between 2xl:mt-[108px] 3xl:mt-[129px] lg:mt-[84px] xl:mt-[96px] w-[100%]">
            <Text className="font-bold lg:text-[34px] xl:text-[39px] 2xl:text-[44px] 3xl:text-[52px] text-gray_900 w-[auto]">
              Latest Blog
            </Text>
            <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 underline w-[auto]">
              View All
            </Text>
          </Row>
          <List
            className="lg:gap-[31px] xl:gap-[35px] 2xl:gap-[40px] 3xl:gap-[48px] grid grid-cols-3 min-h-[auto] lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[100%]"
            orientation="horizontal"
          >
            <Column className="pb-[3px] w-[100%]">
              <Img
                src="images/img_rectangle221.png"
                className="lg:h-[172px] xl:h-[196px] 2xl:h-[221px] 3xl:h-[265px] rounded-radius6 w-[100%]"
                alt="Rectangle221"
              />
              <Text className="font-normal lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-teal_400 w-[auto]">
                Blog
              </Text>
              <Text className="font-bold lg:leading-[24px] xl:leading-[28px] 2xl:leading-[32px] 3xl:leading-[38px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[98%]">
                The Ultimate Guide To Customer Journey Analytics
              </Text>
              <Text className="font-bold lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 underline w-[auto]">
                Read Now
              </Text>
            </Column>
            <Column className="pb-[3px] w-[100%]">
              <Img
                src="images/img_rectangle222.png"
                className="lg:h-[172px] xl:h-[196px] 2xl:h-[221px] 3xl:h-[265px] rounded-radius6 w-[100%]"
                alt="Rectangle222"
              />
              <Text className="font-normal lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-teal_400 w-[auto]">
                Blog
              </Text>
              <Text className="font-bold lg:leading-[24px] xl:leading-[28px] 2xl:leading-[32px] 3xl:leading-[38px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[89%]">
                6 Customer Metrics That Will Help You Grow Your Business
              </Text>
              <Text className="font-bold lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 underline w-[auto]">
                Read Now
              </Text>
            </Column>
            <Column className="pb-[3px] w-[100%]">
              <Img
                src="images/img_rectangle223.png"
                className="lg:h-[172px] xl:h-[196px] 2xl:h-[221px] 3xl:h-[265px] rounded-radius6 w-[100%]"
                alt="Rectangle223"
              />
              <Text className="font-normal lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-teal_400 w-[auto]">
                Blog
              </Text>
              <Text className="font-bold lg:leading-[24px] xl:leading-[28px] 2xl:leading-[32px] 3xl:leading-[38px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[98%]">
                The difference between product analytics and marketing
              </Text>
              <Text className="font-bold lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 underline w-[auto]">
                Read Now
              </Text>
            </Column>
          </List>
          <Row className="items-center justify-between 2xl:mt-[108px] 3xl:mt-[129px] lg:mt-[84px] xl:mt-[96px] w-[100%]">
            <Text className="font-bold lg:text-[34px] xl:text-[39px] 2xl:text-[44px] 3xl:text-[52px] text-gray_900 w-[auto]">
              Customer Story
            </Text>
            <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 underline w-[auto]">
              View All
            </Text>
          </Row>
          <List
            className="lg:gap-[31px] xl:gap-[35px] 2xl:gap-[40px] 3xl:gap-[48px] grid grid-cols-3 min-h-[auto] lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[100%]"
            orientation="horizontal"
          >
            <Column className="pb-[3px] w-[100%]">
              <Img
                src="images/img_rectangle221_220X344.png"
                className="lg:h-[172px] xl:h-[196px] 2xl:h-[221px] 3xl:h-[265px] rounded-radius6 w-[100%]"
                alt="Rectangle221 One"
              />
              <Text className="font-normal lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-teal_400 w-[auto]">
                Customer Story
              </Text>
              <Text className="font-bold lg:leading-[24px] xl:leading-[28px] 2xl:leading-[32px] 3xl:leading-[38px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[91%]">
                Watching movies provides the best user experience
              </Text>
              <Text className="font-bold lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 underline w-[auto]">
                Read Now
              </Text>
            </Column>
            <Column className="pb-[3px] w-[100%]">
              <Img
                src="images/img_rectangle222_220X344.png"
                className="lg:h-[172px] xl:h-[196px] 2xl:h-[221px] 3xl:h-[265px] rounded-radius6 w-[100%]"
                alt="Rectangle222 One"
              />
              <Text className="font-normal lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-teal_400 w-[auto]">
                Customer Story
              </Text>
              <Text className="font-bold lg:leading-[24px] xl:leading-[28px] 2xl:leading-[32px] 3xl:leading-[38px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[93%]">
                Providing reliable applications for productivity
              </Text>
              <Text className="font-bold lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 underline w-[auto]">
                Read Now
              </Text>
            </Column>
            <Column className="pb-[3px] w-[100%]">
              <Img
                src="images/img_rectangle223_220X344.png"
                className="lg:h-[172px] xl:h-[196px] 2xl:h-[221px] 3xl:h-[265px] rounded-radius6 w-[100%]"
                alt="Rectangle223 One"
              />
              <Text className="font-normal lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-teal_400 w-[auto]">
                Customer Story
              </Text>
              <Text className="font-bold lg:leading-[24px] xl:leading-[28px] 2xl:leading-[32px] 3xl:leading-[38px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[94%]">
                Build an online business—no matter what business you're in
              </Text>
              <Text className="font-bold lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 underline w-[auto]">
                Read Now
              </Text>
            </Column>
          </List>
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
                onClick={handleNavigate5}
                alt="twitter"
              />
              <Img
                src="images/img_vector_22X22.svg"
                className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] mb-[1px] lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] lg:w-[17px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]"
                alt="Vector One"
              />
            </Row>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default ResourceCenterPage;
