import styled from 'styled-components';

export const StatisticsSection = styled.section`
  min-width: 254px;
  margin-block: ${props => props.theme.space[4]}px;
  background-color: ${props => props.theme.colors.whiteBackground};
  box-shadow: ${props => props.theme.shadows.shadow};
  border-radius: ${props => props.theme.radii.normal};
  overflow: hidden;

  @media (min-width: 768px) {
    min-width: 320px;
  }
`;
export const StatisticsTitle = styled.h2`
  padding-block: ${props => props.theme.space[5]}px;
  text-align: center;
  font-size: ${props => props.theme.fontSizes[3]}px;
  font-weight: ${props => props.theme.fontWeights.semiBold};
  text-transform: uppercase;
  color: ${props => props.theme.colors.secondaryText};
`;
