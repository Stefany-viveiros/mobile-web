import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Alert, TextInput, Modal } from 'react-native'
import axios from 'axios';

export default function ListaContatos() {
    const [contatos, setContatos] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [contatoEditando, setContatoEditando] = useState(null);
    const [nomeEditado, setNomeEditado] = useState('');
    const [telefoneEditado, setTelefoneEditado] = useState('');
    const [emailEditado, setEmailEditado] = useState('');
    const [enderecoEditado, setEnderecoEditado] = useState('');
    const [cepEditado, setCepEditado] = useState('');
    const [ruaEditado, setRuaEditado] = useState('');
    const [bairroEditado, setBairroEditado] = useState('');
    const [cidadeEditado, setCidadeEditado] = useState('');
    const [estadoEditado, setEstadoEditado] = useState('');

    // Função para buscar contatos do servidor
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

    // função para excluir
    const deleteContato = (id) => {
        axios
            .delete(`http://10.0.2.2:3000/contatos/${id}`)
            .then(() => {
                // Atualizar lista de contatos 
                setContatos(contatos.filter((contato) => contato.id !== id))
                Alert.alert("Sucesso", "Contato Excluído")
            })
            .catch((error) => {
                console.log("Erro excluir contato", error);
                Alert.alert("Erro", "Não foi possível excluir");
            });
    }

    // função para abrir modal de edição
    const abrirModalEdicao = (contato) => {
        setContatoEditando(contato);
        setNomeEditado(contato.nome || '');
        setTelefoneEditado(contato.telefone || '');
        setEmailEditado(contato.email || '');
        setEnderecoEditado(contato.endereco || '');
        setCepEditado(contato.cep || '');
        setRuaEditado(contato.rua || '');
        setBairroEditado(contato.bairro || '');
        setCidadeEditado(contato.cidade || '');
        setEstadoEditado(contato.estado || '');
        setModalVisible(true);
    }

    // função para alterar cadastro
    const alterarCadastro = () => {
        if (!nomeEditado.trim() || !telefoneEditado.trim()) {
            Alert.alert("Erro", "Preencha pelo menos nome e telefone");
            return;
        }

        const dadosAtualizados = {
            nome: nomeEditado,
            telefone: telefoneEditado,
            email: emailEditado,
            endereco: enderecoEditado,
            cep: cepEditado,
            rua: ruaEditado,
            bairro: bairroEditado,
            cidade: cidadeEditado,
            estado: estadoEditado
        };

        axios
            .put(`http://10.0.2.2:3000/contatos/${contatoEditando.id}`, dadosAtualizados)
            .then(() => {
                // Atualizar lista de contatos localmente
                const contatosAtualizados = contatos.map(contato => 
                    contato.id === contatoEditando.id 
                        ? { ...contato, ...dadosAtualizados }
                        : contato
                );
                setContatos(contatosAtualizados);
                setModalVisible(false);
                Alert.alert("Sucesso", "Contato alterado com sucesso!");
            })
            .catch((error) => {
                console.log("Erro ao alterar cadastro", error);
                Alert.alert("Erro", "Não foi possível alterar os dados");
            });
    }

    // função para fechar modal
    const fecharModal = () => {
        setModalVisible(false);
        setContatoEditando(null);
        setNomeEditado('');
        setTelefoneEditado('');
        setEmailEditado('');
        setEnderecoEditado('');
        setCepEditado('');
        setRuaEditado('');
        setBairroEditado('');
        setCidadeEditado('');
        setEstadoEditado('');
    }

    // Use o useEffect para buscar dados
    useEffect(() => {
        listaContatos();
    }, [])

    return (
        <ScrollView style={estilos.container}>
            <Text style={estilos.contatos}>Lista de Contatos</Text>
            
            {contatos.length > 0 ? (
                contatos.map((contato, index) => {
                    return (
                        <View style={estilos.topo} key={index}>
                            <Text style={estilos.nome}>Nome: {contato.nome}</Text>
                            <Text style={estilos.nome}>Tel: {contato.telefone}</Text>
                            {contato.email && <Text style={estilos.nome}>Email: {contato.email}</Text>}
                            {contato.cidade && <Text style={estilos.nome}>Cidade: {contato.cidade}</Text>}

                            <View style={estilos.botoesContainer}>
                                <TouchableOpacity 
                                    style={[estilos.button, estilos.buttonExcluir]}
                                    onPress={() => deleteContato(contato.id)}
                                >
                                    <Text style={estilos.buttonText}>Excluir</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity 
                                    style={[estilos.button, estilos.buttonAlterar]}
                                    onPress={() => abrirModalEdicao(contato)}
                                >
                                    <Text style={estilos.buttonText}>Alterar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                })
            ) : (
                <Text style={estilos.nenhumContato}>Nenhum contato disponível</Text>
            )}

            {/* Modal para edição */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={fecharModal}
            >
                <View style={estilos.modalContainer}>
                    <ScrollView style={estilos.modalScrollView}>
                        <View style={estilos.modalContent}>
                            <Text style={estilos.modalTitle}>Alterar Cadastro</Text>
                            
                            <TextInput
                                style={estilos.input}
                                placeholder="Nome*"
                                value={nomeEditado}
                                onChangeText={setNomeEditado}
                            />
                            
                            <TextInput
                                style={estilos.input}
                                placeholder="Telefone*"
                                value={telefoneEditado}
                                onChangeText={setTelefoneEditado}
                                keyboardType="phone-pad"
                            />
                            
                            <TextInput
                                style={estilos.input}
                                placeholder="Email"
                                value={emailEditado}
                                onChangeText={setEmailEditado}
                                keyboardType="email-address"
                            />

                            <TextInput
                                style={estilos.input}
                                placeholder="Endereço Completo"
                                value={enderecoEditado}
                                onChangeText={setEnderecoEditado}
                            />
                            
                            <TextInput
                                style={estilos.input}
                                placeholder="CEP"
                                value={cepEditado}
                                onChangeText={setCepEditado}
                                keyboardType="numeric"
                            />
                            
                            <TextInput
                                style={estilos.input}
                                placeholder="Rua"
                                value={ruaEditado}
                                onChangeText={setRuaEditado}
                            />
                            
                            <TextInput
                                style={estilos.input}
                                placeholder="Bairro"
                                value={bairroEditado}
                                onChangeText={setBairroEditado}
                            />
                            
                            <TextInput
                                style={estilos.input}
                                placeholder="Cidade"
                                value={cidadeEditado}
                                onChangeText={setCidadeEditado}
                            />
                            
                            <TextInput
                                style={estilos.input}
                                placeholder="Estado"
                                value={estadoEditado}
                                onChangeText={setEstadoEditado}
                            />
                            
                            <View style={estilos.modalBotoes}>
                                <TouchableOpacity 
                                    style={[estilos.button, estilos.buttonCancelar]}
                                    onPress={fecharModal}
                                >
                                    <Text style={estilos.buttonText}>Cancelar</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity 
                                    style={[estilos.button, estilos.buttonSalvar]}
                                    onPress={alterarCadastro}
                                >
                                    <Text style={estilos.buttonText}>Salvar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </Modal>
        </ScrollView>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
    },
    nome: {
        width: "100%",
        textAlign: "center",
        padding: 10,
        backgroundColor: "#8ebad0ff",
        borderBottomColor: "#1e348aff",
        borderBottomWidth: 1,
        marginBottom: 2,
    },
    contatos: {
        width: "100%",
        fontSize: 20,
        textAlign: "center",
        padding: 20,
        backgroundColor: "#b1c9d4ff",
        borderBottomColor: "#134a89ff",
        borderBottomWidth: 1,
        fontWeight: "bold",
        color: "#115a8eff"
    },
    topo: {
        marginBottom: 8,
        padding: 10,
        textAlign: "center",
        fontSize: 20,
        marginRight: 50,
        marginLeft: 50,
        marginTop: 10,
        fontWeight: "bold"
    },
    botoesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:10,
    },
    button: {
        padding: 18,
        borderRadius: 20,
        marginTop: 2,
        minWidth: 80,
        marginRight:40,
        marginLeft:40
    },
    buttonExcluir: {
        backgroundColor: "red",
    },
    buttonAlterar: {
        backgroundColor: "#115a8eff",
        alignItems:"center"
    },
    buttonCancelar: {
        backgroundColor: "red",
    },
    buttonSalvar: {
        backgroundColor: "green",
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
    },
    nenhumContato: {
        textAlign: "center",
        marginTop: 20,
        fontSize: 16,
        color: "gray",
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalScrollView: {
        width: '90%',
        maxHeight: '80%',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
    modalBotoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    }
})