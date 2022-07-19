import { View, Text, TextInput } from "react-native";
import React from "react";
import tw from "twrnc";
import Icon from "react-native-vector-icons/EvilIcons";

const SearchBar = ({ searchTerm, onSearchChange, onSearchSubmit }) => {
  return (
    <View style={tw`bg-[#F0EEEE] mx-3 rounded-xl my-5 `}>
      <View style={tw`flex-row content-end m-4`}>
        <Icon name="search" size={35} />
        <TextInput
          style={{ fontSize: 16, flex: 1 }}
          placeholder="Search"
          value={searchTerm}
          onEndEditing={onSearchSubmit}
          onChangeText={onSearchChange}
        />
      </View>
    </View>
  );
};

export default SearchBar;
