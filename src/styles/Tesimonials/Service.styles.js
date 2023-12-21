import styled from "styled-components";

export const ServiceContainer = styled.ul`
  max-width: 1180px;
  width: 80%;
  margin: 0 auto;
  margin-top: 6rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ServiceCart = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  background-color: #f2f2f2;
  border-radius: 8px;
  transition: 0.3s ease-in-out;

  &:hover {
    transition: 0.3s ease-in-out;
    transform: scale(1.02);
  }
`;

export const ServiceCartTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  background-color: #07fab3;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
`;

export const ServiceCartImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2.5rem;
`;

export const Button = styled.button`
  width: 10rem;
  height: 3rem;
  background-color: #0033ff;
  color: #fff;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
`;

export const AdditionalInfo = styled.div`
  max-width: 1280px;
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;