import { adressT } from "@/types/geocoding";

export const getCity = async (param?: adressT) => {
    // const { street, city } = param;
    const street = encodeURIComponent(param?.street ||  "Engenheiro Nelson José Janoni");
    const city = encodeURIComponent(param?.city || "São João Del Rei");
    const apiKey = '57fc4d16afaa46d193456cb0ce14fb70'

    const url = `https://api.geoapify.com/v1/geocode/search?housenumber=${param?.houseNumber || 618}&street=${street}&postcode=${param?.postCode || 36307734}&city=${city}&format=json&apiKey=${apiKey}`;

    const res = await fetch(url).then(res => res.json())
    return res;
}
