import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Button, Alert, TouchableOpacity  } from 'react-native'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const navigation = useNavigation();
    const [endereco, setEndereco] = useState();
    const enviarContato = async () => {
        if (!nome || !telefone) {
            Alert.alert("Erro", "Por favor, preeencha todos os campos");
            return;
        }

        const novoContato = { nome, telefone }
        axios.post('http://10.0.2.2:3000/contatos/', novoContato)
            .then((resposta) => {
                if (resposta.status === 201) {
                    Alert.alert("Sucesso", "Contato adicionado");
                    setNome('');
                    setTelefone('');
                    
                    // AQUI ESTÁ A NAVEGAÇÃO - redireciona para a lista de contatos
                    navigation.navigate('ListaContatos');
                } else {
                    Alert.alert("Erro", "Falha ao cadastrar contato")
                }
            })
            .catch((error) => {
                console.error("Erro ao cadastrar:", error);
                Alert.alert("Erro", "Não foi possível conectar ao servidor");
            });
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.label}>Nome:</Text>
            <TextInput 
                style={estilos.input} 
                value={nome} 
                onChangeText={setNome} 
                placeholder="Digite seu nome" 
            />

            <Text style={estilos.label}>Telefone:</Text>
            <TextInput 
                style={estilos.input} 
                value={telefone} 
                onChangeText={setTelefone} 
                placeholder="Digite seu telefone" 
                keyboardType="phone-pad"
            />

             <Text style={estilos.label}>email:</Text>
            <TextInput 
                style={estilos.input} 
                value={telefone} 
                onChangeText={setEmail} 
                placeholder="Digite seu email" 
                keyboardType="phone-pad"
            />

             <Text style={estilos.label}>Endereço:</Text>
            <TextInput 
                style={estilos.input} 
                value={telefone} 
                onChangeText={setEndereco} 
                placeholder="Digite seu Endereço" 
                keyboardType="phone-pad"
            />

            <TouchableOpacity onPress={enviarContato}>
                <Text style={estilos.button}>Cadastrar Contato</Text>
            </TouchableOpacity>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 20,
        flex: 1,
        justifyContent: 'center',
    },

    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
        color: '#333',
    },

    input: {
        borderWidth: 2,
        borderColor: "#0A88C7",
        padding: 12,
        marginBottom: 20,
        borderRadius: 12,
        backgroundColor: "white",
        fontSize: 16,
    },

    button: {
        backgroundColor: "#0A88C7",
        marginTop: 10,
        borderRadius: 18,
        padding: 15,
        textAlign: "center",
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
})