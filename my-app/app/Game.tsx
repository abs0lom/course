import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { useCallback, useState } from "react";

function Game() {
  const [numberToFind, setNumberToFind] = useState<any>(null);
  const [numberToTest, setNumberToTest] = useState("");
  const [clue, setClue] = useState("");

  console.log("rerendered");

  const chooseAleaNumber = useCallback(() => {
    setNumberToFind(1);
  }, []);

  const testAnswer = useCallback(() => {
    if (Number(numberToTest) === numberToFind) {
      setClue("C'est gagné !");
    } else if (Number(numberToTest) < numberToFind) {
      setClue("C'est plus !");
    } else {
      setClue("C'est moins !");
    }
  }, [numberToTest, numberToFind]);

  return (
    <View style={styles.drawer}>
      <Text style={styles.title}>Plus ou moins&nbsp;?</Text>
      <Text>{clue}</Text>
      {numberToFind === null ? (
        <Button
          title="Essaie de deviner le nombre"
          onPress={chooseAleaNumber}
        />
      ) : (
        <>
          <Text>Essaie de deviner le nombre</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            value={numberToTest}
            onChangeText={setNumberToTest}
          />
          <Button title="Envoyer" onPress={testAnswer} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 2,
    margin: 5,
    padding: 5,
  },
  drawer: {
    height: "100%",
    width: "100%",
    backgroundColor: "lightGray",
    padding: 5,
  },
  title: {
    fontSize: 50,
    textAlign: "center",
    color: "gold",
    textShadowColor: "yellow",
    textShadowRadius: 10,
  },
});

export default Game;
