import styled from 'styled-components';

export const UserProfile = styled.div`
  min-width: 254px;
  box-shadow: ${props => props.theme.shadows.shadow};
  border-radius: ${props => props.theme.radii.normal};

  @media (min-width: 768px) {
    min-width: 320px;
  }
`;

export const UserDescription = styled.div`
  padding-block: 40px;
  text-align: center;
  background-color: ${props => props.theme.colors.whiteBackground};
`;
export const UserAvatar = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: ${props => props.theme.space[4]}px;
  border-radius: ${props => props.theme.radii.round};
  border: 1px solid ${p => p.theme.colors.secondaryText};
`;
export const UserName = styled.p`
  font-size: ${props => props.theme.fontSizes[3]}px;
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-bottom: ${props => props.theme.space[3]}px;
  color: ${props => props.theme.colors.primaryText};
`;
export const UserTag = styled.p`
  font-size: ${props => props.theme.fontSizes[2]}px;
  margin-bottom: ${props => props.theme.space[3]}px;
  font-weight: ${props => props.theme.fontWeights.semiBold};
  color: ${props => props.theme.colors.secondaryText};
`;
export const UserLocation = styled.p`
  font-size: ${props => props.theme.fontSizes[2]}px;
  font-weight: ${props => props.theme.fontWeights.semiBold};
  color: ${props => props.theme.colors.secondaryText};
`;
export const UserStatsList = styled.ul`
  display: flex;
  border-top: 1px solid ${props => props.theme.colors.secondaryText};

  > li:not(:last-child) {
    border-right: 1px solid ${props => props.theme.colors.secondaryText};
  }
`;
export const UserStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.333%;
  padding-block: ${props => props.theme.space[4]}px;
`;
export const StatsLabel = styled.span`
  margin-bottom: ${props => props.theme.space[3]}px;
  font-weight: ${props => props.theme.fontWeights.semiBold};
  color: ${props => props.theme.colors.secondaryText};
`;
export const StatsQuantity = styled.span`
  color: ${props => props.theme.colors.primaryText};
  font-weight: ${props => props.theme.fontWeights.bold};
`;

