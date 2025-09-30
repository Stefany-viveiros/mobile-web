import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
    <View style={estilos.topo}>
      <Text style={estilos.tituloHeader}>Stefany Barbosa</Text>
      <Text style={estilos.corpo}>Bem vindo!!!</Text>
    </View>

    <View>
      <Text style={estilos.popeto}>Popeto</Text>
    </View>
  </>

  );
}

const estilos = StyleSheet.create({
 topo:{
  width:"100%",
  height:150,
  backgroundColor:"purple",
 },

 tituloHeader:{
  width:"100%",
  color:"white",
  textAlign:"center",
  paddingTop:60,
  fontSize:20,

 },

 corpo:{
  width:"100%",
  height:300,
  color:"black",
  textAlign:"center",
  paddingTop:60,
  fontSize:20,
  backgroundColor:"gray",

 },
 popeto:{
  width:"100%",
  height:300,
  color:"black",
  textAlign:"center",
  paddingTop:60,
  fontSize:20,
  backgroundColor:"purple",

 }
});
