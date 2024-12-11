import { useCallback, useState } from "react";
import { dataCountry, getCountries } from "../../auth/api/apis";
import { useFocusEffect } from "expo-router";

export const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCountriesData = useCallback(async () => {
    setLoading(true);
    try {
      // const res = await getCountries();
      // const data = res.data;
      // const countries = data
      //   .map((country: any) => ({
      //     name: country.name.common,
      //     code: country.cca2,
      //   }))
      //   .sort((a, b) => a.name.localeCompare(b.name));
      setCountries(dataCountry);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, []);

  useFocusEffect(
    useCallback(() => {
      getCountriesData();
    }, [getCountriesData])
  );

  return { countries, loading };
};
