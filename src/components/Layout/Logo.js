import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  max-width: 32px;
`;

export const Logo = () => (
  <Img src="/images/logo.svg" />
);
