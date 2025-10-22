import React from 'react'
import {Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Card from "../Componentes/Card"


export default function Home() {
  const navigation = useNavigation()
  return (
    <View>
        <Card
        title="Sobre"
        content="Saiba mais sobre nós e nossos serviços"
        textButton="Ir para sobre*"
        onPress={() => navigation.navigate("Sobre")}
        />

        <Card
        title="FAQ"
        content="Saiba mais faq"
        textButton="Ir para FAQ"
        onPress={() => navigation.navigate("Faq")}
       
        />

      <Card
        title="Lista Contatos"
        content="Para mais informações"
        textButton="Ir para Lista"
        onPress={() => navigation.navigate("ListaContatos")}
       
        />

        <Card
        title="Cadastro"
        content="Para mais informações"
        textButton="Ir para Cadastro"
        onPress={() => navigation.navigate("Cadastro")}
       
        />
        

    </View>
  )
}
