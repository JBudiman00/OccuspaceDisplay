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

  // get the current time
  const now = new Date();
  const currentHour = now.getHours();

  // check if current time is between 10 pm and 8 am
  let isOpen = true;
  let subtext = "";

  if (info === "HSSE Library") {
    isOpen = currentHour >= 8 && currentHour < 24;
    subtext = "8am - 12am";
  } else if (info === "Parrish Library") {
    isOpen = currentHour >= 8 && currentHour < 24;
    subtext = "8am - 12am";
  } else if (info === "Math Library") {
    isOpen = currentHour >= 8 && currentHour < 22;
    subtext = "8am - 10pm";
  } else if (info === "WALC" || info === "Hicks Library") {
    subtext = "Open 24/7";
  }

  return (
    <div style={{ width: '33%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: '#4075C9' }}>{info}</h1>
        <div style={{ fontWeight: 'bold' }}>
          <p>{subtext}</p>
        </div>
      </div>
      <div style={{ width: '70%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
        <CircularProgressbar
          value={isOpen ? percent * 100 : 0}
          text={isOpen ? `${Math.round(percent * 100)}%` : "Closed"}
          styles={buildStyles({
            textColor: 'black',
            trailColor: '#d6d6d6',
            pathColor: isOpen ? pathColor : '#707070',
          })}
        />
      </div>
    </div>
  );
}
