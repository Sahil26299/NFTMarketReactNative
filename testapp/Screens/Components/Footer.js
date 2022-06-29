import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Footer() {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.aboutView}>
        <Text style={styles.footerAboutHead}>NFT Market</Text>
        <Text style={styles.footerAboutText}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi non neque tempora a, expedita modi vel esse voluptatem? Reprehenderit tempora 
            laboriosam eos vitae optio. Ea non culpa at officia ex quas beatae perspiciatis libero ratione porro sunt, similique adipisci magnam deserunt 
            blanditiis doloremque!</Text>
      </View>
      <Text style={styles.FooterHeading}>Follow us on</Text>
      <View style={styles.iconsFooter}>
        <AntDesign style={styles.Icon} size={22} color='white' name='instagram'/>
        <AntDesign style={styles.Icon} size={22} color='white' name='facebook-square'/>
        <AntDesign style={styles.Icon} size={22} color='white' name='linkedin-square'/>
        <AntDesign style={styles.Icon} size={22} color='white' name='twitter'/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    footerContainer:{
        backgroundColor:'#f91a40',
        alignItems:'center',
        height: height*0.40,
        paddingVertical:10,
        paddingHorizontal:5
    },
    FooterHeading:{
        fontSize:18,
        color:'white',
        fontFamily:'Raleway-Bold'
    },
    iconsFooter:{
        flexDirection:'row',
        margin:10
    },
    Icon:{
        marginHorizontal:15
    },
    aboutView:{
        alignItems:'center',
        marginVertical:20,
        paddingHorizontal:25
    },
    footerAboutHead:{
        fontSize:18,
        fontFamily:'Raleway-Bold',
        color:'white',
    },
    footerAboutText:{
        color:'white',
        fontSize:15,
        textAlign:'center',
        fontFamily:'Raleway-Regular',
    }
}) 