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
                <View style={estilos.card}>
                    <Text style={estilos.pessoas}>{pessoa.nome}</Text>
                    <Text style={estilos.pessoas}>{pessoa.idade}</Text>

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
        padding: 10,
        marginTop: 8,
        borderRadius: 10,
        borderColor: "purple",
        marginBottom: 8,
        fontFamily: "arial",
        borderWidth: 2,
        marginRight:10,
        marginLeft: 10,
        gap:3,
        fontSize:10,
        elevation:3,
    },

    teste: {
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        fontSize: 20,
        fontWeight:"bold",
        borderRadius: 8,
        fontFamily: "arial",
        padding: 10,
        
    },

    card:{
        backgroundColor:"gray",
        padding:15,
        borderRadius:10,
        borderColor:"blue",
        borderWidth:1,
        marginBottom:10
        
    }

});