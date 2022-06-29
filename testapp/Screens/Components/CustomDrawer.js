import React, {useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function CustomDrawer(props) {
  const {navigation} = props;
  return (
    <DrawerContentScrollView style={{backgroundColor: '#cffcfe'}} {...props}>
   
      <View
        style={{
          backgroundColor: 'white',
          marginHorizontal: 10,
          marginVertical: 5,
          padding: 10,
          borderRadius: 10,
          alignItems: 'center',
        }}>
        <View
          style={{
            borderColor: '#000',
            borderWidth: 2,
            borderRadius: 60,
            marginBottom: 15,
          }}>
          <SimpleLineIcons
            name="user"
            size={50}
            color="#000"
            style={{padding: 20}}
          />
          {/* <SimpleLineIcons name='user-female' size={50} color='#000' style={{ padding:20, }}/> */}
        </View>
        <Text
          style={{color: '#f91a40', fontSize: 16, fontFamily: 'Raleway-Bold'}}>
          User Name
        </Text>
      </View>
      <DrawerItemList {...props}/>
      
      {/* <DrawerItem
        label={() => (
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              fontFamily: 'Raleway-Regular',
            }}>
            Profile
          </Text>
        )}
        onPress={() => navigation.navigate('Home')}
        icon={() => <AntDesign name="profile" size={20} color="#f91a40" />}
      />

      <DrawerItem
        label={() => (
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              fontFamily: 'Raleway-Regular',
            }}>
            Settings
          </Text>
        )}
        onPress={() => navigation.navigate('Home')}
        icon={() => <MaterialIcons name="settings" size={20} color="#f91a40" />}
      /> */}
    </DrawerContentScrollView>
  );
}
