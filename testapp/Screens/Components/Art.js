import { ScrollView, Dimensions } from 'react-native'
import Footer from './Footer';
import React from 'react';
import NFTCards from './NFTCards';

// const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Art() {
  return (
    <ScrollView style={{marginBottom:8, height:height*0.70}}>
      <NFTCards backgroundPath={require('../assets/ArtNft1.jpeg')} 
      LogoPath={require('../assets/ArtNft1.jpeg')} Title={'Creative Ancession'}
      />
      <NFTCards backgroundPath={require('../assets/ArtNft2.jpeg')} 
      LogoPath={require('../assets/ArtNft2.jpeg')} Title={'Creative Ancession'}
      />
      <NFTCards backgroundPath={require('../assets/ArtNft3.webp')} 
      LogoPath={require('../assets/ArtNft3.webp')} Title={'Creative Ancession'}
      />
      <NFTCards backgroundPath={require('../assets/ArtNft1.jpeg')} 
      LogoPath={require('../assets/ArtNft1.jpeg')} Title={'Creative Ancession'}
      />
      <NFTCards backgroundPath={require('../assets/ArtNft2.jpeg')} 
      LogoPath={require('../assets/ArtNft2.jpeg')} Title={'Creative Ancession'}
      />
      <NFTCards backgroundPath={require('../assets/ArtNft3.webp')} 
      LogoPath={require('../assets/ArtNft3.webp')} Title={'Creative Ancession'}
      />
      <Footer/>
    </ScrollView>
  )
}