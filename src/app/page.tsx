import SurroundingPlaces from "@/components/SurroundingPlaces";
import { getCity } from "../api/geocoding";

const Home: React.FC = async () => {

  const handleCity = async () => {
    const city = await getCity();

    return city;
  }

  const city = await handleCity()

  return (
    <div className="">
      <SurroundingPlaces city={city} />
    </div>
  );
}

export default Home;