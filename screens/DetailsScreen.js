import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";
import tw from "twrnc";

const DetailsScreen = ({ route }) => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    try {
      const response = await yelp.get(`/${route.params.id}`);

      setDetails(response.data.photos);
    } catch (err) {}
  };

  if (!details) {
    return null;
  }

  return (
    <View style={tw`p-5`}>
      <Text style={tw`font-semibold text-lg text-center mb-2`}>
        {route.params.name}
      </Text>
      <FlatList
        data={details}
        renderItem={(item) => {
          return (
            <Image
              style={tw`w-max h-40 rounded-2xl mb-4`}
              source={{ uri: item.item }}
            />
          );
        }}
      ></FlatList>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
