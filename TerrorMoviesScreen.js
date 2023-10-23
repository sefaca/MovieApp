import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FilterMenuComponent from './FilterMenuComponent';
import CarouselCategory from './CarouselCategory';
import CarouselPopular from './CarouselPopular';
import FooterMenu from './FooterMenu';
import Carousel from 'react-native-snap-carousel';
import CarouselComponent from './CarouselComponent';

const TerrorMoviesScreen = () => {
    const [selectedCategory, setSelectedCategory] = useState(27);

  return (
    <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Películas de Drama</Text>
      <FilterMenuComponent
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          style={{ marginBottom: 10 }}
      />
      <Text style={styles.title2}>Películas ></Text>
      <CarouselComponent category={selectedCategory} />
      <Text style={styles.title2}>Comprar o alquilar ></Text>
      <CarouselComponent category={27} />  
      <Text style={styles.title2}>Películas populares ></Text>
      <CarouselComponent category={27} />  
      <Text style={styles.title2}>Películas populares España ></Text>
      <CarouselComponent category={27} />  
   </ScrollView>
   <FooterMenu />
   </View>

  );
};

const styles = StyleSheet.create({
    container: {
    //   flex: 1, //Eliminar o comentar cuando la página ya esté llena de contenido para que se pueda scrollear
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
        color: '#ff001a',
    },
    title2: {
        // marginTop: 10,
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#ff001a',
    }
    
  });

export default TerrorMoviesScreen;
