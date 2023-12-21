import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,FlatList, TouchableOpacity, Button} from 'react-native';
import { moviesList } from './Network/Network';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { userScreeen } from './user';
import { Autocomplete } from './autocomplete';
const Home=({navigation})=>{
  const renerItem=({item,index})=>{
    return(
    <TouchableOpacity onPress={()=>{ 
     navigation.navigate('user',{data:item})
      // const updatedData=[...user];
      // updatedData.splice(index,1);
      // console.log("s",updatedData);
      // setUser(updatedData)
    }}
      >
      <Text style={styles.listItem}>
      { 
      item.name
      }
       </Text>
    </TouchableOpacity>
    );
  }
   const [user,setUser]=useState();
  useEffect(()=>{
    
    moviesList().then(res=>res.json()).then(res=>setUser(res));
    
  },[]);
  return(
    
   <View style={styles.container}>
    <Button title='text' onPress={()=>navigation.navigate('AutoComplete')}></Button>
    <FlatList
    data={user}
    renderItem={renerItem}
    ></FlatList>
   
  </View>
  
  );
}
export default function App() {
 const Stack=createNativeStackNavigator();
 
 
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='home' component={Home} ></Stack.Screen>
      <Stack.Screen name='user' component={userScreeen}></Stack.Screen>
      <Stack.Screen name='AutoComplete' component={Autocomplete}></Stack.Screen>
    </Stack.Navigator>
   </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem:{
    borderRadius:10,
    borderWidth:3,
    borderColor:'black',
  },
});
