import { Alert, StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [getSearchResults, results] = useResults();

  const filterResultsByPrice = (price) => {
    //price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  if (results.length === 0) {
    return null;
  }

  return (
    <View style={tw`bg-white h-full px-2`}>
      <SearchBar
        searchTerm={searchTerm}
        onSearchSubmit={() => getSearchResults(searchTerm)}
        onSearchChange={setSearchTerm}
      />

      <ScrollView>
        <ResultList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultList title="Bit Pricer" results={filterResultsByPrice("$$")} />
        <ResultList title="Big Spender" results={filterResultsByPrice("$$$")} />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
