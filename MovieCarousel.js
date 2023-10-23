import React, { useState, useEffect } from 'react';
import { View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';


const { width } = Dimensions.get('window');
const API_KEY = '53a05b6ecbc81a4342ed61f61e6581f5';

const Indicator = ({ active }) => (
    <View style={[
      styles.indicator,
      active ? styles.activeIndicator : null
    ]} />
  );

const MovieCarousel = () => {
    const [movies, setMovies] = useState([]);
    const [activeSlide, setActiveSlide] = useState(0);
  
    useEffect(() => {
      // Realiza una solicitud a la API de TMDb para obtener las películas populares
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
        .then((response) => {
          setMovies(response.data.results.slice(0, 10)); //Máximo resultado de 10 peliculas
        })
        .catch((error) => {
          console.error('Error al cargar datos de la API:', error);
        });
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.slide}>
          <Image 
            source={{ uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}` }} 
            style={styles.image}
             />
            <View style={styles.textOverlay}>
                <Text style={styles.movieTitle}>{item.title}</Text>
            </View>
        </View>
      );

  return (
    <View style={styles.container}>
      <Carousel
        layout="default"
        data={movies}
        sliderWidth={width}
        itemWidth={width}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveSlide(index)}
        style={styles.carousel}
        // scrollEnabled={isCarouselScrollEnabled}
      />
      <View style={styles.indicatorsContainer}>
        {movies.map((_, index) => (
          <Indicator key={index} active={index === activeSlide} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  slide: {
    width,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width,
    height: 230,
  },
  indicatorsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'gray',
    margin: 5,
  },
  activeIndicator: {
    backgroundColor: 'white',
  },
  textOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fondo oscuro para el título
    padding: 10,
  },
  movieTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  carousel: {
    position: 'absolute',
    zIndex: 0,
  },
});

export default MovieCarousel;
