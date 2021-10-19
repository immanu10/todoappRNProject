import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Keyboard,
} from "react-native";
import Item from "./components/Item";

export default function App() {
  const [text, setText] = useState();
  const [listItem, setListItem] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>First react Native project!</Text>
      <Text style={styles.subheading}>TODO!</Text>
      <View>
        {listItem.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.deleteContainer}
              onPress={() => {
                let copyListItem = [...listItem];
                copyListItem.splice(index, 1);
                setListItem(copyListItem);
              }}
            >
              <Item text={item} />
              <Text style={styles.deleteBtn}>X</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setText(text);
          }}
          value={text}
        />
        <Button
          onPress={() => {
            Keyboard.dismiss();
            setListItem([...listItem, text]);
            setText("");
          }}
          title="Add"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 20,
    marginTop: 10,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
  },
  subheading: {
    fontSize: 18,
    marginVertical: 5,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    marginLeft: 30,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
  },
  deleteContainer: {
    backgroundColor: "skyblue",
    padding: 16,
    marginVertical: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  deleteBtn: {
    fontSize: 18,
    backgroundColor: "red",
    color: "white",
    fontWeight: "bold",
    padding: 6,
    borderRadius: 8,
  },
});
