import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';
import axios from 'axios';


const apiKey =place_api;
const autocompleteUrl = autocompleteUrl;

const SearchPlace = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query.length > 2) { // Trigger search after 3 characters
      const fetchSuggestions = async () => {
        try {
          const response = await axios.get(autocompleteUrl, {
            params: {
              text: query,
              apiKey: apiKey,
            },
          });
          setSuggestions(response.data.features);
        } catch (error) {
          // Handle error quietly
        }
      };

      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [query]);

  // Generate a unique key for each item using a combination of properties and index
  const keyExtractor = (item, index) => {
    const name = item.properties.name || 'unknown';
    const id = item.properties.geocoding_id || index.toString();
    return `${name}_${id}_${index}`;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={query}
        onChangeText={setQuery}
        placeholder="Search for places..."
      />
      <FlatList
        data={suggestions}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.properties.formatted}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default SearchPlace;
