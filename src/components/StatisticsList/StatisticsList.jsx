import PropTypes from 'prop-types';
import {
  StatisticsListEl,
  StatisticsItem,
  StatisticsLabel,
  StatisticsValue,
} from 'components/StatisticsList/StatisticsList.styled';

export const StatisticsList = ({ stats }) => {
  return (
    <StatisticsListEl>
      {stats.map(stat => (
        <StatisticsItem key={stat.id}>
          <StatisticsLabel>{stat.label}</StatisticsLabel>
          <StatisticsValue>{stat.percentage}%</StatisticsValue>
        </StatisticsItem>
      ))}
    </StatisticsListEl>
  );
};

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
