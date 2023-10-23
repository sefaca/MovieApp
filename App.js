import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieListScreen from './MovieListScreen';
import ActionMoviesScreen from './ActionMoviesScreen';
import DramaMoviesScreen from './DramaMoviesScreen';
import TerrorMoviesScreen from './TerrorMoviesScreen';
import CienciaFiccionMoviesScreen from './CienciFiccionMoviesScreen';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import FilterMenuComponent from './FilterMenuComponent';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
            headerStyle: {
              backgroundColor: 'black', // Cambia el color de fondo de la barra de navegación
            },
            headerTitleStyle: {
              fontSize: 24, // Cambia el tamaño de fuente del título
              fontWeight: 'bold',
              color: 'white', // Cambia el color del título
            },
            headerRight: () => (
            <TextInput
              style={styles.searchInput}
              placeholder="Search movies..."
              placeholderTextColor="gray"
            />
            ),
          }}
      >
        <Stack.Screen name="MovieList" component={MovieListScreen} options={{ title: 'BarraNav' }}/> 
        <Stack.Screen name="ActionMovies" component={ActionMoviesScreen} options={{ title: 'Volver' }} />
        <Stack.Screen name="DramaMovies" component={DramaMoviesScreen} options={{ title: 'Volver' }} />
        <Stack.Screen name="HorrorMovies" component={TerrorMoviesScreen} options={{ title: 'Volver' }} />
        <Stack.Screen name="ScienceFictionMovies" component={CienciaFiccionMoviesScreen} options={{ title: 'Volver' }} />
      </Stack.Navigator>
    </NavigationContainer>
  
  );
};

const styles = StyleSheet.create({
  searchInput: {
    width: 150,
    height: 30,
    borderColor: 'white',
    borderWidth: 1,
    paddingHorizontal: 5,
    color: 'white',
    borderRadius: 5
  },
});

