import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


const FooterMenu = () => {
  const navigation = useNavigation();

  const navigateToMovieList = () => {
    navigation.navigate('MovieList'); // Navegar a la pantalla MovieListScreen
  };
  return (
    <View style={styles.container}>
      <View style={styles.menuItem}>
      <TouchableOpacity onPress={navigateToMovieList} style={styles.menuItem}>
        <Icon name="home" size={25} color="white" />
        <Text style={styles.menuText}>Inicio</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.menuItem}>
        <Icon name="shopping-cart" size={25} color="white" />
        <Text style={styles.menuText}>Tienda</Text>
      </View>
      <View style={styles.menuItem}>
        <Icon name="tv" size={25} color="white" />
        <Text style={styles.menuText}>TV en Directo</Text>
      </View>
      <View style={styles.menuItem}>
        <Icon name="download" size={25} color="white" />
        <Text style={styles.menuText}>Descargar</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Muestra los elementos en una fila
    justifyContent: 'space-around', // Espacio uniforme entre elementos
    backgroundColor: 'black', // Fondo negro
    padding: 5,
    position: 'absolute',
    bottom: 0, // Coloca el menú en la parte inferior de la pantalla
    width: '100%', // Ocupa todo el ancho de la pantalla
  },
  menuItem: {
    flex: 1, // Ocupa un espacio igual
    alignItems: 'center', // Centra el contenido horizontalmente
    padding: 0,
  },
  menuText: {
    color: 'white', // Texto en color blanco
  },
});

export default FooterMenu;
