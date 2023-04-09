import '../App.css'

export default function card({floorName,capacity,chart}){
    return (
    <div className = "card">
          <div className='card-row'>
            <div className='card-leftCol'>
              <p className='card-space'>{floorName}</p>
              <p className='card-capacity'>Capacity: {capacity}</p>
            </div>
            <div className='card-rightCol'>
            {chart} {/* change this to the actual value for that specific floor */}
            </div>
          </div>
        </div>
    );
}