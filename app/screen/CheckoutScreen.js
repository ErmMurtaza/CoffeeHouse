import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Background from '../components/Background';
import Icon from 'react-native-vector-icons/Entypo';

export default function CheckoutScreen({ navigation }) {
  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'Cappuccino', price: 25.4, quantity: 1 },
    { id: '2', name: 'Latte', price: 28, quantity: 2 },
  ]);

  const increaseQty = (id) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseQty = (id) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item));
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Checkout</Text>
        <ScrollView style={{ marginVertical: 20 }}>
          {cartItems.map(item => (
            <View key={item.id} style={styles.cartItem}>
              <View>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
              </View>
              <View style={styles.qtyBox}>
                <TouchableOpacity onPress={() => decreaseQty(item.id)} style={styles.qtyBtn}>
                  <Icon name="minus" size={18} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.qtyText}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => increaseQty(item.id)} style={styles.qtyBtn}>
                  <Icon name="plus" size={18} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={styles.summary}>
          <Text style={styles.totalText}>Total: ${totalAmount.toFixed(2)}</Text>
          <TouchableOpacity style={styles.payBtn} onPress={() => navigation.navigate('PaymentScreen')}>
            <Text style={styles.payText}>Proceed to Pay</Text>
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
    paddingVertical: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8e603c',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f5e5d7',
    padding: 15,
    borderRadius: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8e603c',
  },
  itemPrice: {
    fontSize: 16,
    color: '#8e603c',
  },
  qtyBox: {
    flexDirection: 'row',
    backgroundColor: '#8e603c',
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 5,
    alignItems: 'center',
  },
  qtyBtn: {
    padding: 6,
  },
  qtyText: {
    color: '#fff',
    fontWeight: 'bold',
    marginHorizontal: 8,
    fontSize: 16,
  },
  summary: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#8e603c',
    borderRadius: 25,
  },
  totalText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  payBtn: {
    backgroundColor: '#c4a386',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  payText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});