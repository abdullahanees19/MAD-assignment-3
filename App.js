import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from "react-native";
const todoItems = [
  {key: Math.random().toString(), data: "First Item"},
  {key: Math.random().toString(), data: "Second Item"},
  {key: Math.random().toString(), data: "Third Item"},
]

export default function App() {
  const [getInputText, setInputText] = useState('');
  const [getList, setList] = useState(todoItems);

  const addItem = () => {
    console.log(getInputText);
    setList([
      ...getList,
      {key:Math.random().toString() , data:getInputText}
    ]);
    setInputText('');
  }
  const  removeItem = (itemKey) => {
    var list = getList.filter(item => item.key != itemKey)
    setList(list);
  }

  const scrollView = (
    <ScrollView style={styles.scrollview}>
      {getList.map((item, index) =>
        <TouchableOpacity
          key= {item.key}
          activeOpacity={0.7}
          onPress= {() => removeItem(item.key)}
        >
          <View
            style={styles.scrollItem}
          >
            <Text style={styles.scrollviewText}>{index + 1} : {item.data}</Text>
            <View style={{backgroundColor: "#bc544b", borderRadius: 30, padding: 7}}>
              <Text style={styles.removeText}> | </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </ScrollView>
  );

  const emptyScrollView = (
    <View>
      <Text style={{color: "grey", fontSize: 25}}>No item in Cart</Text>
    </View>
  );

  return (
    <View style={styles.sectionContainer}>
      <View style={{flexDirection: "row",  margin: 10, width: "95%",  height: "10%",  backgroundColor: "#279c31", borderRadius: 2}}>
        <Text style={{fontSize: 25,  color: "white" ,margin:15,  fontFamily: 'sans-serif-medium' }}>Shopping Cart</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput }
          placeholder= "Enter Items"
          onChangeText={text => setInputText(text)}
          value={getInputText}
        />
        <TouchableOpacity activeOpacity={0.7} onPress = {addItem} disabled={getInputText.length <=0 }>
          <View style={{backgroundColor:'#279c31', padding: 10, marginLeft:2, borderRadius:30 , paddingHorizontal: 10}}>
            <Text style={{color: "white", fontSize: 20}}> Add </Text>
          </View>
        </TouchableOpacity>
      </View>
      {getList.length <= 0 ? emptyScrollView: scrollView}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#c0d69c',
    alignItems: 'center',
    paddingTop:5
  },
  inputContainer:{
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
    paddingTop: 30,
    alignItems: "center"
  },
  textInput:{
    borderColor: "#bc544b",
    width: '80%',
    fontSize: 20,
    borderBottomWidth: 1,
  },
  scrollItem:{
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: '#279c31',
    width: "90%",
    padding: 4,
    margin: 15,
    borderRadius: 20,
    alignSelf: "center"
  },
  scrollviewText:{
    fontSize: 22,
    color: "white",
  },
  scrollview:{
    width: "100%",
  },
  removeText:{
    fontSize: 15,
    color: "white",
  }
});