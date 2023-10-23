import React, { useState, useEffect } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';

const { width } = Dimensions.get('window');
const API_KEY = '53a05b6ecbc81a4342ed61f61e6581f5';


// const data = [
//   { image: require('./images/interstellar_banner.jpg') },
//   { image: require('./images/nota_16852265112579_898.jpg') },
//   { image: require('./images/TI5TB6FJGRC3ZCANZK5KDMT7AM.jpg') },
//   // Agrega más objetos de imagen según tus necesidades
// ];

const ImageCarousel = () => {
const [movies, setMovies] = useState([]);
    const [activeSlide, setActiveSlide] = useState(0);
  
    useEffect(() => {
      // Realiza una solicitud a la API de TMDb para obtener las películas populares
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
        .then((response) => {
        // Filtra las películas para mostrar solo las de la categoría "Acción"
        const actionMovies = response.data.results.filter(
            (movie) => movie.genre_ids.includes(28) // El ID 28 representa la categoría "Acción"
          );
  
          setMovies(actionMovies.slice(0, 10)); // Máximo resultado de 10 películas de acción
        })
        .catch((error) => {
          console.error('Error al cargar datos de la API:', error);
        });
    }, []);

    const renderImages = () => {
        return movies.map((movie, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` }}
              style={styles.image}
            />
          </View>
        ));
      };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.imageScrollView}
        showsHorizontalScrollIndicator={false}
      >
        {renderImages()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 10
  },
  imageScrollView: {
    flexDirection: 'row',
  },
  imageContainer: {
    width: 100,
    height: 150,
    marginRight: 120, // Espacio entre imágenes
  },
  image: {
    width: 210,
    height: 120,
    borderRadius: 8,
  },
  
});

export default ImageCarousel;
