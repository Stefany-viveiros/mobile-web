
import {Button, View, Text, StyleSheet} from "react-native"

export default function Card(props) {
    
  return (
    <View style={estilos.container}>
        <Text style={estilos.cardTitle}>{props.title}</Text>
        <Text style={estilos.cardContent}>{props.content}</Text>
        <Button
            title={props.textButton}
            onPress={props.onPress}
            
        />
    </View>
  )
}

const estilos = StyleSheet.create({
    container:{
        backgroundColor:"#ffff",
        borderRadius:1.41,
        shadowColor:"blue",
        shadowOpacity:0.2,
        elevation:2,
        padding:20,
        margin:20
        
    },
    cardTitle:{
        fontSize:18,
        fontWeight:"bold",
        marginBottom: 10
    },
    cardContent:{
        fontSize:14,
        marginBottom:10
    }

    
});
