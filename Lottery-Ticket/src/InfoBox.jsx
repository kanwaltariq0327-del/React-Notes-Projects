export default function InfoBox() {
  let info = {
    condition: "Clouds",
    feelsLike: 31.94,
    humidity: 69,
    temp: 28.71,
    tempMax: 28.71,
    tempMin: 28.71,
    windSpeed: 3.13 + "kmh",
  };

  return (
    <div>
      <h3>Weather</h3>
      {info}
    </div>
  );
}
