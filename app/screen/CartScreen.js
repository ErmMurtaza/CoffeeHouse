import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Background from "../components/Background";
import Icon from "react-native-vector-icons/Entypo";

export default function CartScreen({ navigation }) {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Cappuccino",
      size: "Medium",
      quantity: 1,
      price: 25.4,
      image: require("../assets/loginCup.png"),
    },
    {
      id: "2",
      name: "Latte",
      size: "Large",
      quantity: 2,
      price: 28.0,
      image: require("../assets/loginCup.png"),
    },
  ]);

  const increment = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Your Cart 🛒</Text>

        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={item.image} style={styles.itemImage} />

              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemSub}>Size: {item.size}</Text>
                <Text style={styles.itemPrice}>${item.price}</Text>
              </View>

              <View style={styles.qtyBox}>
                <TouchableOpacity
                  onPress={() => decrement(item.id)}
                  style={styles.qtyBtn}
                >
                  <Icon name="minus" size={18} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.qtyText}>{item.quantity}</Text>
                <TouchableOpacity
                  onPress={() => increment(item.id)}
                  style={styles.qtyBtn}
                >
                  <Icon name="plus" size={18} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />

        <View style={styles.summary}>
          <Text style={styles.totalText}>Total: ${totalAmount.toFixed(2)}</Text>
          <TouchableOpacity style={styles.checkoutBtn} onPress={() => navigation.navigate("CheckoutScreen")}>
            <Text style={styles.checkoutText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#8e603c",
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: "row",
    backgroundColor: "#f7f2ef",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    marginBottom: 15,
    elevation: 3,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 15,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  itemSub: {
    fontSize: 14,
    color: "#8e603c",
    marginVertical: 3,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  qtyBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#8e603c",
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
  summary: {
    marginTop: 20,
    paddingVertical: 15,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  totalText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
  checkoutBtn: {
    backgroundColor: "#8e603c",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  checkoutText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
