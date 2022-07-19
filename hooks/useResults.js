import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);

  //this block of code gets called only once
  useEffect(() => {
    console.log("this is init");
    getSearchResults("pizza");
  }, []);

  const getSearchResults = async (term) => {
    console.log("this is api call");
    // params will be appended with the url
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: term,
          location: "san francisco",
        },
      });
      setResults(response.data.businesses);
    } catch (e) {
      Alert.alert("Error!", "Something went wrong.");
    }
  };

  return [getSearchResults, results];
};
