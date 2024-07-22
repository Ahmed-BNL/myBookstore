
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../app/CartContext';

interface CartBubbleProps {
  onPress: () => void;
}

const CartBubble: React.FC<CartBubbleProps> = ({ onPress }) => {
  const { getTotalItems } = useCart();

  return (
    <TouchableOpacity style={styles.bubble} onPress={onPress}>
      <Ionicons name="cart" size={24} color="white" />
      {getTotalItems() > 0 && (
        <TouchableOpacity style={styles.badge}>
          <Text style={styles.badgeText}>{getTotalItems()}</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bubble: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: 'purple',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  badge: {
    position: 'absolute',
    right: -10,
    top: -10,
    backgroundColor: '#f00',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  badgeText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


export default CartBubble;