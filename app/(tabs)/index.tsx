import React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';



export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to our bookstore</Text>
      <Text style={styles.subtitle}>Find your next favorite book here and enjoy reading!</Text>

      <Image source={require('../../public/books.jpg')} style={styles.image} />
      <Link href="/two" asChild>
            <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>

      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#20161F',
  },
title: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,
    color: '#C59F60',
    fontFamily: 'Pacifico',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 22,
    textAlign: 'left',
    marginBottom: 40,
    color: '#C59F60',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  button: {
    backgroundColor: '#C59F60',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#8B9467',
    
  },
});

