import styled from 'styled-components';

const MainWrapper = styled.div`
  max-width: 1000px;
  transform: translate(0px, 50px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 85vh;
  height: 100%;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const InfoWrapperTwo = styled.ul`
  display: flex;
  margin-top: 40px;
  justify-content: space-evenly;
  border: 1px solid black;
`;

const MainHeader = styled.h2`
  font-family: Helvetica;
  text-decoration: underline;
  margin-bottom: 30px;
`;

const ContentHeader = styled.h3`
  font-family: Helvetica;
  margin-bottom: 30px;
`;

const Invoice = styled.ul`
  font-family: Helvetica;
`;

const ButtonWrapper = styled.div`
  width: 400px;
  margin: 0 auto;
`;

export {
  MainWrapper,
  MainHeader,
  InfoWrapper,
  InfoWrapperTwo,
  ContentHeader,
  ButtonWrapper,
  Invoice,
};
