import React from "react";
import styled from "styled-components";

const ServicesPage = () => {
  return (
    <Container>
      <Service>
        <ServiceIcon>
          <i className="fas fa-paint-brush"></i>
        </ServiceIcon>
        <ServiceTitle>Categories</ServiceTitle>
        <ServiceDescription>
          You can choose to practice the questions using the category tab as there you could 
          find a breakdown of all
        </ServiceDescription>
      </Service>
      <Service>
        <ServiceIcon>
          <i className="fas fa-chart-line"></i>
        </ServiceIcon>
        <ServiceTitle>Mock Tests</ServiceTitle>
        <ServiceDescription>
          Practice Taxi moc tests to ace your skills
        </ServiceDescription>
      </Service>
      <Service>
        <ServiceIcon>
          <i className="fab fa-facebook-square"></i>
        </ServiceIcon>
        <ServiceTitle>Practice Taxi Theory</ServiceTitle>
        <ServiceDescription>
        Learn the taxi theory abd many other rules here
        </ServiceDescription>
      </Service>
      
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const Service = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: center;
`;

export default ServicesPage;
