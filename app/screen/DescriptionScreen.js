import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Background from "../components/Background";
import { Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/AntDesign";
import CategoryCard from "../components/CategoryCard";

export default function DescriptionScreen({ navigation }) {
  return (
    <Background>
      <View style={styles.header}>
        <View style={styles.headercontainer}>
          <View style={styles.headerCircle}>
            <Icon name="arrow-left" color="#fff" />
          </View>
          <View style={styles.headerCircle}>
            <Icon name="heart" color="#fff" />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.logo}>
          <Avatar.Image
            source={require("../assets/loginCup.png")} // Replace with your image source
            size={200}
          />
        </View>
        <ScrollView>
          <View style={styles.innercontainer}>
            <View style={styles.rate}>
              <Icon name="star" />
              <Text>4.3</Text>
            </View>
            <View style={styles.headercontainer}>
              <Text style={styles.itemText}>Cappuccino</Text>
              <Text style={{ color: "#000", fontSize: 18 }}>$25.40</Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Coffee size
              </Text>
              <View
                style={{ flexDirection: "row", justifyContent: "flex-start" }}
              >
                <CategoryCard
                  name="Large"
                  size={15}
                  backgroundColor="#ad8058"
                  color="#fff"
                  iconColor="#fff"
                />
                <CategoryCard name="Medium" size={15} />
                <CategoryCard name="Small" size={15} />
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>About</Text>
              <Text numberOfLines={3}>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type
              </Text>
            </View>

            <View
              style={[
                styles.headercontainer,
                { marginTop: 20, alignItems: "center" },
              ]}
            >
              <Text style={{ fontSize: 16 }}>Volume : 160 ml</Text>
              <View style={styles.addSub}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>-</Text>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>2</Text>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>+</Text>
              </View>
            </View>

            <View
              style={[
                styles.headercontainer,
                { marginTop: 20, justifyContent: "space-around" },
              ]}
            >
              <View style={[styles.headerCircle, { borderColor: "#000" }]}>
                <Icon name="shopping-cart" color="#000" size={25} />
              </View>
              <TouchableOpacity
                style={styles.buynow}
                onPress={() => navigation.navigate("CartScreen")}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}
                >
                  Buy now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1, // Make the header take up the entire height
    backgroundColor: "#8e603c",
    borderBottomEndRadius: 40,
    borderBottomLeftRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  logo: {
    // padding: 10,
    borderWidth: 1,
    borderRadius: 50,
    width: 90,
    height: 90,
    position: "relative",
    marginTop: -105,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  headercontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerCircle: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 25,
    alignContent: "center",
    borderColor: "#fff",
  },
  innercontainer: {
    paddingVertical: 80,
    // backgroundColor: "pink",
  },
  rate: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#c4a386",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "20%",
    alignContent: "center",
  },
  itemText: {
    fontSize: 30,
    color: "#000",
    fontWeight: "bold",
  },
  addSub: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: "#fff",
    width: "40%",
    alignContent: "center",
  },
  buynow: {
    padding: 10,
    // flexDirection:"row",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: "#c4a386",
    width: "70%",
    // alignContent: "center",
  },
});
