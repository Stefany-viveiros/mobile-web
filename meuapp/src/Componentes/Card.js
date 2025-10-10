import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {Button, View, Text, StyleSheet} from "react-native"

export default function Card() {
    const navigation = useNavigation()
  return (
    <View style={estilos.container}>
        <Text style={estilos.cardTitle}>Sobre</Text>
        <Text style={estilos.cardContent}>Saiba Mais sobre nós</Text>
        <Button
            title="Ir para sobre"
            onPress={() => navigation.navigate("Sobre")}
            
        />
    </View>
  )
}

const estilos = StyleSheet.create({
    container:{
        backgroundColor:"#ffff",
        borderRadius:1.41,
        shadowColor:"blue",
        shadowOpacity:0.2,
        elevation:2,
        padding:20,
        margin:20
        
    },
    cardTitle:{
        fontSize:18,
        fontWeight:"bold",
        marginBottom: 10
    },
    cardContent:{
        fontSize:14,
        marginBottom:10
    }

    
});
