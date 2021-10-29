//mport { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, Text, View,Image, SafeAreaView,Dimensions, TouchableNaableNativeFeddback, TouchableNativeFeedback, Button,Alert,  Platform, } from 'react-native';
// import { useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import { View } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';



export default function App() {

  // console.log("App Executed!");
  //console.log(useDimensions());
  //const {landscape} = useDeviceOrientation();
  //const handlePress = ()=> console.log("Text clicked!");
  
  //return <WelcomeScreen />;  
  return <ViewImageScreen />;
  // (

    // welcomescreen






    // <SafeAreaView style={styles.container}>
    //   {/* <Text numberOfLines={1} onPress={handlePress}>Hello Akki! Welcome to react native course. lets get started with  its core components like view,text,scrollview,etc.</Text>
    //   <Text>Hello Akki!</Text>
    //   <Image source={require("./assets/favicon.png")} />
    //   <TouchableNativeFeedback onPress={()=> console.log("img tapped")} >
    //     <View style={{width:200,height:90,backgroundColor:"dodgerblue"}}></View>
    //     <Image 
    //     // blurRadius={10}
    //     fadeDuration={1000}
    //     source = {{
    //       width:200,
    //       height:300,
    //       uri: "https://picsum.photos/200/300"}} 
    //     />
    //   T
    //   </TouchableNativeFeedback> */}
    //  {/* <Button 
    //   color="orange"
    //   title="Click Me" 
    //   onPress={()=>
    //   // Alert.alert("My title", "My message",[
    //   //   {text:"Yes", onPress:()=>console.log("Yes clicked")},
    //   //   {text:"No", onPress:()=>console.log("No clicked")},
    //   // ]) 
    //     Alert.prompt("My title", "My message", (text) =>console.log(text)) //prompt works on ios only for now
    
    // } /> */}
    //   {/* <Button title="Click Me" onPress={()=>console.log("button clicked")} />
    //   <StatusBar style="auto" /> */}
    //   <View style={{
    //     backgroundColor: 'dodgerblue',
    //     width:'100%',
    //     height: landscape ? '100%' : '30%',
    //   }}>
    //   </View>
    // </SafeAreaView>

    // Flex in react-native
    // <View style = {{
    //   backgroundColor: '#fff',
    //   flex: 1,
    //   flexDirection:'row',
    //   justifyContent:'center',
    //   alignItems:'center',
    //   alignContent:'center',
    //   // flexWrap:'wrap',
    // }}>
    //   <View style={{
    //     backgroundColor:'dodgerblue',
    //     // flexBasis: 100,   //map width or height
    //     // flexGrow:1,       //will work same as flex
    //     // flex:-1,        //flex is shorthand for flexgrow & shrink
    //     width:100,
    //     height:100,
        
    //     //alignSelf:'flex-start',
    //   }} />
    //   <View style={{
    //     backgroundColor:'gold',
    //     width:100,
    //     height:100,
    //     // top:20,
    //     // left:20,
    //     // position:'absolute',
    //   }} />
    //   <View style={{
    //     backgroundColor:'tomato',
    //     width:100,
    //     height:100,
    //   }} />
    //   {/* <View style={{
    //     backgroundColor:'grey',
    //     width:100,
    //     height:100,
    //   }} />
    //   <View style={{
    //     backgroundColor:'greenyellow',
    //     width:100,
    //     height:100,
    //   }} /> */}
    // </View>
  //);
}



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//    //paddingTop: Platform.OS == 'android' ?  30 : 0, 
//     // alignItems: 'center',
//     // justifyContent: 'center', 
    
//   },
// });
