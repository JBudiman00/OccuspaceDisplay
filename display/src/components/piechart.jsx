import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

export default function PieChart (props) {
    const info = props.name;
    const percent = props.percent;

    return (
        <div style={{ width: '33%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ textAlign: 'center' }}>{info}</h1>
            <div style={{ width: '70%', height: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgressbar
                value={percent * 100}
                text={`${Math.round((percent) * 100)}%`}
                styles={buildStyles({
                    textColor: 'black',
                    pathColor: `rgba(100, 0, 0, ${percent})`,
                    trailColor: '#d6d6d6',
                    })}
            />
            </div>
        </div>
    );
}