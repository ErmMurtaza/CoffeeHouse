import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { Avatar } from "react-native-paper";
import Background from "../components/Background";
import Header from "../components/Header";

export default function CustomerOrders({ navigation }) {
  const orders = [
    {
      id: "1",
      customer: "John Doe",
      coffee: "Cappuccino",
      qty: 2,
      price: 50,
      status: "Pending",
      avatar: require("../assets/loginCup.png"),
    },
    {
      id: "2",
      customer: "Jane Smith",
      coffee: "Latte",
      qty: 1,
      price: 28,
      status: "Delivered",
      avatar: require("../assets/loginCup.png"),
    },
    {
      id: "3",
      customer: "Alex Johnson",
      coffee: "Espresso",
      qty: 3,
      price: 60,
      status: "Cancelled",
      avatar: require("../assets/loginCup.png"),
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Pending":
        return { backgroundColor: "#f1c40f" };
      case "Delivered":
        return { backgroundColor: "#27ae60" };
      case "Cancelled":
        return { backgroundColor: "#e74c3c" };
      default:
        return { backgroundColor: "#bdc3c7" };
    }
  };

  const renderOrder = ({ item }) => (
    <View style={styles.orderCard}>
      <Avatar.Image source={item.avatar} size={60} style={{ backgroundColor: "#fff" }} />

      <View style={styles.orderInfo}>
        <Text style={styles.customerName}>{item.customer}</Text>
        <Text style={styles.coffeeName}>{item.coffee} x{item.qty}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>

      <View style={[styles.statusBox, getStatusStyle(item.status)]}>
        <Text style={styles.statusText}>{item.status}</Text>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionBtn}>
          <Icon name="phone" size={18} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionBtn, { backgroundColor: "#8e603c" }]}>
          <Icon name="cycle" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <Background>
      <Header location="Orders" source={require("../assets/loginCup.png")} />
      <View style={styles.footer}>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={renderOrder}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 150, paddingTop: 10 }}
        />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  orderCard: {
    backgroundColor: "#8e603c",
    flexDirection: "row",
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  orderInfo: {
    flex: 1,
    marginLeft: 15,
  },
  customerName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  coffeeName: {
    color: "#f1d7b6",
    fontSize: 14,
    marginVertical: 3,
  },
  price: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  statusBox: {
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 10,
  },
  statusText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  actionButtons: {
    flexDirection: "row",
    marginLeft: 10,
  },
  actionBtn: {
    backgroundColor: "#27ae60",
    borderRadius: 15,
    padding: 8,
    marginLeft: 5,
  },
});
