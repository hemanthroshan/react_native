import { StyleSheet, Text, View,Button,TextInput} from 'react-native';


export default function App() {
  return (
    // <View style={styles.appContainer}>
    //   <View style={styles.inputContainer}>
    //     <TextInput style={styles.textInput} placeholder="Your course goal!" />
    //     <Button title="Add Goal" />
    //   </View>
    //   <View>
    //     <Text>List of goals...</Text>
    //   </View>
    // </View>
    <View style={{padding:50, flexDirection:'row'}}>
      <View style={{
        backgroundColor:'red',
        width:100,
        height:100,
        justifyContent:'center',
        alignItems:'center'
      }}>
        <Text>1</Text>
      </View>
      <View style={{
        backgroundColor:'blue',
        width:100,
        height:100,
        justifyContent:'center',
        alignItems:'center'
      }}>
        <Text>2</Text>
      </View>
      <View style={{
        backgroundColor:'green',
        width:100,
        height:100,
        justifyContent:'center',
        alignItems:'center'
      }}>
        <Text>3</Text>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   appContainer:{
//     padding:50
//   },
//   inputContainer:{
//     // flex:1,
//     flexDirection:'row',
//     justifyContent:'space-between'
//   },
//   textInput:{
//     borderWidth:1,
//     borderColor:'#cccccc',
//     width:'80%',
//     marginRight:8,
//     padding:8
//   }
// });

