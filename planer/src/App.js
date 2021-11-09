import React from 'react';
import './App.css';

const locations = [
  {
    id: 1,
    name: 'Przylądek Leeuwin',
    coordinates: '34°22′35″S 115°08′11″E',
    longitude: 115.08,
    latitude: 34.22,
    loPrew:0,
    laPrew:0,
    arrival: '11.12.2021',
    img: 'https://cdn.getyourguide.com/img/tour/5e1d35226fa52.jpeg/146.jpg'
  },
  {
    id: 2,
    name: 'Melbourne',
    coordinates: '37°49′S 144°58′E',
    longitude: 144.58,
    latitude: 37.49,
    loPrew: 115.08,
    laPrew: 34.22,
    arrival: '18.12.2021',
    img: 'https://galeria.bankier.pl/p/d/b/eda900cce2ca94-948-568-0-13-1737-1042.jpg'
  },
  {
    id: 3,
    name: 'wellington',
    coordinates: '41°17′20″S 174°46′38″E',
    longitude: 174.46,
    latitude: 41.17,
    loPrew: 144.58,
    laPrew: 37.49,
    arrival: '25.12.2021',
    img: 'https://thumbs.dreamstime.com/b/wellington-nowa-zelandia-cbd-widok-z-lotu-ptaka-103504291.jpg'
  },
  {
    id: 4,
    name: 'Rapa Nui',
    coordinates: '27°09′17″S 109°25′56″W',
    longitude: 109.25,
    latitude: 27.09,
    loPrew: 174.46,
    laPrew: 41.17,
    arrival: '25.01.2022',
    img: 'https://as2.ftcdn.net/v2/jpg/00/74/69/43/500_F_74694307_u04A2Qz3ctifjuWOjBodT2uBlUzAA4fu.jpg'
  },
  {
    id: 5,
    name: 'Lima',
    coordinates: '12°03′S 77°02′W',
    longitude: 77.02,
    latitude:12.03,
    loPrew: 109.25,
    laPrew: 27.09,
    arrival: '11.02.2022',
    img: 'https://39ag5r37ej175g8ao209xw3t-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/Peru_bg_Lima_Main_Square.jpg'
  },
];

function App() {
  return(
    <article>
      <section>
        <h1>Task 2</h1>
        <PrintDistance></PrintDistance>
      </section>
      <section>
        <h1>Task 1</h1>
        {locations.map((location) => {
          return(
            <Location key={location.id}{...location}></Location>
          );
        })}
      </section>
    </article>
  );
}

const PrintDistance = () =>
{
  return( 
  <div className='location'>
    <input></input>
    <input></input>
    <button>Measure</button>
  </div>
  );
}

const Location = (props) =>
{
  const {name, coordinates, longitude, latitude, laPrew, loPrew, arrival, img} = props;
  return (
    <div className='location'>
      <div className='insideTheBox'>
        <h1>{name}</h1>
        <h3>{coordinates}</h3>
        <div className='wrap'>
          <h3>Distance between current and previous location (in nautical miles): {toNauticalMiles(measureDistance(laPrew, loPrew, latitude, longitude))}</h3>
        </div>
        <p>Arrival date: {arrival}</p>
      </div>
      <hr/>
      <img className='pic' src={img} alt="landscape"></img>
    </div>
  );
}

function measureDistance(lat1,lon1,lat2,lon2) {
  var R = 6371;
  var dLat = deg2rad(lat2-lat1);
  var dLon = deg2rad(lon2-lon1); 
  if(lat1!==0)
  {
    var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    return d;
  }
  return 0;
}

function deg2rad(deg) {
  return deg * (Math.PI/180);
}

function toNauticalMiles(distance)
{
  if(distance!==0)
  {
    return distance * 0.539957;
  }
  return (<h4 className='start'>This is the starting location</h4>);
}

export default App;