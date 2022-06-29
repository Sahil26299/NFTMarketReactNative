import { ScrollView, Dimensions } from 'react-native'
import Footer from './Footer';
import React from 'react';
import NFTCards from './NFTCards';

// const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Top() {
  return (
    <ScrollView style={{marginBottom:8, height:height*0.70}}>
      <NFTCards backgroundPath={require('../assets/horizontalNft1.webp')} LogoPath={require('../assets/horizontalNft1.webp')} Title={'Champions Ancession'} />
      <NFTCards backgroundPath={require('../assets/nft2.jpeg')} LogoPath={require('../assets/nft2.jpeg')} Title={'Champions Ancession'} />
      <NFTCards backgroundPath={require('../assets/horizontalNft2.webp')} LogoPath={require('../assets/horizontalNft2.webp')} Title={'Champions Ancession'} />
      <NFTCards backgroundPath={require('../assets/horizontalNft1.webp')} LogoPath={require('../assets/horizontalNft1.webp')} Title={'Champions Ancession'} />
      <NFTCards backgroundPath={require('../assets/nft2.jpeg')} LogoPath={require('../assets/nft2.jpeg')} Title={'Champions Ancession'} />
      <NFTCards backgroundPath={require('../assets/horizontalNft2.webp')} LogoPath={require('../assets/horizontalNft2.webp')}  Title={'Champions Ancession'}/>
      <Footer/>
    </ScrollView>
  )
}
