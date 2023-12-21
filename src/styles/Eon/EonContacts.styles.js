import styled from "styled-components";

export const ContactUsSection = styled.section`
  display: flex;
  max-width: 1280px;
  width: 90%;
  margin: 0 auto;
  margin-top: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
`;

export const ContactUsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }
`;

export const ContactUsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  width: 100%;
`;

export const ContactLogo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 4rem;
  border: 3px solid #000;
  border-radius: 50%;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ContactTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 300;
  margin-top: 1.2rem;
`;

export const ContactText = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  text-align: center;
`;
