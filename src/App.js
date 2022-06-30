import React from 'react';
import { useDispatch } from 'react-redux';
import KeplerGl from 'kepler.gl';
import { addDataToMap } from 'kepler.gl/actions';
import './App.css';

const sampleTripData = {
  fields: [
    {name: 'tpep_pickup_datetime', format: 'YYYY-M-D H:m:s', type: 'timestamp'},
    {name: 'pickup_longitude', format: '', type: 'real'},
    {name: 'pickup_latitude', format: '', type: 'real'}
  ],
  rows: [
    ['2015-01-15 19:05:39 +00:00', 103.801770, 1.273607],
    ['2015-01-15 19:05:39 +00:00', 103.822990, 1.275041],
  ]
};

const sampleConfig = {
  visState: {
    filters: [
      {
        id: 'me',
        dataId: 'test_trip_data',
        name: 'tpep_pickup_datetime',
        type: 'timeRange',
        enlarged: true
      }
    ]
  }
};

function App() {
  const dispatch = useDispatch();
  setTimeout(() => {
    dispatch(
      addDataToMap({
        datasets: {
          info: {
            label: 'Sample Taxi Trips in New York City',
            id: 'test_trip_data'
          },
          data: sampleTripData
        },
        options: {
          centerMap: true,
          readOnly: false,
          keepExistingConfig: false
        },
        info: {
          title: 'Taro and Blue',
          description: 'This is my map'
        },
        config: sampleConfig
      })
    );
  }, 3000);
  return (
    <div className="App">
      <KeplerGl
        id="foo"
        mapboxApiAccessToken="pk.eyJ1IjoibW9naXRhIiwiYSI6ImNqbjF5amp6bzAwc3gza29qa3UxZmRnazgifQ.L7WReLrormiJyfsGiXDXpw"
        width={800}
        height={600}
      />
    </div>
  );
}

export default App;
