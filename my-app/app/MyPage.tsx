import { useState, useCallback } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";

function MyPage() {
  // const useStateReturn = useState(""); // retourne un tableau contenant deux items
  // const word = useStateReturn[0]; // le 1er item est stocké dans "word"
  // const setWord = useStateReturn[1]; // le 2ond item est stocké dans "setWord"
  const [word, setWord] = useState("initial word");

  // function myFunction {
  //   setWord("initial word");
  // };
  // const resetWord = useCallback(myFunction, []);

  // équivalent à :

  // const myFunction = () => {
  //   setWord("initial word");
  // };
  // const resetWord = useCallback(myFunction, []);

  // équivalent à :

  const resetWord = useCallback(() => {
    setWord("initial word");
  }, []);

  return (
    <View style={styles.drawer}>
      <Text style={styles.title}>Hello World!</Text>
      <Button title="Reset word" onPress={resetWord} />
      <Text style={styles.paragraph}>
        Value stored in « word » : « {word} »
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a word"
        onChangeText={setWord}
        value={word}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  drawer: {
    borderColor: "red",
    borderWidth: 1,
  },
  title: {
    color: "red",
    textAlign: "center",
    marginTop: 450,
  },
  paragraph: {},
  input: {
    borderColor: "blue",
    borderWidth: 1,
  },
});

export default MyPage;
