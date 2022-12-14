import PropTypes from 'prop-types';
import {
  SectionStatistic,
  StatList,
  Title,
  StatItem,
  StatLabel,
  StatPercentage,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <SectionStatistic>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <StatLabel>{label}</StatLabel>
            <StatPercentage>{percentage}%</StatPercentage>
          </StatItem>
        ))}
      </StatList>
    </SectionStatistic>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
