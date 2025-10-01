import { Text, View, StyleSheet, FlatList } from "react-native";

export default function ListaCursos() {
  return (
    <View style={estilos.container}>
        <FlatList
            data={["React Native", "Node.js", "MongoDB"]}
            renderItem={({ item }) => <Text>• {item}</Text> }
        />

    </View>
  )
}

const estilos = StyleSheet.create({
container:{
    marginTop:40,
    padding:20,
    backgroundColor:"purple",
    color:"white",
    textAlign:"center",
    fontSize:20,
    fontFamily:"arial",
    textAlign:"center",



}
})