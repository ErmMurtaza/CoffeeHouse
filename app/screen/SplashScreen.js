import { useEffect } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Background from "../components/Background";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("LoginScreen");
    }, 3000);
  });
  return (
    <Background>
      <View style={styles.container}>
        <ImageBackground
         source={require("../../assets/coffeelogo.jpeg")}
          style={styles.image}
        ></ImageBackground>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default SplashScreen;
