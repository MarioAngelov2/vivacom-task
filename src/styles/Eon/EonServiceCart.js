import styled from "styled-components";

export const ServiceCartSection = styled.section`
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 4rem;
`;

export const ServiceCartContainer = styled.div`
  max-width: 1280px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4rem;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ServiceCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  background-color: #f2f2f2;
  border-radius: 2px;
`;

export const ServiceCartBanner = styled.img`
  max-width: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ServiceCartImage = styled.img`
  max-width: 450px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-top: 1rem;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 1100px) {
    max-width: 350px;
  }

  @media screen and (max-width: 870px) {
    max-width: 300px;
  }

  @media screen and (max-width: 768px) {
    max-width: 400px;
    margin-top: 1rem;
  }
`;

export const Button = styled.button`
  color: #000;
  border: none;
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  border: 1px solid #000;
  border-radius: 5px;
  margin-bottom: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #000;
    color: #fff;
    transition: all 0.3s ease-in-out;
  }
`;
