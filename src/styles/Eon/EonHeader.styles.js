import styled from 'styled-components';

export const EonHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background-color: #fff;
  height: 3rem;
`;

export const EonList = styled.ul`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 0 1rem;
`;

export const EonListItem = styled.li`
  font-size: 0.9rem;
  font-weight: 400;
  color: #000;
  cursor: pointer;

  &:last-child {
    color: #0033ff;
  }

  @media screen and (max-width: 970px) {
    display: none;
  }
`;

export const EonMobileDropdown = styled.div`
  display: none;

  @media screen and (max-width: 970px) {
    display: flex;
  }
`;