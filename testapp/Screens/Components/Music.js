import { ScrollView, Dimensions } from 'react-native'
import Footer from './Footer';
import React from 'react';
import NFTCards from './NFTCards';

// const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Music() {
  return (
    <ScrollView style={{marginBottom:8, height:height*0.70}}>
      <NFTCards backgroundPath={require('../assets/MusicNft.jpeg')} LogoPath={require('../assets/MusicNft.jpeg')} Title={'Musical Ancesion'} />
      <NFTCards backgroundPath={require('../assets/MusicNft1.jpeg')} LogoPath={require('../assets/MusicNft1.jpeg')} Title={'Musical Ancesion'} />
      <NFTCards backgroundPath={require('../assets/MusicNft.jpeg')} LogoPath={require('../assets/MusicNft.jpeg')} Title={'Musical Ancesion'} />
      <NFTCards backgroundPath={require('../assets/MusicNft1.jpeg')} LogoPath={require('../assets/MusicNft1.jpeg')} Title={'Musical Ancesion'} />
      <NFTCards backgroundPath={require('../assets/MusicNft.jpeg')} LogoPath={require('../assets/MusicNft.jpeg')} Title={'Musical Ancesion'} />
      <NFTCards backgroundPath={require('../assets/MusicNft1.jpeg')} LogoPath={require('../assets/MusicNft1.jpeg')} Title={'Musical Ancesion'} />
      <Footer/>
    </ScrollView>
  )
}
