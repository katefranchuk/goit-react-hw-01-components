import PropTypes from 'prop-types';
import { StatisticsList } from '../StatisticsList/StatisticsList';
import data from '../../data/data.json';
import { StatisticsSection, StatisticsTitle } from './Statistics.styled';

export const Statistics = ({ title }) => {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsList stats={data} />
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};
