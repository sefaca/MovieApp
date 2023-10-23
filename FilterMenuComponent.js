import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const categories = ['Acción', 'Drama', 'Ciencia Ficción', 'Terror', 'Románticas', 'Documentales', 'Animación', 'Infantiles', 'Clásicos', 'Musicales'];

const FilterMenuComponent = ({ selectedCategory, onSelectCategory, style }) => {
    const navigation = useNavigation();

  return (
    <ScrollView horizontal style={[styles.menuContainer, style]}>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={category}
          style={[
            styles.menuItem,
            index === categories.length - 1 && styles.lastMenuItem, // Estilo para el último elemento
            selectedCategory === category && styles.selectedMenuItem,
          ]}
          onPress={() => {
            if (category === 'Acción') {
              navigation.navigate('ActionMovies');
            } else if (category === 'Drama') {
              navigation.navigate('DramaMovies');
            } else if (category === 'Terror') {
              navigation.navigate('HorrorMovies');
            } else if (category === 'Ciencia Ficción') {
              navigation.navigate('ScienceFictionMovies');
            } else {
              onSelectCategory(category);
            }
            }}
          
        >
          <Text
            style={[
              styles.menuItemText,
              selectedCategory === category && styles.selectedMenuItemText,
            ]}
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    // marginTop: 5,
    // marginBottom: 15,
    zIndex: 1,
    // justifyContent: 'center',
    position: 'relative',
  },
  menuItem: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  lastMenuItem: {
    marginRight: 20, // Margen derecho para el último elemento
  },
  selectedMenuItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 40,
  },
  menuItemText: {
    color: 'white',
  },
  selectedMenuItemText: {
    color: 'black',
  },
});

export default FilterMenuComponent;
