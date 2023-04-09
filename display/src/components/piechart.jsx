import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

export default function PieChart(props) {
  const info = props.name.length > 25 ? "WALC" : props.name;
  const percent = props.percent;

  let pathColor;
  if (percent < 0.34) {
    pathColor = '#20cf97';
  } else if (percent < 0.67) {
    pathColor = '#20aaea';
  } else {
    pathColor = '#ffa412';
  }

  return (
    <div style={{ width: '33%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ textAlign: 'center', color: '#4075C9' }}>{info}</h1>
      <div style={{ width: '70%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgressbar
  value={percent * 100}
  text={`${Math.round(percent * 100)}%`}
  styles={buildStyles({
    textColor: 'black',
    trailColor: '#d6d6d6',
    pathColor: pathColor, // add this line to use the pathColor variable
    // add the gapSize property

  })}
/>
      </div>
    </div>
  );
}
