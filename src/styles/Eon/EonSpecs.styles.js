import styled from "styled-components";

export const EonSpecs = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #000;
  color: #fff;
  padding-bottom: 2rem;
`;

export const EonSpecsContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Specs = styled.ul`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    width: 80%;
  }
`;

export const SpecIsLi = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SpecIsnfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 3rem;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const SpecTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const SpecTitle = styled.h5`
  font-size: 1rem;
  font-weight: 300;
`;

export const SpecParagraph = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
`;