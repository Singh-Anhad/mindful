import React, { useState } from "react";

// Simulated radio stations with frequencies
const radioStations = [
  { name: "Rock FM", frequency: "101.1 MHz" },
  { name: "Jazz FM", frequency: "98.4 MHz" },
  { name: "Pop Hits", frequency: "105.9 MHz" },
  { name: "Classical FM", frequency: "99.5 MHz" },
  { name: "Hip Hop Beats", frequency: "107.3 MHz" },
];

function RadioPlayer() {
  const [selectedStation, setSelectedStation] = useState(null);

  const handleStationChange = (station) => {
    setSelectedStation(station);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Tune Into Your Favorite Station</h2>

      <div className="space-y-4">
        {radioStations.map((station) => (
          <label key={station.frequency} className="flex items-center space-x-2">
            <input
              type="radio"
              value={station.name}
              checked={selectedStation && selectedStation.name === station.name}
              onChange={() => handleStationChange(station)}
              className="form-radio h-5 w-5 text-blue-600"
            />
            <span className="text-gray-700 font-semibold">
              {station.name} ({station.frequency})
            </span>
          </label>
        ))}
      </div>

      {selectedStation && (
        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold">
            Now Playing: <span className="text-blue-600">{selectedStation.name}</span>
          </h3>
          <p className="text-gray-500">{selectedStation.frequency}</p>
        </div>
      )}
    </div>
  );
}

export default RadioPlayer;
