import styled from "styled-components";
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDropdown } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import {
  Nav,
  NavContainer,
  Row2,
  Row1,
  NavIcons,
  NavItem,
  NavItem2,
} from "./styles/Navbar.styles";
import {
  MainHeader,
  MainHeaderContainer,
  MainHeaderRow,
  MainHeaderItem,
  MainHeaderMobile,
} from "./styles/Hero.styles";
import {
  EonHeader,
  EonList,
  EonListItem,
  EonMobileDropdown,
} from "./styles/Eon/EonHeader.styles";
import {
  HeroWrapper,
  HeroTitle,
  HeroImageContainer,
  EonImage,
} from "./styles/Eon/EonHero.styles";
import {
  EonSpecs,
  EonSpecsContainer,
  Specs,
  SpecIsLi,
  SpecIsnfo,
  SpecTextContainer,
  SpecTitle,
  SpecParagraph,
} from "./styles/Eon/EonSpecs.styles";
import {
  FeatureOneSection,
  FeatureOneContainer,
  FeatureOneDiv,
  FeatureOneTitleH2,
  FeatureOneTitleH3,
  FeatureOneParagraph,
  FeatureOneImageContainer,
  FeatureOneImage,
  ButtonOverImage,
  ContainerOverImage,
  FeatureTwoImage,
} from "./styles/Eon/EonFeature.styles";
import {
  ServiceCartSection,
  ServiceCartContainer,
  ServiceCart,
  ServiceCartBanner,
  ServiceCartImage,
  Button,
} from "./styles/Eon/EonServiceCart";
import {
  ContactUsSection,
  ContactUsDiv,
  ContactUsInfo,
  ContactLogo,
  ContactTitle,
  ContactText,
} from "./styles/Eon/EonContacts.styles";
import {
  Footer,
  FooterContainer,
  FooterUl,
  FooterLi,
  FooterImageContainer,
  FooterImage,
} from "./styles/Footer.styles";
import {
  eonSpecs,
  aboutCompany,
  services,
  usefulLinksData,
  footerImages,
} from "./data";

export const PageTwo = () => {
  return (
    <>
      <Nav>
        <NavContainer>
          <Row1>
            <NavItem2>Частни клиенти</NavItem2>
            <NavItem2>Бизнес клиенти</NavItem2>
          </Row1>
          <Row2>
            <NavItem>Кариери</NavItem>
            <NavItem>Магазини</NavItem>
            <NavItem>Общи Условия</NavItem>
            <NavItem>Лични данни</NavItem>
            <NavItem>Мобилно покритие</NavItem>
            <NavItem>Контакти</NavItem>
            <NavItem>EN</NavItem>
          </Row2>
          <NavIcons>
            <IoCartOutline size={24} />
            <IoIosSearch size={24} />
            <IoIosNotificationsOutline size={24} />
            <FaRegUser size={24} />
          </NavIcons>
        </NavContainer>
      </Nav>
      <MainHeader>
        <MainHeaderContainer>
          <img src="/vivacom-logo.svg" alt="vivacom_logo" loading="lazy" />
          <MainHeaderRow>
            <MainHeaderItem>Услуги</MainHeaderItem>
            <MainHeaderItem>Устройства</MainHeaderItem>
            <MainHeaderItem>Помощ</MainHeaderItem>
            <MainHeaderItem>Моят Vivacom</MainHeaderItem>
            <MainHeaderItem className="borderedBtn">
              Плати сметката си
            </MainHeaderItem>
          </MainHeaderRow>
          <MainHeaderMobile>
            <RxHamburgerMenu size={24} />
          </MainHeaderMobile>
        </MainHeaderContainer>
      </MainHeader>
      {/* NAVBAR ENDS */}
      <EonHeader>
        <EonList>
          <EonListItem>EON пакети</EonListItem>
          <EonListItem>EON 5G пакети</EonListItem>
          <EonListItem>EON TV</EonListItem>
          <EonListItem>Канали</EonListItem>
          <EonListItem>EON видеотека</EonListItem>
          <EonListItem>EON за деца</EonListItem>
          <EonListItem>Устройства</EonListItem>
          <EonListItem>Защо EON</EonListItem>
        </EonList>
        <EonMobileDropdown>
          <IoIosArrowDropdown size={28} />
        </EonMobileDropdown>
      </EonHeader>
      {/* EON LINKS ENDS */}
      <HeroWrapper>
        <HeroTitle>Всеки телевизор става SMART с EON смарт бокс</HeroTitle>
        <HeroImageContainer>
          <EonImage
            src="/eon-smart-box.jpg"
            alt="eon_smart_box"
            width={990}
            height={650}
          />
        </HeroImageContainer>
      </HeroWrapper>
      {/* HERO ENDS */}
      <EonSpecs>
        <EonSpecsContainer>
          <HeroTitle>EON функционалности</HeroTitle>
          <Specs>
            {eonSpecs.map((spec) => (
              <SpecIsLi key={spec.title}>
                <SpecIsnfo>
                  <img
                    src={spec.image}
                    alt={spec.title}
                    width={60}
                    height={60}
                    loading="lazy"
                  />
                  <SpecTextContainer>
                    <SpecTitle>{spec.title}</SpecTitle>
                    <SpecParagraph>{spec.description}</SpecParagraph>
                  </SpecTextContainer>
                </SpecIsnfo>
              </SpecIsLi>
            ))}
          </Specs>
        </EonSpecsContainer>
      </EonSpecs>
      {/* EON SPECS ENDS */}
      <FeatureOneSection>
        <FeatureOneContainer>
          <FeatureOneDiv>
            <FeatureOneTitleH2>
              Вече всичко любимо е на едно място – игри и приложения
            </FeatureOneTitleH2>
            <FeatureOneTitleH3>Без да излизаш от EON.</FeatureOneTitleH3>
            <FeatureOneParagraph>
              Няма ли да е чудесно, ако имаш достъп до любимите си приложения на
              твоя телевизор, въпреки че не е Smart? Вече може да направиш това
              чрез EON Smart Box.
            </FeatureOneParagraph>
            <FeatureOneParagraph>
              С функцията Apps and Games, гледай YouTube и използвай други
              популярни приложения, без да губиш време - всичко е лесно и бързо.
              А за любителите на игрите, EON Smart Box отиде една крачка напред:
              фантастичната Orbia, както и над 10 000 игри, налични в Google
              Play Store само на няколко клика от теб.
            </FeatureOneParagraph>
            <FeatureOneParagraph>
              В рамките на EON Smart Box имаш достъп до любимите си приложения и
              игри с едно щракване, като отидеш в секцията Игри и приложения от
              началното меню. Любимите видео игри и приложения, но също и
              съдържание като YouTube, HBO Max, TIDAL, Da Vinci и много други
              вече са достъпни бързо и лесно.
            </FeatureOneParagraph>
          </FeatureOneDiv>
          <FeatureOneDiv>
            <FeatureOneImageContainer>
              <FeatureOneImage
                src="eon-apps-and-games-banner-page4.png"
                alt="eon_apps_banner"
                width={541}
                height={437}
                loading="lazy"
              />
            </FeatureOneImageContainer>
          </FeatureOneDiv>
        </FeatureOneContainer>
      </FeatureOneSection>
      {/* FEATURE TWO */}
      <FeatureOneSection>
        <FeatureTwoImage
          src="eon-vod-new-back-1920px.jpg"
          alt="eon_apps_banner"
          width={1400}
          height={700}
          loading="lazy"
        />
        <ContainerOverImage>
          <FeatureOneDiv>
            <FeatureOneTitleH2>
              Над 15 000+ заглавия в EON Видеотека
            </FeatureOneTitleH2>
            <ButtonOverImage>ВИЖ ПОВЕЧЕ</ButtonOverImage>
          </FeatureOneDiv>
        </ContainerOverImage>
      </FeatureOneSection>
      {/* FEATURE THREE */}
      <FeatureOneSection>
        <FeatureOneContainer>
          <FeatureOneDiv>
            <FeatureOneImageContainer className="centerdImg">
              <FeatureOneImage
                src="tv-box-hbo.png"
                alt="eon_apps_banner"
                width={541}
                height={437}
                loading="lazy"
              />
            </FeatureOneImageContainer>
          </FeatureOneDiv>
          <FeatureOneDiv>
            <FeatureOneTitleH2>До 7 дни назад с EON TV</FeatureOneTitleH2>
            <FeatureOneParagraph>
              Никога повече няма да пропуснете любимите си предавания, филми и
              сериали.
            </FeatureOneParagraph>
          </FeatureOneDiv>
        </FeatureOneContainer>
      </FeatureOneSection>
      {/* FEATURE FOUR */}
      <FeatureOneSection>
        <FeatureTwoImage
          src="jl-back-1024px.jpg"
          alt="eon_apps_banner"
          width={1400}
          height={700}
          loading="lazy"
        />
        <ContainerOverImage>
          <FeatureOneDiv>
            <img
              src="/hbo_od.png"
              alt="hbo_logo"
              width={200}
              height={40}
              loading="lazy"
            />
            <FeatureOneTitleH2>Включен в пакета EON PREMIUM</FeatureOneTitleH2>
            <ButtonOverImage>ВИЖ ПОВЕЧЕ</ButtonOverImage>
          </FeatureOneDiv>
        </ContainerOverImage>
      </FeatureOneSection>
      {/* FEATURE FIVE */}
      <ServiceCartSection>
        <ServiceCartContainer>
          <ServiceCart>
            <ServiceCartBanner
              src="izkoristite-akcijo-kids.jpg"
              alt="service_cart_banner"
            />
            <ServiceCartImage
              src="eon-black-akcija-50-1-promo.png"
              alt="service_cart_banner_action"
            />
            <Button>Поръчай</Button>
          </ServiceCart>
          <ServiceCart>
            <ServiceCartBanner
              src="ustvarite-eon-profil-kids.jpg"
              alt="service_cart_banner"
            />
            <ServiceCartImage
              src="Group-24-1.png"
              alt="service_cart_banner_action"
            />
            <Button>Изтегли</Button>
          </ServiceCart>
        </ServiceCartContainer>
      </ServiceCartSection>
      <ContactUsSection>
        <ContactUsDiv>
          <ContactUsInfo>
            <ContactLogo>
              <MdLocalPhone />
            </ContactLogo>
            <ContactTitle>СВЪРЖЕТЕ СЕ С НАС</ContactTitle>
            <ContactText>
              За връзка с Обслужване на клиенти – тел. (087) 123
            </ContactText>
          </ContactUsInfo>
          <ContactUsInfo>
            <ContactLogo>
              <FaLocationDot />
            </ContactLogo>
            <ContactTitle>ПОСЕТЕТЕ НИ</ContactTitle>
            <ContactText>Заповядайте в наш магазин.</ContactText>
          </ContactUsInfo>
        </ContactUsDiv>
      </ContactUsSection>
      {/* CONTACTS END */}
      <Footer>
        <FooterContainer>
          <FooterUl>
            <h4>Компанията</h4>
            {aboutCompany.map((item, index) => (
              <FooterLi key={index}>{item.title}</FooterLi>
            ))}
          </FooterUl>
          <FooterUl>
            <h4>Частни клиенти</h4>
            {services.map((item, index) => (
              <FooterLi key={index}>{item.title}</FooterLi>
            ))}
          </FooterUl>
          <FooterUl>
            <h4>Полезни връзки</h4>
            {usefulLinksData.map((item, index) => (
              <FooterLi key={index}>{item.title}</FooterLi>
            ))}
          </FooterUl>
          <FooterUl>
            <h4>Мобилно приложение My VIVACOM</h4>
            {footerImages.map((image, index) => (
              <FooterImageContainer key={index}>
                <FooterImage
                  src={image.src}
                  alt="footerImages"
                  loading="lazy"
                />
              </FooterImageContainer>
            ))}
          </FooterUl>
        </FooterContainer>
      </Footer>
    </>
  );
};
