import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Item = (props) => {
  return (
    <>
      <Text style={styles.itemText}>{props.text}</Text>
    </>
  );
};

export default Item;

const styles = StyleSheet.create({
  itemText: {
    color: "black",
    fontSize: 20,
  },
});
