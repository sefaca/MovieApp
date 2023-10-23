import React, { useState, useEffect } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';

const { width } = Dimensions.get('window');
const API_KEY = '53a05b6ecbc81a4342ed61f61e6581f5';

const CarouselComponent = ({ category }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Realiza una solicitud a la API de TMDb para obtener las películas populares
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((response) => {
        // Filtra las películas para mostrar solo las de la categoría especificada
        const filteredMovies = response.data.results.filter((movie) =>
          movie.genre_ids.includes(category) // Puedes pasar el ID de la categoría que desees
        );

        setMovies(filteredMovies.slice(0, 10)); // Máximo resultado de 10 películas
      })
      .catch((error) => {
        console.error('Error al cargar datos de la API:', error);
      });
  }, [category]);

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
    marginLeft: 10,
    marginBottom: -10
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

export default CarouselComponent;
