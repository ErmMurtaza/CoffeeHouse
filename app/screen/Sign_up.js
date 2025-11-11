import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Background from "../components/Background";
import { Button } from "react-native-paper";
import LabelTextInput from "../components/LabelTextInput";
import TextInputWithIcon from "../components/TextInputWithIcon";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Sign_up({ navigation }) {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  const handleTextChange = (text) => {
    setText(text);
    // You can add your validation logic here
    if (text.length < 3) {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <Background color="#8e603c">
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/loginCup.png")} // Replace with your image source
          style={styles.backgroundImage}
        ></ImageBackground>

        <View style={styles.footer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
              <Text style={styles.Textstyle}>Sign In</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.Textstyle}>Sign Up</Text>
              <View style={styles.boxLine}></View>
            </View>
          </View>

          <View style={styles.container1}>
            <View style={styles.inputcontainer}>
              <Icon
                name="email"
                size={20}
                color="#8e603c"
                style={{ marginTop: 25 }}
              />
              <LabelTextInput
                style={styles.TextInputStyleClass}
                returnKeyType="done"
                placeholder=" Email Address"
                underlineColorAndroid="transparent"
                placeholderTextColor="#8e603c"
              />
            </View>
            <View style={styles.inputcontainer}>
              <Icon
                name="lock"
                size={20}
                color="#8e603c"
                style={{ marginTop: 25 }}
              />
              <LabelTextInput
                style={styles.TextInputStyleClass}
                returnKeyType="done"
                placeholder=" Password"
                underlineColorAndroid="transparent"
                placeholderTextColor="#8e603c"
              />
            </View>
            <View style={styles.inputcontainer}>
              <Icon
                name="lock"
                size={20}
                color="#8e603c"
                style={{ marginTop: 25 }}
              />
              <LabelTextInput
                style={styles.TextInputStyleClass}
                returnKeyType="done"
                placeholder=" Confirm Password"
                underlineColorAndroid="transparent"
                placeholderTextColor="#8e603c"
              />
            </View>
            <View style={styles.SubmitButtonStyle}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate("HomeScreen")}
              >
                <Text style={styles.TextStyle}> Sign Up </Text>
              </TouchableOpacity>
            </View>
           
          </View>
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2, // Make the header take up the entire height
    backgroundColor: "#8e603c",
  },
  footer: {
    flex: 1,
    backgroundColor: "#e1c7b0",
    // borderTopEndRadius: 50,
    borderTopLeftRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    resizeMode: "cover", // Adjust as needed
  },
  Textstyle: {
    color: "#8e603c",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  subTextstyle: {
    color: "#8a5931",
    fontSize: 15,
    textAlign: "center",
    marginTop: 15,
  },
  container1: {
    padding: 10,
    alignSelf: "center",
  },
  SubmitButtonStyle: {
    width: "100%",
    height: 45,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#8e603c",
    borderRadius: 8,
    marginTop: 25,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  TextStyle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  boxLine: {
    width: "100%",
    height: 2,
    backgroundColor: "#e1c7b0",
    borderWidth: 2,
  },
  TextInputStyleClass: {
    flexDirection: "row",
    alignItems: "center",
    // borderBottomWidth: 2, // Bottom border
    borderColor: "#8e603c", // Default border color
    paddingHorizontal: 95,
  },
  inputcontainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2, // Bottom border
    borderColor: "#8e603c", // Default border color
  },
});
