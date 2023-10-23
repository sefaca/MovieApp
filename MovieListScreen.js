import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FilterMenuComponent from './FilterMenuComponent';
import MovieCarousel from './MovieCarousel';
import CarouselPopular from './CarouselPopular';
import FooterMenu from './FooterMenu';
import CarouselComponent from './CarouselComponent';

const MovieListScreen = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>MovieApp</Text>
      <FilterMenuComponent
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
      />
      <MovieCarousel />
      <Text style={styles.title2}>Películas más populares y recientes</Text>
      <CarouselPopular />
      <Text style={styles.title2}>Las series mejor valoradas</Text>
      <CarouselComponent category={18} />  

      

   </ScrollView>
   <FooterMenu />

   </View>

  );
};

const styles = StyleSheet.create({
    container: {
    //   flex: 1, 
      backgroundColor: 'black', 
      alignItems: 'stretch', //MOFICICAR ESTE SI NO SE VE ALGUN COMPONENTE
      justifyContent: 'flex-start',
      paddingTop: 10,
      paddingBottom: 25
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    title2: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#ff001a',
    }
    
  });

export default MovieListScreen;
