import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerContent}
      >
        <View style={styles.imageBackground}>
          <Image
            source={require("../assets/images/user-profile.jpg")}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Zaki</Text>
        </View>
        <View style={styles.drawerListContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => {}} style={styles.footerItem}>
          <View style={styles.footerItemContent}>
            <Ionicons name="share-social-outline" size={22} />
            <Text style={styles.footerItemText}>Tell a Friend</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.footerItem}>
          <View style={styles.footerItemContent}>
            <Ionicons name="exit-outline" size={22} />
            <Text style={styles.footerItemText}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    backgroundColor: "",
  },
  imageBackground: {
    padding: 20,
    backgroundColor: "#272F7A",
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Roboto-Medium",
    marginBottom: 5,
  },
  coinContainer: {
    flexDirection: "row",
  },
  coinText: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    marginRight: 5,
  },
  drawerListContainer: {
    flex: 1,
    paddingTop: 30,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: "#95C1E6",
  },
  footerItem: {
    paddingVertical: 15,
  },
  footerItemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  footerItemText: {
    fontSize: 15,
    fontFamily: "Roboto-Medium",
    marginLeft: 5,
  },
});

export default CustomDrawer;
