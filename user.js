import { useEffect, useState } from "react";
import { View,StyleSheet,Text } from "react-native";

export const userScreeen=({navigation,route})=>{
    const [userDetails,setUserDetails]=useState();
    useEffect(()=>{},[]);

console.log("navigation",route);
    return (
        <View style={style.container}>

        <Text >{route.params?.data?.name}</Text>
        </View>
    );
}
const style=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },

});