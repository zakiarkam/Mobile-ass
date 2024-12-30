import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";

import CustomSwitch from "../components/CustomSwitch";
import ListItem from "../components/ListItem";

export default function HomeScreen({ navigation }) {
  const [booksTab, setBooksTab] = useState(1);
  const [ongoingLessons, setOngoingLessons] = useState([]);
  const [pastLessons, setPastLessons] = useState([]);
  const [filteredLessons, setFilteredLessons] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://wolnelektury.pl/api/books/")
      .then((response) => response.json())
      .then((data) => {
        const ongoing = data.slice(0, 20).map((book) => ({
          id: book.slug || `${Math.random()}`,
          poster: `https://wolnelektury.pl/media/${book.cover}`,
          title: book.title,
          subtitle: book.author,
          genre: book.genre || "Unknown",
          isFree: "Yes",
        }));

        const past = data.slice(20, 40).map((book) => ({
          id: book.slug || `${Math.random()}`,
          poster: `https://wolnelektury.pl/media/${book.cover}`,
          title: book.title,
          subtitle: book.author,
          genre: book.genre || "Unknown",
          isFree: "Yes",
        }));

        setOngoingLessons(ongoing);
        setPastLessons(past);
        setFilteredLessons(ongoing);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to load data. Please try again.");
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, []);

  const onSelectSwitch = (value) => {
    setBooksTab(value);
    const lessons = value === 1 ? ongoingLessons : pastLessons;
    setFilteredLessons(
      lessons.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    const lessons = booksTab === 1 ? ongoingLessons : pastLessons;
    setFilteredLessons(
      lessons.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const renderItem = ({ item }) => (
    <ListItem
      photo={{ uri: item.poster }}
      title={item.title}
      subTitle={item.subtitle}
      genre={item.genre}
      isFree={item.isFree}
      onPress={() =>
        navigation.navigate("Details", {
          title: item.title,
          id: item.id,
        })
      }
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.greetingText}>Hello, Zaki </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require("../assets/images/user-profile.jpg")}
              style={styles.profileImage}
              imageStyle={styles.profileImageStyle}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.searchBar}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search by title"
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>

        <View style={styles.switchContainer}>
          <CustomSwitch
            selectionMode={1}
            option1="OnGoing Lessons"
            option2="Past Lessons"
            onSelectSwitch={onSelectSwitch}
          />
        </View>

        <View style={{ paddingBottom: 20 }}>
          {loading ? (
            <ActivityIndicator
              size="large"
              color="#00A"
              style={styles.loader}
            />
          ) : error ? (
            <Text style={styles.errorText}>{error}</Text>
          ) : (
            <FlatList
              data={filteredLessons}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
              ListEmptyComponent={
                <Text style={styles.emptyText}>No data available</Text>
              }
              contentContainerStyle={styles.listContainer}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 18,
    fontFamily: "Roboto-Medium",
  },
  profileImage: {
    width: 35,
    height: 35,
  },
  profileImageStyle: {
    borderRadius: 25,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#C6C6C6",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
  },
  switchContainer: {
    marginVertical: 20,
  },
  loader: {
    marginTop: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
  emptyText: {
    textAlign: "center",
    color: "#666",
    marginTop: 20,
  },
});
