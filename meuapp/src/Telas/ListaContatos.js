import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native'
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


       // função para excuir
    const deleteContato = (id) => {
        axios
            .delete(`http://10.0.2.2:3000/contatos/${id}`)
            .then(() => {
                //Atualizar lista de contatos 
                setContatos(contatos.filter((contato) => contato.id !== id))
                Alert.alert("Sucesso", "Contato Excluido")
            })
            .catch((error) => {
                console.log("Erro excluir contato", error);
                Alert.alert("Erro, não foi possivel excluir");
            });
    }


    // Use o useEffect para buscar dados
    useEffect(() => {
        listaContatos();
    }, [])

    return (
        <ScrollView>
            <Text style={estilos.contatos}>Lista de Contatos</Text>
            {contatos.length > 0 ? (
                contatos.map((contato, index) => {
                    return (
                        <View style={estilos.topo} key={index}>
                            <Text style={estilos.nome}>Nome: {contato.nome}</Text>
                            <Text style={estilos.nome}> Tel: {contato.telefone}</Text>

                            {/* <Button style={estilos.button}
            title="Excluir"
            onPress={() => deleteContato(contato.id)}
            /> */}

                            <TouchableOpacity onPress={() => deleteContato(contato.id)}>
                                <Text style={estilos.button}>Excluir</Text>
                            </TouchableOpacity>
                        </View>
                    );
                })

            ) : (
                <Text> Nenhum contato disponivel </Text>
            )}
        </ScrollView>
    )
}

const estilos = StyleSheet.create({
    nome:{
        width:"100%",
        textAlign:"center",
        padding:20,
        backgroundColor:"#8ebad0ff",
        borderBottomColor: "#1e348aff",
        borderBottomWidth:1,
        marginBottom:2, 
         
       
    },
    contatos:{
        width:"100%",
        fontSize:20,
        textAlign:"center",
        padding:20,
        backgroundColor:"#b1c9d4ff",
        borderBottomColor: "#134a89ff",
        borderBottomWidth:1,
        fontWeight:"bold",
        color:"#115a8eff"


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
        
    },
    button:{
        backgroundColor:"red",
        color:"white",
        padding:8,
        textAlign:"center",
        borderRadius:5,
        marginTop:2,
        borderBottomColor: "#5eb1deff",
        borderBottomWidth:2,
    }

})
    

   