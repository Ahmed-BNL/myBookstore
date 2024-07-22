
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useCart } from '../app/CartContext';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

const Cart: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { cart, removeFromCart, getTotalPrice } = useCart();
  const navigation = useNavigation<any>();

  const handleRemoveFromCart = (itemId: number) => {
    removeFromCart(itemId);
  };

  const handleProceedToPayment = () => {
    onClose();
    navigation.navigate('checkout');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Cart</Text>
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.closeButton}>Close </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text>
                <Text style={{ color: '#C59F60' }}>
                  ${item.price.toFixed(2)}
                </Text>{' '}
                x{' '}
                <Text style={{ color: '#C59F60' }}>
                  {item.quantity}
                </Text>
              </Text>
            </View>
            <TouchableOpacity onPress={() => handleRemoveFromCart(item.id)}>
              <Text style={styles.removeButton}>Remove </Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item: CartItem) => item.id.toString()}
        style={styles.list}
      />
      <View style={styles.footer}>
        <Text style={styles.total}>
          Total: <Text style={{ color: '#C59F60' }}>${getTotalPrice().toFixed(2)}</Text>
        </Text>
        <TouchableOpacity
          style={styles.proceedButton}
          onPress={handleProceedToPayment}
        >
          <Text style={styles.proceedButtonText}>
            Chekout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20161F',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 19,
    borderBottomWidth: 1,
    borderBottomColor: '#C59F60',
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#C59F60',
  },
  closeButton: {
    fontSize: 16,
    color: '#C59F60',
  },
  list: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#C59F60',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#C59F60',
  },
  removeButton: {
    color: '#C59F60',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#C59F60',
  },
  proceedButton: {
    backgroundColor: '#C59F60',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  proceedButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Cart;

