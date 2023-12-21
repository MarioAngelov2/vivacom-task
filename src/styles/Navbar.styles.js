import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  background-color: #000;
  padding: 1rem;
  display: flex;
  justify-content: between;
  align-items: center;
  color: #fff;
  height: 3.4rem;

  @media (max-width: 1180px) {
    height: 7.7rem;
  }

  @media (max-width: 768px) {
    height: 3.6rem;
  }

  @media (max-width: 425px) {
    height: 7.8rem;
    padding: 0;
  }
`;

export const NavContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1180px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: row;
  }

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const Row2 = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Row1 = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1180px) {
    justify-content: flex-start;
    margin-bottom: 0.9rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 0rem;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    padding-bottom: 1rem;
  }
`;

export const NavIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15%;
  margin-left: 1.4rem;

  @media (max-width: 1180px) {
    width: calc(100% - 1rem);
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 0.4rem;
  }

  @media (max-width: 768px) {
    margin-top: 0rem;
  }

  @media (max-width: 425px) {
    width: calc(100% - 2rem);
    padding-bottom: 1rem;
  }
`;

export const NavItem = styled.li`
  list-style: none;
  font-size: 0.9rem;
  font-weight: 400;
  cursor: pointer;
`;

export const NavItem2 = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9rem;
  height: 3.4rem;
  list-style: none;
  font-size: 0.9rem;
  font-weight: 400;
  cursor: pointer;

  &:first-child {
    color: #0033ff;
    background-color: #fff;
  }

  &:last-child {
    color: #fff;
    background-color: #0033ff;
  }

  @media (max-width: 1180px) {
    height: 2.4rem;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;
