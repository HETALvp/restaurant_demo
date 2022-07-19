import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const ResultCard = ({ item }) => {
  return (
    <View style={tw`w-70 mx-3 mt-3`}>
      <Image
        style={tw`w-max h-40 rounded-2xl mb-2`}
        source={{ uri: item.image_url }}
      />
      <Text
        style={{ fontSize: 16, fontWeight: "bold" }}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {item.name}
      </Text>
      <View style={tw`flex-row`}>
        <Text style={tw`text-sm text-slate-500`}>
          {item.rating} Stars, {item.review_count} Reviews
        </Text>
      </View>
    </View>
  );
};

export default ResultCard;
