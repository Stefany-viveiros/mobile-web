import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
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
            <Text>Lista Contatos</Text>
        </View>
    )
}
