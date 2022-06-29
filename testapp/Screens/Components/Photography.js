import { ScrollView, Dimensions } from 'react-native'
import Footer from './Footer';
import React from 'react';
import NFTCards from './NFTCards';

// const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Photography() {
  return (
    <ScrollView style={{marginBottom:8, height:height*0.70}}>
      <NFTCards backgroundPath={require('../assets/PhotographicNft1.jpeg')} LogoPath={require('../assets/PhotographicNft1.jpeg')} Title={'Panorama Shots'} />
      <NFTCards backgroundPath={require('../assets/PhotographicNft2.jpeg')} LogoPath={require('../assets/PhotographicNft2.jpeg')} Title={'Panorama Shots'} />
      <NFTCards backgroundPath={require('../assets/PhotographicNft1.jpeg')} LogoPath={require('../assets/PhotographicNft1.jpeg')} Title={'Panorama Shots'} />
      <NFTCards backgroundPath={require('../assets/PhotographicNft2.jpeg')} LogoPath={require('../assets/PhotographicNft2.jpeg')} Title={'Panorama Shots'} />
      <NFTCards backgroundPath={require('../assets/PhotographicNft1.jpeg')} LogoPath={require('../assets/PhotographicNft1.jpeg')} Title={'Panorama Shots'} />
      <NFTCards backgroundPath={require('../assets/PhotographicNft2.jpeg')} LogoPath={require('../assets/PhotographicNft2.jpeg')} Title={'Panorama Shots'} />
      <Footer/>
    </ScrollView>
  )
}
