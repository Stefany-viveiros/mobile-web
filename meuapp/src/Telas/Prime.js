import {View, StyleSheet,Text} from "react-native";
export default function Prime() {
  return (
     <>
        <View style={estilos.topo}>
          <Text style={estilos.tituloHeader}>Cursos SENAI</Text>
        </View>
    
        <View>
          <Text style={estilos.cursosContent}>HTML Completo</Text>
          <Text style={estilos.cursosContent}>Programação de Internet</Text>
          <Text style={estilos.cursosContent}>Informática Básica</Text>
          <Text style={estilos.cursosContent}>Programação em Python</Text>
          <Text style={estilos.cursosContent}>Excel Avançado</Text>
        </View>
      </>
    
    
  );
}

const estilos = StyleSheet.create({
 topo:{
  width:"100%",
  height:150,
  backgroundColor:"purple",
  borderRadius:20
  
 },

 tituloHeader:{
  width:"100%",
  color:"white",
  textAlign:"center",
  paddingTop:60,
  fontSize:20,


 },
    cursosContent:{
    width:"100%",
    textAlign:"center",
    backgroundColor:"gray",
    padding:15,
    fontSize:18,
    
    

    
    

 }
});
