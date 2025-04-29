type coordsT = {
  accuracy: number;
  altitude: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;
  latitude: number;
  longitude: number;
  speed: number | null;
} | undefined;

type placesT = {
  features: [{
    geometry: {
      coordinates: number[];
      type: string;
    },
    properties: {
      address_line1: string;
      address_line2: string;
      categories: string[]
      city: string;
      country: string;
      country_code: string;
      county: string;
      datasource: object;
      details: [];
      distance: number;
      formatted: string;
      iso3166_2: string
      lat: number;
      lon: number
      municipality: string;
      place_id: string;
      postcode: string;
      region: string;
      state: string
      state_code: string;
      street: string;
      suburb: string;
    } 
  }];
  type: string;
}

export type {
  coordsT,
  placesT
}