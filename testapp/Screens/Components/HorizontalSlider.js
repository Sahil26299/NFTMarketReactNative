import React from 'react';
import { FlatList,Image, View, Dimensions} from 'react-native';


const width=Dimensions.get("screen").width;
const height=Dimensions.get("screen").height;

export default function HorizontalSlider() {
  return (
    <View style={{marginBottom:8}}>
      <FlatList
        data={[
          {
            index:'1',
            key:<Image style={{width:width*1, height:"100%"}} source={require('../assets/nft1.jpeg')}/>
          },
          {
            index:'2',
            key:<Image style={{width:width*1, height:"100%"}} source={require('../assets/nft2.jpeg')}/>
          },
          {
            index:'3',
            key:<Image style={{width:width*1, height:"100%"}} source={require('../assets/nft3.webp')}/>
          },
          {
            index:'4',
            key:<Image style={{width:width*1, height:"100%"}} source={require('../assets/nft4.webp')}/>
          },
          {
            index:'5',
            key:<Image style={{width:width*1, height:"100%"}} source={require('../assets/nft5.jpeg')}/>
          },
        ]}
        horizontal 
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item)=>{
          return item.index;
        }}
        style={{opacity:0.8}}
        renderItem={({item}) => <View style={{width:width*1, height:height*0.2}}>{item.key}</View>}
        pagingEnabled/>
    </View>
  )
}
