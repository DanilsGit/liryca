import { useEffect, useState } from "react";
import { getCountries } from "../../auth/api/apis";

export const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCountriesData = async () => {
    setLoading(true);
    try {
      const res = await getCountries();
      const data = res.data;
      const countries = data
        .map((country: any) => ({
          name: country.name.common,
          code: country.cca2,
        }))
        .sort((a, b) => a.name.localeCompare(b.name));
      setCountries(countries);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getCountriesData();
  }, []);

  return { countries, loading };
};
