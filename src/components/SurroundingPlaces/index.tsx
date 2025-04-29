"use client";
import { useEffect, useState } from "react";
import { getPlaces } from "../../api/places";
import { useGeolocated } from "react-geolocated";
import { placesT } from "@/types/places";

export default function SurroundingPlaces({city}) {
  const [places, setPlaces] = useState<placesT>()
  const {
    coords,
    // isGeolocationAvailable,
    // isGeolocationEnabled,
    // positionError,
  } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
  });


  useEffect(() => {
    // if (!isGeolocationAvailable ? console.log('Não suportado') : null)
    // if (!isGeolocationEnabled ? console.log('Você negou autorização') : null)
    // if (positionError ? positionError.message : null)
    console.log(city)
    
    const func = async () => {
      if (coords) {
        const placesByCoord = await getPlaces(coords);
        setPlaces(placesByCoord);
      }
    };

    func();
  }, [coords]);

  return (
    <div className="">
      <h1>{city.results[0].city}</h1>
      <br></br>
      {places && places.features.length > 0 ? (
        <ul>
            {places.features.map((place) => (
                <div key={Math.random()}>
                    <li>{place.properties.address_line1}</li>
                    <li>{place.properties.address_line2}</li>
                    <li>{place.properties.country}</li>
                    <li>{place.properties.state}</li>
                </div>
            ))}
        </ul>
      ) : (
        <h1></h1>
      )}
    </div>
  );
}
