import {View, StyleSheet,Text} from "react-native";
import ListaCursos from "../Componentes/ListaCursos";
import ListsALunos from "../Componentes/ListsALunos";
import ListaPessoas from "../Componentes/ListaPessoas";

export default function Prime() {
  return (
     <>
        <View style={estilos.topo}>
          <Text style={estilos.tituloHeader}>Cursos SENAI</Text>
        </View>
       
       <ListaPessoas/>
       
          <View style={estilos.cursos}>
          <Text style={estilos.cursosContent}>HTML Completo</Text>
          <Text style={estilos.cursosContent}>Programação de Internet</Text>
          <Text style={estilos.cursosContent}>Informática Básica</Text>
          <Text style={estilos.cursosContent}>Programação em Python</Text>
          <Text style={estilos.cursosContent}>Excel Avançado</Text>
        </View>

        <ListaCursos/>

        <ListsALunos/>
      
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
cursos:{
  
  marginTop:10,
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
    flexDirection:"row",
    alignItems:"center",
    marginBotton:8,
    color:"black",
    padding:12,
    backgroundColor:"gray",
    borderWidth:1,
    borderColor:"purple",
    borderRadius:10,
    elevation:3,
    marginTop:10,
    marginRight:20,
    marginLeft:20,
    borderWidth:3,
   
    
    

    
    
      
} 
});
