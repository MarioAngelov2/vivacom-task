import styled from "styled-components";

export const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding: 2rem 0;
`;

export const HeroTitle = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  text-align: center;
  margin-top: 1.3rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const HeroImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const EonImage = styled.img`
  max-width: 990px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
