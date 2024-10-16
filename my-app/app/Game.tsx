import { View, Text, StyleSheet, Button } from "react-native";
import { useCallback, useState } from "react";

function Game() {
  const [numberToFind, setNumberToFind] = useState<any>(null);

  const chooseAleaNumber = useCallback(() => {
    setNumberToFind(1);
  }, []);

  return (
    <View style={styles.drawer}>
      <Text style={styles.title}>Plus ou moins&nbsp;?</Text>
      {numberToFind === null ? (
        <Button
          title="Essaie de deviner le nombre"
          onPress={chooseAleaNumber}
        />
      ) : (
        "autre chose"
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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
