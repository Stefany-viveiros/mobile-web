import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import axios from 'axios';

export default function ListaContatos() {
    const [contatos, setContatos] = useState([]);

    // Funçaõ para buscar contatos do servidor
    const listaContatos = () => {
        axios
             .get("http://10.0.2.2:3000/contatos")
            .then((resposta) => {
                setContatos(resposta.data)
            })
            .catch((error) => {
                console.error("Erro ao buscar contatos", error);
            });
    }

    // Use o useEffect para buscar dados
    useEffect(() => {
        listaContatos();
    }, [])

    return (
        <View>
            <Text style={estilos.contatos}>Lista de Contatos</Text>
            {contatos.length > 0 ? (
                contatos.map((contato, index) => (
                    <View style={estilos.topo} key={index}>
                    <Text style={estilos.nome}>Nome: {contato.nome}</Text>
                    <Text style={estilos.nome}> Tel: {contato.telefone}</Text>
                    </View>
                ))

            ) : (
                <Text> Nenhum contato disponivel </Text>
            )}
        </View>
    )
}

const estilos = StyleSheet.create({
    nome:{
        width:"100%",
        textAlign:"center",
        padding:20,
        backgroundColor:"#D7D7DE",
    
        
       
    },
    contatos:{
        width:"100%",
        fontSize:20,
        textAlign:"center",
        padding:20,
        backgroundColor:"gray",
        borderBottomColor: "#1e348aff",
        borderBottomWidth:3,


    },
    topo:{
        marginBottom:8,
        padding:10,
        textAlign:"center",
        fontSize:20,
        marginRight:50,
        marginLeft:50,
        marginTop:10,
        fontWeight:"bold"
        
      
        
    }

})
    

   