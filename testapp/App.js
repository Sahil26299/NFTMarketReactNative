import 'react-native-gesture-handler';
import React from 'react';
import Login from './Screens/Login';
import Register from './Screens/Register';
import ForgPassword from './Screens/ForgPassword';
import Welcome from './Screens/Welcome';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Screens/Home';
import CustomDrawer from './Screens/Components/CustomDrawer';
import Explore from './Screens/Explore';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Profile from './Screens/Profile';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Settings from './Screens/Settings';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawer {...props} />}
      defaultStatus="closed"
      screenOptions={{
        drawerActiveTintColor:"#f91a40",
        drawerInactiveTintColor:'#000',
        drawerLabelStyle:{
          fontFamily:'Raleway-Bold'
        }
      }}
      >
      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({focused, color, size}) => {
            return <Entypo name="home" size={20} color={color} />;
          },
        }}
        name="Home"
        component={Home}
      />
      <Drawer.Screen
        name="Explore"
        component={Explore}
        options={{
          headerShown: false,
          drawerIcon: ({focused, color, size}) => {
            return <AntDesign name="search1" size={20} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          drawerIcon: ({focused, color, size}) => {
            return <AntDesign name="profile" size={20} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          drawerIcon: ({focused, color, size}) => {
            return <MaterialIcons name="settings" size={20} color={color} />;
          },
        }}
      />

    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            options={{headerShown: false}}
            name="Welcome"
            component={Welcome}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Register"
            component={Register}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Forgot Password"
            component={ForgPassword}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Home1"
            component={DrawerNavigator}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
