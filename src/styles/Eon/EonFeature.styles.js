import styled from "styled-components";

export const FeatureOneSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding-bottom: 2rem;
  position: relative;
`;

export const FeatureOneContainer = styled.div`
  max-width: 1280px;
  width: 90%;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  margin-top: 5rem;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const FeatureOneDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1rem;
  width: 100%;

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

export const FeatureOneTitleH2 = styled.h2`
  font-size: 1.6rem;
  font-weight: 200;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const FeatureOneTitleH3 = styled.h3`
  font-size: 1.3rem;
  font-weight: 200;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const FeatureOneParagraph = styled.p`
  font-size: 1rem;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const FeatureOneImageContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;

  &.centerdImg {
    justify-content: center;
  }

  @media screen and (max-width: 1100px) {
    justify-content: center;
  }
`;

export const FeatureOneImage = styled.img`
  max-width: 541px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FeatureTwoImage = styled.img`
  min-width: 100%;
  max-width: 1920px;
  max-height: 600px;
  height: 100%;
  object-fit: cover;
`;

export const ContainerOverImage = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 33.33%;
  width: 80%;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ButtonOverImage = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #000;
    transition: all 0.3s ease-in-out;
  }
`;