import { useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import axios from 'axios'

export default function Duvidas() {
    const [faq, setFaq] = useState([]);

    // Função para buscar FAQs do servidor
    const buscarFaq = () => {
        axios
            .get("http://10.0.2.2:3000/faq")
            .then((resposta) => {
                setFaq(resposta.data)
            })
            .catch((error) => {
                console.error("Erro ao buscar faq", error);
            });
    }

    // Use o useEffect para buscar dados
    useEffect(() => {
        buscarFaq();
    }, [])

    return (
        <View>
            <Text style={estilos.titulo}>FAQ</Text>
            {faq.length > 0 ? (
                faq.map((duvida, index) => (
                    <View style={estilos.card} key={index}>
                        <Text style={estilos.pergunta}>Pergunta: {duvida.pergunta}</Text>
                        <Text style={estilos.resposta}>Resposta: {duvida.resposta}</Text>
                    </View>
                ))
            ) : (
                <Text style={estilos.semDados}>Nenhuma pergunta disponível</Text>
            )}
        </View>
    )
}

const estilos = StyleSheet.create({
    pergunta: {
        width: "100%",
        textAlign: "center",
        padding: 15,
        backgroundColor: "#D7D7DE",
        fontWeight: "bold",
        fontSize: 16,
    },
    resposta: {
        width: "100%",
        textAlign: "center",
        padding: 15,
        backgroundColor: "#F0F0F0",
        fontSize: 14,
    },
    titulo: {
        width: "100%",
        fontSize: 20,
        textAlign: "center",
        padding: 20,
        backgroundColor: "gray",
        borderBottomColor: "#1e348aff",
        borderBottomWidth: 3,
        color: "white",
        fontWeight: "bold",
    },
    card: {
        marginBottom: 8,
        padding: 0,
        textAlign: "center",
        marginHorizontal: 20,
        marginTop: 10,
        borderRadius: 5,
        overflow: "hidden",
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
    },
    semDados: {
        textAlign: "center",
        padding: 20,
        fontSize: 16,
        color: "#666",
    }
})