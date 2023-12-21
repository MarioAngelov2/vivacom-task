import styled from "styled-components";

export const Footer = styled.footer`
  background-color: #202324;
  color: #fff;
  padding: 3rem;
`;

export const FooterContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
`;

export const FooterUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const FooterLi = styled.li`
  list-style: none;
  font-size: 0.9rem;
  font-weight: 400;
  color: #abacad;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #fff;
    transition: 0.3s ease-in-out;
  }
`;

export const FooterImageContainer = styled.li`
  display: flex;
  max-width: 130px;
  width: 100%;
  list-style: none;
  cursor: pointer;
`;

export const FooterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;