import {StatsHeader, StatsList, StatsListItem} from "./Statistics.styled"

export const generateRandomColor = () => {
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return color;
  };

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <StatsHeader className="title">{title}</StatsHeader>}
      <StatsList className="stat-list">
        {stats.map(stat => (
          <StatsListItem key={stat.id} className="item" style={{ backgroundColor: generateRandomColor() }}>
            <span className="label">{stat.label}</span>
            <span className="percentage"> {stat.percentage}%</span>
          </StatsListItem>
        ))}
      </StatsList>
    </section>
  );
};
