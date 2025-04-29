import { coordsT } from "@/types/places";

export const getPlaces = async (coords: coordsT) => {
    const { longitude, latitude } = coords;
    const apiUrl = `https://api.geoapify.com/v2/places?categories=entertainment,catering&filter=circle:${longitude},${latitude},5000&bias=proximity:${longitude},${latitude}&limit=10&lang=pt&apiKey=57fc4d16afaa46d193456cb0ce14fb70`
    const res = await fetch(apiUrl).then(res => res.json())
    return res;
}
