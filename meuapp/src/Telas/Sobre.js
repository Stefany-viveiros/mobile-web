import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Image1 from "../../assets/img-1.jpg"
import Image2  from "../../assets/img-2.jpg"

export default function Sobre() {
  const info = {
    nomeApp: "LojaSENAI",
    versao: "1.0.0",
    desenvolvedor:"Stefany Barbosa"
  };
  
  return (
    <ScrollView style={estilos.container}>
        <Text style={estilos.sobre}>Sobre nós</Text>
        <Text style={estilos.inicio}>Bem-vindo ao Lojasenai! Somos mais do que uma loja, somos uma experiência de compra inteligente, prática e acessível. Criamos este aplicativo com um único objetivo: facilitar sua vida na hora de comprar produtos de qualidade com segurança e rapidez.</Text>
        <Text style={estilos.sobre}>O que é o Lojasenai?</Text>
        <Text style={estilos.inicio}>Lojasenai é um aplicativo de compras que reúne uma variedade de produtos em um só lugar. Desde eletrônicos e moda até itens para casa e escritório, oferecemos uma seleção pensada para atender às suas necessidades com praticidade.</Text>
        <Text style={estilos.sobre}>Nossa missão</Text>
        <Text style={estilos.inicio}>Levar aos nossos clientes uma experiência de compra moderna, confiável e eficiente, com produtos de qualidade e atendimento humanizado.</Text>
        <Text style={estilos.sobre}>Nossa visão</Text>
        <Text style={estilos.inicio}>Ser referência em comércio digital, promovendo inovação e acessibilidade para todos os perfis de consumidores.</Text>
        <Text style={estilos.sobre}>Nossos valores</Text>
        <Text style={estilos.inicio}>Confiança: Transparência em cada etapa da compra
                Inovação: Tecnologia a serviço do consumidor.

                Compromisso: Atendimento ágil e suporte dedicado.

                Sustentabilidade: Incentivamos práticas conscientes e responsáveis.</Text>
        <Image source = {Image1} style={estilos.image}/>
        <View style={estilos.line}/>
        <Image source = {Image2} style={estilos.image}/>
        <View style={estilos.line}/>
        <Text style={estilos.titulo}>Sobre o App</Text>
        <Text style={estilos.versao}>Nome:{info.nomeApp}</Text>
        <Text style={estilos.versao}>Versão: {info.versao}</Text>
        <Text style={estilos.versao}>Desenvolvido por: {info.desenvolvedor}</Text>
    </ScrollView>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
  
  },

  image:{
    margin:10,
    borderRadius:12,
    borderColor:"orange",
    borderWidth:2,
  },

  line:{
    width:"90%",
    height:1,
    backgroundColor:"#ccc",
    marginVertical:10
  },
  titulo:{
    fontSize:20,
    fontWeight:15,
    textAlign:"center",
    backgroundColor:"#c5c4c2ff",
   
  },

  versao:{
    backgroundColor:"#c5c4c2ff",
    color:"black",
    padding:10,
    borderBottomColor:"orange",
    borderBottomWidth:0.4,
    borderBottomWidth:0.9,
    marginBottom:2.5,
  
  },
  sobre:{
    backgroundColor:"#8CC7E6",
        color:"",
        padding:5,
        borderRadius:10,
        borderBottomColor:"black",
        borderBottomWidth:3,
        textAlign:"center",
        fontSize:18,
        fontFamily:"arial",
        marginTop:10,
        textShadowColor:"orange",
        marginBottom:20,

  },
  inicio:{
    backgroundColor:"white",
    color:"black",
    textAlign:"justify",
    fontSize:14,
    padding:10,
    borderRadius:5,
    marginBottom:10,
    fontFamily:"arial",

  }
})
