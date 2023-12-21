import { useState } from "react"
import { TextInput,View,FlatList, StyleSheet,Text } from "react-native";

export const  Autocomplete=()=>{
    const [text,setText]=useState();
    const [data,setData]=useState([
        'Apple',
        'Banana',
        'Cherry',
        'Date',
        'Elderberry',
        'Fig',
        'Grapes',
        'Honeydew',
        'Kiwi',
        'Lemon',
      ]);
      const [filteredData,setFilteredData]=useState([]);

    const filterData=()=>{
       
       const newData= data.filter(item=>item.toLowerCase().includes(text.toLowerCase()));
       console.log(newData);
        setFilteredData(newData);
    }
const handleTextChange=(inputText)=> {
    console.log(inputText);
    setText(inputText)
    filterData(); }
const renderItem = ({ item }) => (
    <Text style={{ padding: 10, fontSize: 16 }}>{item}</Text>
  );

return(
    <View style={styles.container}>
        <Text> HIIIIIIII</Text>
    <TextInput placeholder="Please enter data"
        onChangeText={(text) => handleTextChange(text)}
        value={text}>
    </TextInput>
    <FlatList data={filteredData}
              renderItem={renderItem}  />
    </View>
);


    
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    textInput:{
        borderWidth:10,
        borderRadius:10,

    }

});
