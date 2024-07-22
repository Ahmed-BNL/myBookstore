
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useCart } from '../app/CartContext';

const Checkout: React.FC = () => {
  const { cart, getTotalPrice } = useCart();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handlePlaceOrder = () => {
 
    console.log('Order placed', { name, address, phone, cart, total: getTotalPrice() });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemPrice}>${(item.price * item.quantity).toFixed(3)}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text style={styles.total}>Total: ${getTotalPrice().toFixed(2)}</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
      </View>
      <TouchableOpacity style={styles.placeOrderButton} onPress={handlePlaceOrder}>
        <Text style={styles.placeOrderButtonText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#20161F',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#C59F60',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#C59F60',
  },
  itemPrice: {
    fontSize: 16,
    color: '#C59F60',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    marginVertical: 20,
    color: '#C59F60',
  },
  form: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#C59F60',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  placeOrderButton: {
    backgroundColor: '#C59F60',
    padding: 15,
    borderRadius: 5,
  },
  placeOrderButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Checkout;

