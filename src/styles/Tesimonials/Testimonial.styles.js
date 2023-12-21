import styled from "styled-components";


export const TestimonialsWrapper = styled.section`
  max-width: 1280px;
  width: 90%;
  margin: 0 auto;
  margin-top: 6rem;
`;

export const TestimonialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  gap: 2rem;
`;

export const TestimonialContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  border-radius: 0.2rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    
  }
`;

export const TestimonialRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const TestimonialH2 = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 1.4rem;
`;

export const Line = styled.hr`
  margin-top: 1rem;
  width: 95%;
  border: 1px solid #000;
`;

export const TestimonialP = styled.p`
  font-size: 1rem;
  font-weight: 400;
  text-align: start;
  margin-top: 1rem;
  margin-bottom: 2rem;
  margin: 1rem;
`;

export const TestimonitalVideoContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const TestimonialVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const GreenLine = styled.hr`
  rotation: 90deg;
  border: 2px solid #07fab3;

  &.bottomLine {
    width: 100%;
  }
`;
