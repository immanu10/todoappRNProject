import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
import Item from "./components/Item";

export default function App() {
  const [text, setText] = useState();
  const [listItem, setListItem] = useState([]);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>First react Native project!</Text>
        <Text style={styles.subheading}>TODO!</Text>
        <ScrollView>
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
        </ScrollView>
      </View>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setText(text);
          }}
          value={text}
          placeholder="Add your Task"
        />
        <TouchableOpacity
          onPress={() => {
            if (!text.trim()) {
              alert("Please Enter task");
              return;
            } else {
              Keyboard.dismiss();
              setListItem([text].concat([...listItem]));
              setText("");
            }
          }}
          style={styles.addBtn}
        >
          <Text style={{ fontSize: 36, textAlign: "center" }}>+</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 20,
    marginTop: 10,
    maxHeight: "90%",
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
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    maxWidth: "100%",
    marginBottom: 5,
  },
  input: {
    width: "85%",
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
  addBtn: {
    backgroundColor: "skyblue",
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});
