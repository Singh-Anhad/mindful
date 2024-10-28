import React, { useState, useEffect } from "react";
import { Howl } from "howler";
import Navbar from '../component/Navbar'; 
import Footer from '../component/Footer'; 

const radioStations = [
  {
    name: "Rock FM",
    frequency: "101.1 MHz",
    streamUrl: "https://icast.connectmedia.hu/5301/live.mp3//", 
    website: "https://icast.connectmedia.hu/5301/live.mp3//", 
  },
  {
    name: "Jazz FM",
    frequency: "98.4 MHz",
    streamUrl: "https://streaming.radio.co/jazz-fm/listen",
    website: "https://icast.connectmedia.hu/5301/live.mp3//",
  },
  {
    name: "Pop Hits",
    frequency: "105.9 MHz",
    streamUrl: "https://media-ice.musicradio.com/PopHitsMP3",
    website: "https://icast.connectmedia.hu/5301/live.mp3//",
  },
  {
    name: "Classical FM",
    frequency: "99.5 MHz",
    streamUrl: "https://media-ice.musicradio.com/ClassicFMMP3",
    website: "https://icast.connectmedia.hu/5301/live.mp3//",
  },
  {
    name: "Hip Hop Beats",
    frequency: "107.3 MHz",
    streamUrl: "https://media-ice.musicradio.com/HipHopBeatsMP3",
    website: "https://icast.connectmedia.hu/5301/live.mp3//",
  },
];

function RadioPlayer() {
  const [selectedStation, setSelectedStation] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [sound, setSound] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    return () => {
      if (sound) {
        sound.stop();
      }
    };
  }, [sound]);

  const handleStationChange = (station) => {
    if (sound) {
      sound.stop();
    }

    const newSound = new Howl({
      src: [station.streamUrl],
      volume: volume,
      html5: true,
      onplay: () => setIsPlaying(true),
      onpause: () => setIsPlaying(false),
      onend: () => setIsPlaying(false),
      onloaderror: (id, err) => console.error("Error loading sound", err),
      onplayerror: (id, err) => console.error("Error playing sound", err),
    });

    setSound(newSound);
    setSelectedStation(station);
    setCurrentTrack("Now Playing: " + station.name);
    newSound.play();
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
  };

  const handleStop = () => {
    if (sound) {
      sound.stop();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (sound) {
      sound.volume(newVolume);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-900 text-white">
        <h2 className="text-4xl font-bold mt-10">Tune Into Your Favorite Station</h2>

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
              <span className="text-lg font-semibold">
                {station.name} ({station.frequency})
              </span>
            </label>
          ))}
        </div>

        {selectedStation && (
          <div className="mt-6 text-center">
            <h3 className="text-lg font-semibold">{currentTrack}</h3>
            <p className="text-gray-300">{selectedStation.frequency}</p>
            {selectedStation.website && (
              <a
                href={selectedStation.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 mt-4 block"
              >
                Visit {selectedStation.name} Website
              </a>
            )}
          </div>
        )}

        <div className="mt-8 flex space-x-4">
          <button
            onClick={handlePlayPause}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button
            onClick={handleStop}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Stop
          </button>
        </div>

        <div className="mt-8 w-1/2">
          <label className="block mb-2">Volume: {Math.round(volume * 100)}%</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RadioPlayer;
