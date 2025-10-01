import {View, StyleSheet,Text} from "react-native";
import ListaCursos from "../Componentes/ListaCursos";
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

        <ListaCursos/>
      </>
    
    
  );
}

const estilos = StyleSheet.create({
 topo:{
  width:"100%",
  height:150,
  backgroundColor:"purple",
  fontFamily:"arial",
  marginTop:20,
  fontSize:60,
  
 },


 tituloHeader:{
  width:"100%",
  color:"white",
  textAlign:"center",
  paddingTop:50,
  fontSize:28,
  borderRadius:20,
  


 },
    cursosContent:{
    width:"100%",
    textAlign:"center",
    backgroundColor:"gray",
    paddingTop:30,
    marginTop:20,
    fontSize:18,
    borderRadius:20,
    color:"black",
    fontFamily:"arial",
    

    
    
      
} 
});
