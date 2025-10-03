import {Text, View, StyleSheet, FlatList, ScrollView} from "react-native";

export default function ListsALunos() {
    const alunos = ["Rodrigo", "Juliana", "Paty", "Bruno", "Fernando", "Stefany"];
  return (
    <View style={estilos.topo}>
        <Text style={estilos.comeco}>Lista de alunos</Text>
        <FlatList
        
            data = {alunos}
            renderItem={({ item }) => (
                <View style={estilos.usuarios}>
                    <Text style={estilos.centro}>•</Text>
                    <Text style={estilos.aluno}>{item}</Text>
        
                </View>
  )}
       />
    </View>
)}


const estilos = StyleSheet.create({
comeco: {
    backgroundColor:"purple",
    color:"white",
    textAlign:"center",
    fontSize:18,
    borderRadius:8,
    fontFamily:"arial",
    padding:10,   
},

topo:{
    padding:15,
   
},

aluno:{
    alignItems:"center",
    borderRadius:10,
    padding:15,
    gap:10,
    fontFamily:"arial",

},

usuarios:{
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"gray",
    paddingLeft:15,
    marginTop:10,
    borderRadius:10,
    borderColor:"purple",
    marginBottom:2,
    fontFamily:"arial",
    elevation:3,
    borderWidth:2,

},

centro:{
    fontSize:20,
    marginRight:8,   

}  
});
  
  

