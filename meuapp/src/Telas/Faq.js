import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default function Faq() {
  return (
    <View>
        <Text style={estilos.duvidas}>Dúvidas Frequentes</Text>
        <Text style={estilos.titulo}>Como alterar a forma de pagamento?</Text>
        <Text style={estilos.titulo}>Como realizar uma Compra online?</Text>
        <Text style={estilos.titulo}>O que fazer Antes de Comprar?</Text>
        <Text style={estilos.titulo}>O que fazer quando não possui disponibilidade de produto?</Text>
        <Text style={estilos.titulo}>Não lembro da senha, como redefinir uma nova senha?</Text>
        <Text style={estilos.titulo}>Como verificar o status de entrega do produto?</Text>
        <Text style={estilos.titulo}>Como alterar o meu cadastro?</Text>
    </View>
  )
}

const estilos = StyleSheet.create({
    titulo:{
        height:60,
        backgroundColor:"#F0AA3E",
        color:"black",
        borderBottomWidth:3,
        textAlign:"center",
        padding:10,
        borderRadius:8,
        marginTop:10,
        borderBottomColor: "#6c6c6dff",
        borderBottomWidth:3,
        marginRight:10,
        marginLeft:10,
        
       
    },

    duvidas:{
        backgroundColor:"#c5c4c2ff",
        color:"#333131",
        padding:30,
        borderRadius:8,
        marginTop:20,
        borderBottomColor:"orange",
        borderBottomWidth:3,
        marginRight:10,
        marginLeft:10,
        height:90,
        textAlign:"center",
        fontSize:20,
        fontFamily:"arial"
        


    },
    

    })