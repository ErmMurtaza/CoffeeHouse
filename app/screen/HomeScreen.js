import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import Background from "../components/Background";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CategoryCard from "../components/CategoryCard";
import Icon from "react-native-vector-icons/Entypo";
import { Avatar } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  const coffeeData = [
    {
      id: "1",
      name: "Cappuccino",
      rating: 4.5,
      price: 25.4,
      volume: "160 ml",
      image: require("../assets/loginCup.png"),
    },
    {
      id: "2",
      name: "Latte",
      rating: 4.8,
      price: 28.0,
      volume: "180 ml",
      image: require("../assets/loginCup.png"),
    },
    {
      id: "3",
      name: "Espresso",
      rating: 4.2,
      price: 20.0,
      volume: "60 ml",
      image: require("../assets/loginCup.png"),
    },
  ];

  return (
    <Background>
      <Header
        location="Lagos, Nigeria"
        source={require("../assets/loginCup.png")}
      />
      <View style={styles.footer}>
        <SearchBar />
        <View style={styles.Category}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Cateogories</Text>
          <ScrollView horizontal={true}>
            <View
              style={{ flexDirection: "row", justifyContent: "flex-start" }}
            >
              <CategoryCard
                icon="glass-mug-variant"
                name="Cappuccino"
                size={15}
                backgroundColor="#ad8058"
                color="#fff"
                iconColor="#fff"
              />
              <CategoryCard icon="glass-fragile" name="Espresso" size={15} />
              <CategoryCard
                icon="glass-mug-variant"
                name="Cappuccino"
                size={15}
              />
              <CategoryCard icon="glass-fragile" name="Espresso" size={15} />
            </View>
          </ScrollView>
        </View>

        <ScrollView
          bounces
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 200 }}
        >
          <View style={{ flex: 1 }}>
            <FlatList
              data={coffeeData}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => {
                return (
                  <View key={item} style={styles.itemContainer}>
                    <View style={styles.logo}>
                      <Avatar.Image
                        source={require("../assets/loginCup.png")}
                        size={140}
                      />
                    </View>
                    <View style={styles.itemCard}>
                      <Text style={styles.itemText}>{item.name}</Text>

                      <View style={styles.rate}>
                        <Icon name="star" />
                        <Text>{item.rating}</Text>
                      </View>

                      <Text style={{ color: "#fff", fontSize: 18 }}>
                        Volume : {item.volume}
                      </Text>

                      <View style={styles.bottomBtn}>
                        <Text style={{ color: "#fff", fontSize: 18 }}>
                          ${item.price}
                        </Text>

                        <TouchableOpacity
                          style={[
                            styles.logo,
                            { width: 60, height: 60, marginTop: 1 },
                          ]}
                          onPress={() =>
                            navigation.navigate("DescriptionScreen")
                          }
                        >
                          <Icon
                            name="plus"
                            size={25}
                            color={"green"}
                            style={{ alignSelf: "center" }}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              }}
            />

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Popular Drinks 🔥</Text>
              <View style={styles.popularRowBig}>
                <View style={styles.bigImageWrap}>
                  <Image
                    source={require("../assets/loginCup.png")}
                    style={styles.bigImage}
                  />
                </View>

                <View style={styles.popularRight}>
                  <Text style={styles.popularName}>Mocha Cappuccino</Text>
                  <Text style={styles.popularSub}>Volume : 180 ml</Text>
                  <View style={styles.popularBottom}>
                    <Text style={styles.popularPrice}>$30</Text>
                    <View style={styles.qtyBox}>
                      <TouchableOpacity style={styles.qtyBtn}>
                        <Icon name="minus" size={18} color="#fff" />
                      </TouchableOpacity>
                      <Text style={styles.qtyText}>0</Text>
                      <TouchableOpacity style={styles.qtyBtn}>
                        <Icon name="plus" size={18} color="#fff" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Recommended for You ❤️</Text>
              <View style={styles.recoCard}>
                <Text style={styles.white}>
                  Try our new Hazelnut Brew – Smooth & Rich
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  footer: {
    // paddingHorizontal: 10,
    paddingVertical: 10,
  },
  Category: {
    padding: 10,
  },
  itemContainer: {
    width: 250,
    padding: 10,
    backgroundColor: "#8e603c",
    marginLeft: 20,
    marginRight: 20,
    // marginBottom: 90,
    borderColor: "#8e603c",
    borderWidth: 1,
    borderRadius: 15,
    position: "relative",
    marginTop: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  logo: {
    //padding: 10,
    borderWidth: 1,
    borderColor: "#8e603c",
    borderRadius: 70,
    width: 140,
    height: 140,
    position: "relative",
    marginTop: -48,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  itemCard: {
    padding: 15,
  },
  itemText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
  },
  rate: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#c4a386",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "25%",
    alignContent: "center",
  },
  bottomBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
  },
  section: { marginTop: 30, paddingHorizontal: 10 },
  sectionTitle: {
    color: "#c4a386",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  white: { color: "#fff" },
  recoCard: { backgroundColor: "#8e603c", borderRadius: 20, padding: 20 },
  popularRowBig: {
    flexDirection: "row",
    backgroundColor: "#8e603c",
    borderRadius: 25,
    padding: 15,
    alignItems: "center",
    marginTop: 20,
    overflow: "visible",
  },

  bigImageWrap: {
    width: 130,
    height: 130,
    borderRadius: 70,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -50, // push image upward
    marginLeft: -10, // push image left
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },

  bigImage: {
    width: 125,
    height: 125,
    borderRadius: 70,
    resizeMode: "contain",
  },

  popularRight: {
    flex: 1,
    marginLeft: 20,
    justifyContent: "space-between",
  },

  popularBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  popularName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  popularSub: {
    color: "#f1d7b6",
    fontSize: 14,
  },

  popularPrice: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  qtyBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#c4a386",
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },

  qtyBtn: {
    padding: 6,
  },

  qtyText: {
    color: "#fff",
    fontWeight: "bold",
    marginHorizontal: 8,
    fontSize: 16,
  },
});
