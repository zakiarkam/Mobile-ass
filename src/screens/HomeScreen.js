import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
// import Carousel from "react-native-snap-carousel";
import Feather from "react-native-vector-icons/Feather";

import BannerSlider from "../components/BannerSlider";
import { windowWidth } from "../utils/Dimensions";

import { ongoinglessons, pastlessons, sliderData } from "../model/data";
import CustomSwitch from "../components/CustomSwitch";
import ListItem from "../components/ListItem";

export default function HomeScreen({ navigation }) {
  const [gamesTab, setGamesTab] = useState(1);

  const renderBanner = ({ item }) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = (value) => {
    setGamesTab(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.greetingText}>Hello John Doe</Text>
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
          <TextInput placeholder="Search" />
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Upcoming Lessons</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>
        {/* 
        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        /> */}

        <View style={styles.switchContainer}>
          <CustomSwitch
            selectionMode={1}
            option1="OnGoing Lessons"
            option2="Past Lessons"
            onSelectSwitch={onSelectSwitch}
          />
        </View>

        {gamesTab == 1 &&
          ongoinglessons.map((item) => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              onPress={() =>
                navigation.navigate("GameDetails", {
                  title: item.title,
                  id: item.id,
                })
              }
            />
          ))}
        {gamesTab == 2 &&
          pastlessons.map((item) => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
              onPress={() =>
                navigation.navigate("GameDetails", {
                  title: item.title,
                  id: item.id,
                })
              }
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
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
    borderColor: "#C6C6C6",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 5,
  },
  sectionHeader: {
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "Roboto-Medium",
  },
  seeAllText: {
    color: "#00A",
  },
  switchContainer: {
    marginVertical: 20,
  },
});
