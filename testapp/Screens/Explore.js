import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native'
import React, {useState} from 'react'
import Header from './Components/Header'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Top from './Components/Top';
import Art from './Components/Art';
import Music from './Components/Music';
import Photography from './Components/Photography';
import Collectible from './Components/Collectible';

export default function Explore({navigation}) {
    const [num1, setNum1] = useState(1);
    return (
        <View>
            <Header Transparency={0} Press={()=>navigation.replace('Login')} />
                <TouchableOpacity style={styles.menu} onPress={()=>navigation.openDrawer()}>
                    <MaterialIcons name="menu" size={25} color="white"/>
                </TouchableOpacity>
            <View style={styles.container1}>
                <Text style={styles.container1Heading}>Explore Collections</Text>
                <View style={styles.container1Options}>
                    <TouchableOpacity onPress={()=>setNum1(1)}>
                    <Text style={{marginHorizontal:10, color:'black' ,fontFamily:num1==1?'Raleway-Bold':'Raleway-Regular', fontSize:15}}>Top</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>setNum1(2)}>
                    <Text style={{marginHorizontal:10, color:'black' ,fontFamily:num1==2?'Raleway-Bold':'Raleway-Regular', fontSize:15}}>Art</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>setNum1(3)}>
                    <Text style={{marginHorizontal:10, color:'black' ,fontFamily:num1==3?'Raleway-Bold':'Raleway-Regular', fontSize:15}}>Music</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>setNum1(4)}>
                    <Text style={{marginHorizontal:10, color:'black' ,fontFamily:num1==4?'Raleway-Bold':'Raleway-Regular', fontSize:15}}>Photography</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>setNum1(5)}>
                    <Text style={{marginHorizontal:10, color:'black' ,fontFamily:num1==5?'Raleway-Bold':'Raleway-Regular', fontSize:15}}>Collectibles</Text>
                    </TouchableOpacity>

                </View>
                <View style={{height:1, width:'100%', backgroundColor:'black', marginVertical:5}}><Text>S</Text></View>
            </View>
            {num1==1?<Top/>:num1==2?<Art/>:num1==3?<Music/>:num1==4?<Photography/>:num1==5?<Collectible/>:<View/>}
        </View>
    )
}
const styles = StyleSheet.create({
    menu:{
        position:'absolute',
        top:13,
        left:10,
    },
    container1:{
        padding:15,
        alignItems:'center'
    },
    container1Heading:{
        marginVertical:15,
        fontFamily:'Raleway-Bold',
        color:'black',
        fontSize:25
    },
    container1Options:{
        flexDirection:'row'
    },
    container2:{
        
    }
})