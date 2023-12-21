import styled from "styled-components";

export const MainHeader = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: between;
  align-items: center;
  color: #000;
  height: 4.6rem;

  @media (max-width: 768px) {
    height: 6.6rem;
  }

  @media (max-width: 618px) {
    height: 4.4rem;
  }
`;

export const MainHeaderContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  @media (max-width: 618px) {
    flex-direction: row;
    
    align-items: start;
    gap: 0.5rem;
  }
`;

export const MainHeaderMobile = styled.div`
  display: none;

  @media (max-width: 618px) {
    display: block;
  }
`

export const MainHeaderRow = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 618px) {
    display: none;
  }
`;

export const MainHeaderItem = styled.li`
  list-style: none;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;

  &.borderedBtn {
    border: 1.6px solid #000;
    padding: 0.5rem 1rem;
    transition: 0.3s ease-in-out;

    &:hover {
      color: #0033ff;
      transition: 0.3s ease-in-out;
    }
  }
`;

export const HeroWrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeroImageContainer = styled.div`
  width: 100%;
  height: 70%;

  @media (max-width: 1280px) {
    max-width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroTextContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 12rem;
  display: flex;
  margin-top: 4.5rem;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  padding: 0 1rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 95%;
    height: 9rem;
    margin-top: 2rem;
  }
`;

export const HeroText = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
