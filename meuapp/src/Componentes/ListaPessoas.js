import { Text, View } from 'react-native'

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
            idade: 20,

        },

        {
            id: 10,
            nome: "Stefany",
            idade: 27,

        },

        {
            id:45,
            nome:"Caio",
            idade:40,
        },

        {
            id:20,
            nome:"Edu",
            idade:9,
        }
    ];

    return (
        <View>
            <Text>Teste</Text>
        </View>
    )
}
