import './App.css';

const locations = [
  {
    id: 1,
    name: 'Przylądek Leeuwin',
    latitude: '115°08′11″E',
    longitude:'34°22′35″S',
    arrival: '11.12.2021',
  },
  {
    id: 2,
    name: 'Melbourne',
    latitude: '144°58′E',
    longitude:'37°49′S',
    arrival: '18.12.2021',
  },
  {
    id: 3,
    name: 'wellington',
    latitude: '174°46′38″E',
    longitude:'41°17′20″S',
    arrival: '25.12.2021',
  },
  {
    id: 4,
    name: 'Rapa Nui',
    latitude: '109°25′56″W',
    longitude:'27°09′17″S',
    arrival: '25.01.2022',
  },
  {
    id: 5,
    name: 'Lima',
    latitude: '	77°02′W',
    longitude:'12°03′S',
    arrival: '11.02.2022',
  },
];

function App() {
  return(
    <section className='List'>
      {locations.map((location) => {
        return(
          <Location key={location.id}{...location}></Location>
        );
      })}
    </section>
  );
}

const Location = (props) =>
{
  const {name, latitude, longitude, arrival} = props;
  return (
    <div className='location'>
      <h1>{name}</h1>
      <h3>{latitude} {longitude}</h3>
      <br></br>
      <p>Arrival date: {arrival}</p>
    </div>
  );
}

export default App;
