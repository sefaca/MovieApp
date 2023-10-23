import React, { useState, useEffect } from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';

const { width } = Dimensions.get('window');
const API_KEY = '53a05b6ecbc81a4342ed61f61e6581f5';

const numImagesToShow = 3; // Define cuántas imágenes mostrar

const imageBorderRadius = 10;

const CarouselPopular = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Realiza una solicitud a la API de TMDb para obtener las películas populares
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((response) => {
        setMovies(response.data.results.slice(0, 10)); // Máximo resultado de 10 películas
      })
      .catch((error) => {
        console.error('Error al cargar datos de la API:', error);
      });
  }, []);

  const itemWidth = width / numImagesToShow;

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={[styles.image, { width: itemWidth, borderRadius: imageBorderRadius }]}
        resizeMode="cover"
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        layout="default"
        vertical={false}
        data={movies}
        sliderWidth={width}
        itemWidth={itemWidth}
        renderItem={renderItem}
        style={styles.carousel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  slide: {
    // width: width,
    // height: 330,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width,
    height: 250,
  },
  carousel: {
    position: 'relative',
    zIndex: 0,
  },
});

export default CarouselPopular;
