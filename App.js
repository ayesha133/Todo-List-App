import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, TouchableOpacity, FlatList, TextInput,Modal } from 'react-native';
import Item from './components/Item'



export default function App() {

  const [task, setTask] = useState('')
  const [modal, setModal] = useState(false)
  const [itemArray, setItemArray] = useState([])


  function addItem() {
   setItemArray(itemArray =>[...itemArray,task])
   setModal(false)
   setTask('')
  }

 

  return (
    <View style={styles.container}>
     <StatusBar style="auto" />

    <View style={styles.header} >
    <View style={styles.headerComp}>
      <Text style={{
        fontSize: 30,
        fontWeight: 'bold',
        color:'white'}}> Your Tasks</Text>

      <TouchableOpacity style={styles.addButton}
      onPress={() => setModal(true)} 
      
      >
       <Text style={{
        fontSize: 17,
        fontWeight: 'bold',
        color:'black' }}>Add Item</Text> 

      </TouchableOpacity>
      </View>
    </View>

    <View style={styles.wrapper}>
     

    <Modal
      animationType='slide'
      visible={modal}
      transparent={true}
      >
      <View style={styles.centeredView}>
      <View style={styles.modalView}>
      <TextInput
        multiline 
        placeholder="Write your task"
        style={{fontSize:20}}
        onChangeText={(val) => setTask(val)}
        value={task}
        maxLength={300}
      />
    
      <TouchableOpacity style = {styles.buttonModal} 
        onPress = {() => addItem()}   
      >
      <Text style = {styles.sendTitle}>Add</Text>
      </TouchableOpacity>
      </View>
        </View>
    </Modal>

    <SafeAreaView style={styles.container1} >
     <FlatList
      data={itemArray}
      keyExtractor={(item, index) => index.toString()} //this fixed the key bug
      renderItem={({item}) => (
        <TouchableOpacity>
        <Item 
        text={item}
        //key={item.key} not using this anymore
        />
        </TouchableOpacity>
       
      )}
    /> 
    </SafeAreaView>

    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5',
  },

  header: {
      paddingTop: 80,
      paddingBottom:20,
      paddingHorizontal: 20,
      backgroundColor: '#ae6fe8',
   
    },

    headerComp: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      
  
    },

    addButton: {
      elevation:8,
      padding:10,
      paddingHorizontal:25,
      backgroundColor:'#f3e9fb',
      borderRadius:5,
  
  
    },

    wrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
      
    },

    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },

    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
  },

  
  buttonModal: {
      elevation:2,
      marginTop:15,
      padding:7,
      paddingHorizontal:25,
      backgroundColor:'#f3e9fb',
      borderRadius:5,
  
  
    },

  container1: {
    flexGrow: 1,
    top:-60,
    //height:433,
    marginTop:2,
    },
      

  items: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },

 
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

 

});