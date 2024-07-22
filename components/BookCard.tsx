import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, ImageSourcePropType } from 'react-native';
import { useCart } from '../app/CartContext';

interface BookCardProps {
  id: number;
  title: string;
  price: number;
  image: string | ImageSourcePropType;
}

const BookCard: React.FC<BookCardProps> = ({ id, title, price, image }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, title, price, image });
  };

  const windowWidth = Dimensions.get('window').width;

  const cardWidth = windowWidth - 32;

  return (
    <View style={[styles.container, { backgroundColor: '#20161F' }]}>
      <View style={[styles.card, { width: cardWidth }]}>
        <Image
          source={typeof image === 'string' ? { uri: image } : image}
          style={styles.image}
        />
        <Text numberOfLines={2} ellipsizeMode='tail' style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
        <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 19,
    padding: 16,
    margin: 2,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  image: {
    width: 295,
    borderRadius: 14,
    height: 440,
    marginBottom: 8,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#C59F60',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#C59F60',
  },
  button: {
    backgroundColor: '#DB924B',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 8,
    width: 250,
  },
  buttonText: {
    color: '#110802',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default BookCard;


