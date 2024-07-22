import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import { FlatList } from 'react-native';
import BookCard from '../../components/BookCard';
import CartBubble from '../../components/CartBubble';
import Cart from '../../components/Cart';
import books from '../../data/Books';

interface Book {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Books: React.FC = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const renderBookCard = ({ item }: { item: Book }) => (
    <BookCard
      id={item.id}
      title={item.title}
      price={item.price}
      image={item.image}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Books</Text>
      <Text style={styles.subtitle}>
        Pick a book from our collection and add it to your cart.
      </Text>
      <Modal
        visible={isCartVisible}
        animationType="slide"
        onRequestClose={() => setIsCartVisible(false)}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <Cart onClose={() => setIsCartVisible(false)} />
        </View>
      </Modal>
      <View style={styles.bookList}>
        <FlatList<Book>
          data={books}
          renderItem={renderBookCard}
          keyExtractor={(item) => item.id.toString()}
          style={styles.bookListContent}
        />
      </View>
      <CartBubble onPress={() => setIsCartVisible(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:16,
    backgroundColor: '#20161F',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 8,
    fontFamily: 'Pacifico',
    color: '#C59F60',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
    color: '#C59F60',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  modal: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  modalContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  bookList: {
    flex: 1,
    padding: 0,
    backgroundColor: 'brown',
  },
  bookListContent: {
    flex: 1,
  },
});

export default Books;

