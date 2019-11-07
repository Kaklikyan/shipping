
export const getCountries = async () => {
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    const result = await response.json();
    return result;
}

