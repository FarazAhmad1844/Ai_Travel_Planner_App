import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const App = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [placeDetails, setPlaceDetails] = useState(null);

  const geoapifyApiKey = '5a4c8a9dd81e44c8a125381dfb52f924'; // Your Geoapify API key

  const fetchLocations = async (searchQuery) => {
    try {
      const response = await axios.get(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${searchQuery}&apiKey=${geoapifyApiKey}`
      );
      console.log('API Response:', response.data);
      setSuggestions(response.data.features || []); // Ensure default empty array if no features
    } catch (error) {
      console.error('Error fetching locations:', error.response ? error.response.data : error.message);
    }
  };

  const fetchPlaceDetails = async (placeId) => {
    try {
      const response = await axios.get(
        `https://api.geoapify.com/v2/places/${placeId}?apiKey=${geoapifyApiKey}`
      );
      console.log('Place Details:', response.data);
      setPlaceDetails(response.data);
    } catch (error) {
      console.error('Error fetching place details:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    if (query.length > 2) {
      fetchLocations(query);
    }
  }, [query]);

  return (
    <View style={styles.container}>
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Where do you want to go?"
        style={styles.input}
      />
      <FlatList
        data={suggestions}
        keyExtractor={(item) => item.properties.id || item.properties.name} // Ensure unique key
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => fetchPlaceDetails(item.properties.id)}> 
            <Text style={styles.itemText}>
              {item.properties.name || 'Unknown'} 
            </Text>
          </TouchableOpacity>
        )}
      />
      {placeDetails && (
        <View style={styles.details}>
          <Text><Text style={styles.label}>Name:</Text> {placeDetails.features[0].properties.name}</Text>
          <Text><Text style={styles.label}>Address:</Text> {placeDetails.features[0].properties.formatted}</Text>
          <Text><Text style={styles.label}>Category:</Text> {placeDetails.features[0].properties.category}</Text>
          {/* Add more details as needed */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop:70
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    fontSize: 16,
  },
  itemText: {
    padding: 10,
    fontSize: 16,
  },
  details: {
    marginTop: 20,
  },
  label: {
    fontWeight: 'bold',
  },
});

export default App;
