// 256 x 375
import styled from 'styled-components';
import { CtaButton } from '../../CTA/styles/CTAStyles.js';

export const BoxContainer = styled.div`
  height: 375px;
  width: 256px;
  border: 1px solid black;
  margin: 30px;
  margin-bottom: 100px;
`;

export const BoxButton = styled(CtaButton)`
  width: 185px;
  height: 52px;
  margin-top: 60px;
`;

export const H3 = styled.h3`
  font-size: 1.32rem;
  font-weight: bold;
  padding: 10px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const Copy = styled.p`
  font-size: 1.1rem;
  padding: 10px;
`;
