export const Statistics = ({ items }) => {
    return (
        <section class="statistics">
        <h2 class="title">Upload stats</h2>
      
        <ul class="stat-list">
            {items.map(item =>(
          <li key={item.id} class="item">
            <span class="label">{item.label}</span>
            <span class="percentage"> {item.percentage}%</span>
          </li>
          ))}
        </ul>
      </section>)
};