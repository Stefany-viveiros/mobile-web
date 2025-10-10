import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={estilos.topo}>
        <Text style={estilos.tituloHeader}>Fut Popeto</Text>
    </View>
  )
}

const estilos = StyleSheet.create({
    topo:{
        width:"100%",
        height:120,
        backgroundColor: "#D7D7DE",
        borderBottomColor: "#9c9ca1ff",
        borderBottomWidth:3,
        textAlign:"center",
       
    },

    tituloHeader: {
        width:"100%",
        textAlign:"center",
        color:"#F07716",
        fontWeight: "bold",
        fontSize:32,
        paddingTop:40,
        fontFamily:"arial",
        

    }
})
