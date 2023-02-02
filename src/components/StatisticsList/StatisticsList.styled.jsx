import styled from 'styled-components';
import { gerenerateRandomColor } from 'components/Profile/utils/colorGenerator';

export const StatisticsListEl = styled.ul`
  display: flex;
`;
export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-block: ${props => props.theme.space[3]}px;
  background-color: ${ gerenerateRandomColor };
  color: ${props => props.theme.colors.whiteText};
`;
export const StatisticsLabel = styled.span`
  margin-bottom: ${props => props.theme.space[3]}px;
  font-size: ${props => props.theme.fontSizes[1]}px;
`;
export const StatisticsValue = styled.span`
  font-size: ${props => props.theme.fontSizes[3]}px;
  font-weight: ${props => props.theme.fontWeights.semiBold};
`;
