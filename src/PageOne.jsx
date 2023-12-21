import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { aboutCompany, services, usefulLinksData, footerImages } from "./data";
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
  HeroWrapper,
  HeroImageContainer,
  HeroImage,
  HeroTextContainer,
  HeroText,
  MainHeaderMobile,
} from "./styles/Hero.styles";
import {
  TestimonialsWrapper,
  TestimonialsContainer,
  TestimonialContent,
  TestimonialRow,
  TestimonialH2,
  Line,
  TestimonialP,
  TestimonitalVideoContainer,
  TestimonialVideo,
  GreenLine,
} from "./styles/Tesimonials/Testimonial.styles";
import {
  ServiceContainer,
  ServiceCart,
  ServiceCartTitle,
  ServiceCartImage,
  ButtonContainer,
  Button,
  AdditionalInfo,
} from "./styles/Tesimonials/Service.styles";
import {
  Footer,
  FooterContainer,
  FooterUl,
  FooterLi,
  FooterImageContainer,
  FooterImage,
} from "./styles/Footer.styles";

const testimonialVideo =
  "https://vivacom.bg/web/files/resources/171/documents/Vivacom_Fiber_net_TVC1_Games_HD_NET_SUB.mp4";

export const PageOne = () => {
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
      <HeroWrapper>
        <HeroImageContainer>
          <HeroImage src="/optimisedHero.png" alt="heroImage" loading="lazy" />
        </HeroImageContainer>
        <HeroTextContainer>
          <HeroText>
            Оптичният интернет на Vivacom е наличен в 30 града в България, като
            повече от 1 400 000 домакинства вече са тествали неговата бързина и
            качество.
          </HeroText>
        </HeroTextContainer>
      </HeroWrapper>
      <TestimonialsWrapper>
        <TestimonialsContainer>
          <TestimonialContent>
            <TestimonialRow>
              <TestimonialH2>
                Сигурност и стабилност, <br /> дори и при лошо време!
              </TestimonialH2>
              <Line />
              <TestimonialP>
                Независимо какво е времето навън, оптичният интернет на Vivacom
                осигурява бърз и стабилен интернет и постоянна връзка.
                Продължавате да се наслаждавате на увлекателното телевизионно
                съдържание, сърфирате, стриймвате или работите без притеснения
                или каквито и да е прекъсвания на услугата.
              </TestimonialP>
              {/* HERO ENDS */}
            </TestimonialRow>
            <GreenLine />
            <TestimonialRow>
              <TestimonitalVideoContainer>
                <TestimonialVideo>
                  <source src={testimonialVideo} type="video/mp4" />
                </TestimonialVideo>
              </TestimonitalVideoContainer>
            </TestimonialRow>
          </TestimonialContent>
          <TestimonialContent>
            <TestimonialRow>
              <TestimonialH2>
                Сигурност и стабилност, <br /> дори и при лошо време!
              </TestimonialH2>
              <Line />
              <TestimonialP>
                Независимо какво е времето навън, оптичният интернет на Vivacom
                осигурява бърз и стабилен интернет и постоянна връзка.
                Продължавате да се наслаждавате на увлекателното телевизионно
                съдържание, сърфирате, стриймвате или работите без притеснения
                или каквито и да е прекъсвания на услугата.
              </TestimonialP>
            </TestimonialRow>
            <GreenLine />
            <TestimonialRow>
              <TestimonitalVideoContainer>
                <TestimonialVideo>
                  <source src={testimonialVideo} type="video/mp4" />
                </TestimonialVideo>
              </TestimonitalVideoContainer>
            </TestimonialRow>
          </TestimonialContent>
        </TestimonialsContainer>
      </TestimonialsWrapper>
      {/* TESTIMONIAL ENDS */}
      <ServiceContainer>
        <ServiceCart>
          <ServiceCartTitle>ЧАСТНИ КЛИЕНТИ</ServiceCartTitle>
          <ServiceCartImage
            src="/cartService1.png"
            alt="Private Service Cart"
            loading="lazy"
          />
          <GreenLine className="bottomLine" />
          <ButtonContainer>
            <Button>Виж повече</Button>
          </ButtonContainer>
        </ServiceCart>
        <ServiceCart>
          <ServiceCartTitle>БИЗНЕС КЛИЕНТИ</ServiceCartTitle>
          <ServiceCartImage
            src="/cartService2.png"
            alt="Bussines Service Cart"
            loading="lazy"
          />
          <GreenLine className="bottomLine" />
          <ButtonContainer>
            <Button>Виж повече</Button>
          </ButtonContainer>
        </ServiceCart>
      </ServiceContainer>
      {/* SERVICE CART ENDS */}
      <AdditionalInfo>
        <p>
          Промо цена 1 лев/мес. за първите 2 мес. за EON LIGHT (станд. 30.90
          лв./мес.) и за първите 4 м. за EON FULL (станд. 36.90 лв./мес.) и EON
          PREMIUM (станд.70.90 лв./мес.) важи за нови и същ. абонати при скл. на
          24-м. договор до 30.11.2023 г. Цените са с ДДС. Бизнес клиентите
          заплащат цени без ДДС. Скорости до 10 Gbps в части от София, Пловдив,
          Стара Загора, Бургас и Варна.
        </p>
      </AdditionalInfo>
      {/* ADDITIONAL INFO ENDS */}
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
