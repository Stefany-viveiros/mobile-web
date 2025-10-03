import { Text, View, StyleSheet } from 'react-native'

export default function ListaPessoas() {
    const pessoas = [
        {
            id: 1,
            nome: "Juliana",
            idade: 20,

        },

        {
            id: 2,
            nome: "Juliana",
            idade: 22,

        },

        {
            id: 10,
            nome: "Stefany",
            idade: 27,

        },

        {
            id: 45,
            nome: "Caio",
            idade: 44,
        },

        {
            id: 20,
            nome: "Edu",
            idade: 9,
        }
    ];

    return (
        <View>
            <Text style={estilos.teste}>Teste</Text>
            {pessoas.map((pessoa) => (
                <View style={estilos.pessoas}>
                    <Text>{pessoa.nome}</Text>
                    <Text>{pessoa.idade}</Text>

                </View>
            ))}
        </View>
    )
}
const estilos = StyleSheet.create({
    pessoas: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "gray",
        padding: 12,
        marginTop: 8,
        borderRadius: 10,
        borderColor: "purple",
        marginBottom: 8,
        fontFamily: "arial",
        borderWidth: 2,
        marginRight:20,
        marginLeft: 20,
        gap:3,
        fontSize:20,
        elevation:3,
    },
    teste: {
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        fontSize: 22,
        fontWeight:"bold",
        borderRadius: 8,
        fontFamily: "arial",
        padding: 10,
        
    }

});