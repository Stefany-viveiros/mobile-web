import { Text, View, StyleSheet, FlatList } from "react-native";

export default function ListaCursos() {
const data =["React Native", "MoNGO DB", "Express", "Node.js"];

  return (
    <View style={estilos.container}>
        <FlatList
            data = {data}
            renderItem={({ item }) => (
                <View style={estilos.lastItem}>
                    <Text style={estilos.bullet}>•</Text>
                    <Text style={estilos.text}>{item}</Text>
                </View>
            )}
        />

    </View>
  )
}

const estilos = StyleSheet.create({
container:{
    padding:20,
    backgroundColor:"white",
    color:"white",
    textAlign:"center",
    fontSize:20,
    fontFamily:"arial",
    borderRadius:20,
    marginTop:10,
    

},
cursos:{
    backgroundColor:"black",
},
lastItem: {
    flexDirection:"row",
    alignItems:"center",
    marginBotton:8,
    color:"black",
    padding:12,
    backgroundColor:"gray",
    borderWidth:3,
    borderColor:"purple",
    borderRadius:8,
    elevation:5,
    marginTop:10,

   
},

bullet:{
    fontSize:20,
    marginRight:8,
    color:"black",
    
    
},

text:{
    fontSize:18,
    color:"black",
    alignItems:"center",

}
});