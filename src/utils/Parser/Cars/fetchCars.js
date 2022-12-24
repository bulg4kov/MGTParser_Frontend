import stationData from "../../../data/Parser/Cars/cars.json";

const storage = window.localStorage;

function getFromLocal(id) {
  let stored = storage.getItem("carsStations");
  if (stored === null || stored === undefined || stored === "undefined") {
    return undefined;
  } else {
    stored = JSON.parse(stored);
  }
  const item = stored[id];
  return item !== undefined ? item : undefined;
}

function setToLocal(id, data) {
  let stored = storage.getItem("carsStations");
  if (stored === null || stored === undefined || stored === "undefined") {
    stored = {};
    stored[id] = data;
  } else {
    stored = JSON.parse(stored);
    stored[id] = data;
  }
  storage.setItem("carsStations", JSON.stringify(stored));
}

export default function fetchCars(id) {
  const valueFromLocal = getFromLocal(id);
  if (valueFromLocal !== undefined) {
    return valueFromLocal;
  }
  let firstStation = stationData[Math.floor(Math.random() * 1000)];
  let secondStation = stationData[Math.floor(Math.random() * 1000)];
  if (firstStation === undefined || secondStation === undefined) {
    console.log("recalculating stations");
    firstStation = stationData[Math.floor(Math.random() * 1000)];
    secondStation = stationData[Math.floor(Math.random() * 1000)];
  }
  setToLocal(id, [firstStation.StationName, secondStation.StationName]);
  return [firstStation.StationName, secondStation.StationName];
}
