import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Stack, Img, Row, Text, Button, Grid, Input } from "components";

const AboutPage = () => {
  const navigate = useNavigate();

  function handleNavigate2() {
    //TODO: You had integrated navigation action, since you've not selected the target page,
    // you will have to update navigation code manually.
    navigate("");
  }

  return (
    <>
      <Column className="bg-white_A700 font-chivo mx-[auto] w-[100%]">
        <Column className="items-center w-[100%]">
          <Stack className="lg:h-[1277px] xl:h-[1460px] 2xl:h-[1643px] 3xl:h-[1971px] w-[100%]">
            <Stack className="absolute bg-gray_50 lg:h-[566px] xl:h-[647px] 2xl:h-[728px] 3xl:h-[873px] top-[0] w-[100%]">
              <Img
                src="images/img_pattern_white_A700.png"
                className="absolute bottom-[0] lg:h-[331px] xl:h-[379px] 2xl:h-[426px] 3xl:h-[511px] w-[100%]"
                alt="Pattern"
              />
            </Stack>
            <header className="absolute inset-x-[0] mx-[auto] top-[1%] w-[77%]">
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
            <Column className="absolute bottom-[0] inset-x-[0] items-center justify-end mx-[auto] 3xl:pt-[10px] lg:pt-[7px] xl:pt-[8px] 2xl:pt-[9px] w-[77%]">
              <Text className="font-bold lg:leading-[45px] xl:leading-[51px] 2xl:leading-[58px] 3xl:leading-[69px] lg:text-[40px] xl:text-[46px] 2xl:text-[52px] 3xl:text-[62px] text-center text-gray_900 w-[64%]">
                Product analytics solution to help your business grow
              </Text>
              <Text className="font-normal lg:leading-[21px] xl:leading-[24px] 2xl:leading-[28px] 3xl:leading-[33px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 text-center w-[45%]">
                Simple plans that grow with your business. No contracts. No
                setup fees.
              </Text>
              <Row className="items-center justify-between lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[94%]">
                <Img
                  src="images/img_rectangle214.png"
                  className="lg:h-[434px] xl:h-[496px] 2xl:h-[558px] 3xl:h-[669px] rounded-radius6 w-[48%]"
                  alt="Rectangle214"
                />
                <Column className="items-center w-[48%]">
                  <Img
                    src="images/img_rectangle215.png"
                    className="lg:h-[152px] xl:h-[174px] 2xl:h-[196px] 3xl:h-[235px] rounded-radius6 w-[100%]"
                    alt="Rectangle215"
                  />
                  <Img
                    src="images/img_rectangle216.png"
                    className="lg:h-[249px] xl:h-[285px] 2xl:h-[321px] 3xl:h-[385px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] rounded-radius6 w-[100%]"
                    alt="Rectangle216"
                  />
                </Column>
              </Row>
              <Text className="font-normal lg:leading-[21px] xl:leading-[24px] 2xl:leading-[28px] 3xl:leading-[33px] lg:mt-[44px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[83%]">
                Growthly provides agencies and marketers with dashboards,
                combines data sources, and visualizes trends. With a focus on
                agencies, our goal is to help you grow.
                <br />
                <br />
                Founded in 2014 by Diane Davis and featured in the hit show
                Silicon Valley, Growthly has expanded to over three hundred
                thousand users. In 2020, Growthlvvy joined the newly-launched,
                agency-focused, marketing technology suite — Traject. Made up of
                passionate team members from 22 cities and 11 countries, Traject
                represents 7 brands in the marketing technology space. We remain
                true to our roots, committed to delivering the easiest
                out-of-the-box dashboarding solution while also innovating,
                expanding integrations, and improving usability.
                <br />
                <br />
                Growthly supports hundreds of thousands of users and businesses
                from solopreneurs to enterprises — with a focus on helping
                growing agencies track their efforts and deliver value.
                <br />
                <br />
                Strong customer relationships are more important than ever, but
                the scale and nature of online business means it's harder than
                ever to create personal connections with customers. That's why
                we created the world's first Conversational Relationship
                Platform — to help businesses build better customer
                relationships through personalized, messenger-based experiences.
              </Text>
              <Row className="items-center lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] pr-[4px] py-[4px] w-[100%]">
                <Column className="mt-[1px] w-[26%]">
                  <Text className="font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-gray_900 w-[auto]">
                    4.2m
                  </Text>
                  <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[86%]">
                    Users tracked their data product per daily{" "}
                  </Text>
                </Column>
                <Column className="mt-[1px] w-[26%]">
                  <Text className="font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-gray_900 w-[auto]">
                    2014
                  </Text>
                  <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[69%]">
                    Our experience has been 7 years since 2014
                  </Text>
                </Column>
                <Column className="w-[26%]">
                  <Text className="font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-gray_900 w-[auto]">
                    426
                  </Text>
                  <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[75%]">
                    Employees who work with us from different countries
                  </Text>
                </Column>
                <Column className="my-[1px] w-[20%]">
                  <Text className="font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-gray_900 w-[auto]">
                    24+
                  </Text>
                  <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[100%]">
                    More than 30 countries trust our platform
                  </Text>
                </Column>
              </Row>
            </Column>
          </Stack>
          <Text className="font-bold 2xl:mt-[108px] 3xl:mt-[129px] lg:mt-[84px] xl:mt-[96px] lg:text-[34px] xl:text-[39px] 2xl:text-[44px] 3xl:text-[52px] text-gray_900 w-[auto]">
            Meet our team family
          </Text>
          <Grid className="gap-[0] grid grid-cols-1 lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] w-[65%]">
            <Row className="items-center justify-evenly w-[100%]">
              <Column className="items-center lg:pb-[3px] xl:pb-[4px] 2xl:pb-[5px] 3xl:pb-[6px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] w-[39%]">
                <Img
                  src="images/img_ellipse60.png"
                  className="lg:h-[150px] xl:h-[171px] 2xl:h-[193px] 3xl:h-[231px] rounded-radius50 lg:w-[149px] xl:w-[170px] 2xl:w-[192px] 3xl:w-[230px]"
                  alt="EllipseSixty"
                />
                <Column className="items-center lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[45%]">
                  <Text className="font-bold lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[auto]">
                    Jimmy Neutron
                  </Text>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                    Account Executive
                  </Text>
                </Column>
              </Column>
              <Column className="items-center lg:pb-[3px] xl:pb-[4px] 2xl:pb-[5px] 3xl:pb-[6px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] w-[37%]">
                <Img
                  src="images/img_ellipse60_192X192.png"
                  className="lg:h-[150px] xl:h-[171px] 2xl:h-[193px] 3xl:h-[231px] rounded-radius50 lg:w-[149px] xl:w-[170px] 2xl:w-[192px] 3xl:w-[230px]"
                  alt="EllipseSixty One"
                />
                <Column className="items-center lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[45%]">
                  <Text className="font-bold lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[auto]">
                    Antony Velich
                  </Text>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                    Account Executive
                  </Text>
                </Column>
              </Column>
              <Column className="items-center pb-[3px] w-[24%]">
                <Img
                  src="images/img_ellipse60_1.png"
                  className="lg:h-[150px] xl:h-[171px] 2xl:h-[193px] 3xl:h-[231px] rounded-radius50 lg:w-[149px] xl:w-[170px] 2xl:w-[192px] 3xl:w-[230px]"
                  alt="EllipseSixty Two"
                />
                <Text className="font-bold lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[auto]">
                  Spencer Roberto
                </Text>
                <Text className="font-normal lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                  Product Support Specialist
                </Text>
              </Column>
            </Row>
            <Row className="items-center justify-evenly w-[100%]">
              <Column className="items-center pb-[3px] pr-[3px] w-[40%]">
                <Img
                  src="images/img_ellipse60_2.png"
                  className="lg:h-[150px] xl:h-[171px] 2xl:h-[193px] 3xl:h-[231px] rounded-radius50 lg:w-[149px] xl:w-[170px] 2xl:w-[192px] 3xl:w-[230px]"
                  alt="EllipseSixty One"
                />
                <Text className="font-bold lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[auto]">
                  Anastasya
                </Text>
                <Text className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                  Sr Creative Designer
                </Text>
              </Column>
              <Column className="pb-[3px] pr-[3px] w-[40%]">
                <Img
                  src="images/img_ellipse60_3.png"
                  className="lg:h-[150px] xl:h-[171px] 2xl:h-[193px] 3xl:h-[231px] rounded-radius50 lg:w-[149px] xl:w-[170px] 2xl:w-[192px] 3xl:w-[230px]"
                  alt="EllipseSixty One One"
                />
                <Text className="font-bold lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[auto]">
                  Lizy Renata
                </Text>
                <Text className="font-normal lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                  Sr Software Engineer
                </Text>
              </Column>
              <Column className="items-center pb-[3px] w-[21%]">
                <Img
                  src="images/img_ellipse60_4.png"
                  className="lg:h-[150px] xl:h-[171px] 2xl:h-[193px] 3xl:h-[231px] rounded-radius50 w-[100%]"
                  alt="EllipseSixty Two One"
                />
                <Text className="font-bold lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[auto]">
                  Ben Washington
                </Text>
                <Text className="font-normal lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                  Sr Front End Engineer
                </Text>
              </Column>
            </Row>
            <Row className="items-center justify-evenly w-[100%]">
              <Column className="items-center lg:pb-[3px] xl:pb-[4px] 2xl:pb-[5px] 3xl:pb-[6px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] w-[40%]">
                <Img
                  src="images/img_ellipse60_5.png"
                  className="lg:h-[150px] xl:h-[171px] 2xl:h-[193px] 3xl:h-[231px] rounded-radius50 lg:w-[149px] xl:w-[170px] 2xl:w-[192px] 3xl:w-[230px]"
                  alt="EllipseSixty Two"
                />
                <Text className="font-bold lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[auto]">
                  Diane Davis
                </Text>
                <Text className="font-normal lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                  CEO and CO Founder
                </Text>
              </Column>
              <Column className="items-center lg:pb-[3px] xl:pb-[4px] 2xl:pb-[5px] 3xl:pb-[6px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] w-[40%]">
                <Img
                  src="images/img_ellipse60_6.png"
                  className="lg:h-[150px] xl:h-[171px] 2xl:h-[193px] 3xl:h-[231px] rounded-radius50 lg:w-[149px] xl:w-[170px] 2xl:w-[192px] 3xl:w-[230px]"
                  alt="EllipseSixty One Two"
                />
                <Text className="font-bold lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[auto]">
                  Jonas Delonge
                </Text>
                <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                  Vice President
                </Text>
              </Column>
              <Column className="items-center pb-[3px] w-[21%]">
                <Img
                  src="images/img_ellipse60_7.png"
                  className="lg:h-[150px] xl:h-[171px] 2xl:h-[193px] 3xl:h-[231px] rounded-radius50 w-[100%]"
                  alt="EllipseSixty Two Two"
                />
                <Text className="font-bold lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[auto]">
                  Samantha Ruby
                </Text>
                <Text className="font-normal lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                  Director of Marketing
                </Text>
              </Column>
            </Row>
          </Grid>
          <Text className="font-bold 2xl:mt-[108px] 3xl:mt-[129px] lg:mt-[84px] xl:mt-[96px] lg:text-[34px] xl:text-[39px] 2xl:text-[44px] 3xl:text-[52px] text-gray_900 w-[auto]">
            We've helped their SaaS applications
          </Text>
        </Column>
        <Row className="items-center lg:ml-[119px] xl:ml-[136px] 2xl:ml-[153px] 3xl:ml-[183px] lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] w-[74%]">
          <Img
            src="images/img_microsoft1_teal_200.svg"
            className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] w-[13%]"
            alt="MicrosoftOne"
          />
          <Img
            src="images/img_vector_teal_200_30X114.svg"
            className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[50px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[11%]"
            alt="Vector One"
          />
          <Img
            src="images/img_trash_36X69.svg"
            className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] 2xl:ml-[101px] 3xl:ml-[121px] lg:ml-[78px] xl:ml-[89px] w-[6%]"
            alt="trash"
          />
          <Img
            src="images/img_shopify_teal_200.svg"
            className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] 3xl:ml-[115px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] w-[11%]"
            alt="Shopify"
          />
          <Img
            src="images/img_group_teal_200_33X134.svg"
            className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] lg:ml-[49px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] w-[13%]"
            alt="Group"
          />
          <Img
            src="images/img_intel_30X73.svg"
            className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] 3xl:ml-[105px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[88px] w-[7%]"
            alt="Intel"
          />
        </Row>
        <Column className="items-center 2xl:mt-[102px] 3xl:mt-[122px] lg:mt-[79px] xl:mt-[90px] w-[100%]">
          <Stack className="lg:h-[249px] xl:h-[285px] 2xl:h-[321px] 3xl:h-[385px] w-[77%]">
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
                  onClick={handleNavigate2}
                  alt="twitter"
                />
                <Img
                  src="images/img_vector_22X22.svg"
                  className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] mb-[1px] lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] lg:w-[17px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]"
                  alt="Vector Two"
                />
              </Row>
            </Column>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default AboutPage;
