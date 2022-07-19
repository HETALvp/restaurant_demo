import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";
import ResultCard from "./ResultCard";
import { useNavigation } from "@react-navigation/native";

const ResultList = ({ title, results }) => {
  const navigation = useNavigation();

  if (results.length === 0) {
    return null;
  }
  return (
    <View style={tw`mb-2`}>
      <Text style={tw`font-bold text-2xl`}>{title}</Text>

      <FlatList
        data={results}
        keyExtractor={(result) => result.id}
        horizontal // true
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("DetailsScreen", {
                  id: item.id,
                  name: item.name,
                })
              }
            >
              <ResultCard item={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ResultList;

const styles = StyleSheet.create({});
