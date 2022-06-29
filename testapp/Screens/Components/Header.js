import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default function Header(props, {navigation}) {
  // const {navigation} = props;
  return (
    <View style={[styles.header, {height: props.Transparency == 1 ? 100 : 50}]}>
      <View style={styles.headerTop}>
        <Text style={styles.heading}>NFT Market</Text>
        <FontAwesome style={styles.user} name="user" size={20} color="white" />
        <TouchableOpacity style={styles.logout} onPress={props.Press}>
          <Feather name="log-out" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <View style={[styles.searchbarView, {opacity: props.Transparency}]}>
        <TextInput
          style={styles.searchbar}
          placeholder="Search items, collections and accounts"
        />
        <FontAwesome
          style={styles.searchIcon}
          name="search"
          size={15}
          color="grey"
        />
        <FontAwesome
          style={styles.micIcon}
          name="microphone"
          size={15}
          color="grey"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f91a40',
  },
  heading: {
    marginTop: 14,
    marginLeft: 45,
    fontSize: 18,
    color: 'white',
    fontFamily: 'Raleway-Bold',
  },
  searchbarView: {
    marginHorizontal: 10,
    marginTop: 15,
  },
  searchbar: {
    backgroundColor: 'white',
    height: 35,
    paddingVertical: 0.5,
    paddingHorizontal: 30,
    fontFamily: 'Raleway-Regular',
  },
  searchIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  micIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  user: {
    position: 'absolute',
    top: 15,
    right: 50,
    color: 'white',
  },
  logout: {
    position: 'absolute',
    top: 15,
    right: 15,
    color: 'white',
  },
});
