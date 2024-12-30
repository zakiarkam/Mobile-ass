import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

const NotesScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clickCounts, setClickCounts] = useState({});

  // Fetch data from the API
  useEffect(() => {
    fetch("https://wolnelektury.pl/api/authors/") // Replace with your actual API URL
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching authors:", error);
        setLoading(false);
      });
  }, []);

  // Handle item click
  const handleItemClick = (id) => {
    setClickCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  };

  // Get the total click count for all items
  const totalClickCount = Object.values(clickCounts).reduce(
    (sum, count) => sum + count,
    0
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => handleItemClick(item.id)}
    >
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Lecturers List</Text>
      <Text style={styles.totalClickCount}>
        Total Clicks: {totalClickCount}
      </Text>{" "}
      <View style={{ padding: 10 }}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) =>
              item.id?.toString() || item.slug?.toString()
            }
            renderItem={renderItem}
            contentContainerStyle={styles.listContainer}
          />
        )}
      </View>
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
    marginBottom: 10,
  },
  totalClickCount: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
    color: "#272F7A",
  },
  listContainer: {
    paddingBottom: 20,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 8,
    padding: 15,
    elevation: 3,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

export default NotesScreen;
