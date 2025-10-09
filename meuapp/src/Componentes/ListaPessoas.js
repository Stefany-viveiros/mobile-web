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
            <Text style={estilos.teste}>Lista de Pessoas</Text>
            {pessoas.map((pessoa) => (
                <View style={estilos.card}>
                    <Text style={estilos.pessoas}>{pessoa.id}</Text>
                    <Text style={estilos.pessoas}>{pessoa.nome}</Text>
                    <Text style={estilos.pessoas}>{pessoa.idade}</Text>

                </View>
            ))}
        </View>
    )
}
const estilos = StyleSheet.create({
    pessoas: {
       
        alignItems: "center",
        backgroundColor: "#798499",
        padding: 15,
        borderColor: "purple",
        fontFamily: "arial",
        marginRight:50,
        marginLeft: 50,
        fontSize:12,
        fontWeight:"bold",
        

    },

    teste: {
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        fontSize: 20,
        fontWeight:"bold",
        fontFamily: "arial",
        padding: 10,
        marginBottom: 15,
        
    },

    card:{
        backgroundColor:"white",
        padding:5,
        marginBottom:4,
        
        
    }

});