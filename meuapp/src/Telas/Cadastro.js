import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const navigation = useNavigation

    const enviarContato = async () => {
        if (!nome || !telefone) {
            Alert.alert("Erro, por favor, preeencha todos os campos");
            return;
        }

        const novoContato = { nome, telefone }
        axios.post('http://10.0.2.2:3000/contatos/', novoContato)
            .then((resposta) => {
                if (resposta.status === 201) {
                    Alert.alert("Sucesso, contato adicionado");
                    setNome('');
                    setTelefone('');
                } else {
                    Alert.alert("Erro, falha ao cadastrar contato")
                }
            })
    }

    return (
        <View style={estilos.container}>

            <Text style={estilos.label}>Nome : </Text>
            <TextInput style={estilos.input} value={nome} onChangeText={setNome} placeholder="Digite seu nome" />


            <Text style={estilos.label}>Telefones : </Text>
            <TextInput style={estilos.input} value={telefone} onChangeText={setTelefone} placeholder="Digite seu telefone" />

            <Button style={estilos.botao} title="Cadastrar" onPress={enviarContato} />
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 20,
    },

    label: {
        fontSize: 15,
        marginBottom: 5,
        borderRadius: 10,
    },

    input: {
        borderWidth: 2,
        borderColor: "#0A88C7",
        padding: 10,
        marginBottom: 20,
        borderRadius: 12,
        backgroundColor: "white"

    },

    botao:{
        borderRadius:20
    }
})
