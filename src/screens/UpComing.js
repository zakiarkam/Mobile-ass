import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";

const UpComing = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the API
  useEffect(() => {
    fetch("https://wolnelektury.pl/api/daisy/")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching daisy books:", error);
        setLoading(false);
      });
  }, []);

  const renderBook = ({ item }) => (
    <View style={styles.bookItem}>
      <Image
        source={{ uri: `https://wolnelektury.pl/media/${item.cover}` }}
        style={styles.bookImage}
      />
      <View style={styles.bookDetails}>
        <Text style={styles.bookTitle}>{item.title}</Text>
        <Text style={styles.bookAuthor}>{item.author}</Text>
        <Text style={styles.bookGenre}>{item.genre}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Upcoming Books</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={books}
          keyExtractor={(item) => item.slug}
          renderItem={renderBook}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  bookItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 3,
  },
  bookImage: {
    width: 100,
    height: 150,
    resizeMode: "cover",
  },
  bookDetails: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  bookAuthor: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  bookGenre: {
    fontSize: 12,
    color: "#999",
  },
});

export default UpComing;
