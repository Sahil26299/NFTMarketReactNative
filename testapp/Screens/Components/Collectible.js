import { ScrollView, Dimensions } from 'react-native'
import Footer from './Footer';
import React from 'react';
import NFTCards from './NFTCards';

// const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Collectible() {
  return (
    <ScrollView style={{marginBottom:8, height:height*0.70}}>
      <NFTCards backgroundPath={require('../assets/CollectibleNft1.jpeg')} LogoPath={require('../assets/collectiblelogo.png')} Title={'Collective Cluster'} />
      <NFTCards backgroundPath={require('../assets/CollectibleNft2.webp')} LogoPath={require('../assets/collectiblelogo.png')} Title={'Collective Cluster'} />
      <NFTCards backgroundPath={require('../assets/CollectibleNft1.jpeg')} LogoPath={require('../assets/collectiblelogo.png')} Title={'Collective Cluster'} />
      <NFTCards backgroundPath={require('../assets/CollectibleNft2.webp')} LogoPath={require('../assets/collectiblelogo.png')} Title={'Collective Cluster'} />
      <NFTCards backgroundPath={require('../assets/CollectibleNft1.jpeg')} LogoPath={require('../assets/collectiblelogo.png')} Title={'Collective Cluster'} />
      <NFTCards backgroundPath={require('../assets/CollectibleNft2.webp')} LogoPath={require('../assets/collectiblelogo.png')} Title={'Collective Cluster'} />
      <Footer/>
    </ScrollView>
  )
}
