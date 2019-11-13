import React, { Component } from 'react';
import { Text, View, FlatList, Picker, AsyncStorage, StyleSheet, Image } from 'react-native';



export default class Main extends Component {

    static navigationOptions = {
        header: null,
        tabBarIcon: () => (
            <Image
                style={{ width: 35, height: 35 }}
                source={require('./../assets/img/3d-glasses.png')}
            />
        )
    };

    constructor() {

        super();
        this.state = {
            lista: [],
            novaLista: [],
            categorias: [],
            idPlataformaNavegation: [],
            idCategoriaNavigation: [],

            nome: "",
            sinopse: "",
            dataLancamento: "",
            classificacao: "",
            duracaoMin: "",

            valorSelecionado: null

        }
    }

    alterarValor = (valor) => {
        this.setState({ valorSelecionado: valor })
        if (valor == 0) {
            this.setState({ novaLista: [] })
        }

        this.setState({ novaLista: this.state.lista.filter(x => x.idCategoria == valor) })
    }

    componentDidMount() {
        this._listarLancamentos();
        this._listarCategorias();
    }

    _listarCategorias = async () => {
        await fetch("http://192.168.4.203:5000/api/categorias", {
            headers: {
                'Authorization': 'Bearer ' + await AsyncStorage.getItem('@opflix:token'),
                'Content-Type': 'application/json',
            }
        })
            .then(x => x.json())
            .then(response => {
                this.setState({ categorias: response })
            })
            .catch(erro => console.log(erro))
    }


    _listarLancamentos = async () => {
        await fetch('http://192.168.4.203:5000/api/lancamentos', {
            headers: {
                'Authorization': 'Bearer ' + await AsyncStorage.getItem('@opflix:token'),
                'Content-Type': 'application/json',
            }
        })
            .then(x => x.json())
            .then(x => this.setState({ lista: x }))
            .catch(erro => console.warn(erro))
    };


    render() {
        return (

            <View style={style.total}>
                <View>
                    <Text style={style.titulozao}>Lançamento</Text>

                    <Picker
                        style={style.filtrar}
                        selectedValue={this.state.valorSelecionado}
                        onValueChange={this.alterarValor}>
                        <Picker.Item label="Filtrar por" value="0" />
                        {this.state.categorias.map(item => {
                            return (
                                <Picker.Item label={item.nome} value={item.idCategoria} />
                            )
                        })}
                    </Picker>


                </View>
                <View>
                    {this.state.novaLista.length > 0 ? <FlatList
                        data={this.state.novaLista}
                        keyExtractor={item => item.idLancamento}
                        renderItem={({ item }) => (
                            <View style={style.table}>
                                <Text style={style.title}>{item.nome}</Text>
                                <Text style={style.sinopse}>{item.sinopse}</Text>
                                <Text style={style.data}>{item.dataLancamento}</Text>
                                <Text style={style.plataforma}>{item.idPlataformaNavigation.nome}</Text>
                                <Text style={style.categoria}>{item.idCategoriaNavigation.nome}</Text>
                                <Text style={style.classificacao}>{item.classificacao}</Text>
                                <Text style={style.duracao}>{item.duracaoMin}</Text>
                            </View>
                        )}
                    /> :
                        <FlatList
                            data={this.state.lista}
                            keyExtractor={item => item.idLancamento}
                            renderItem={({ item }) => (
                                <View style={style.table}>
                                    <Text style={style.title}>{item.nome}</Text>
                                    <Text style={style.sinopse}>{item.sinopse}</Text>
                                    <Text style={style.data}>{item.dataLancamento}</Text>
                                    <Text style={style.plataforma}>{item.idPlataformaNavigation.nome}</Text>
                                    <Text style={style.categoria}>{item.idCategoriaNavigation.nome}</Text>
                                    <Text style={style.classificacao}>{item.classificacao}</Text>
                                    <Text style={style.duracao}>{item.duracaoMin}</Text>
                                </View>
                            )}
                        />}
                </View>
            </View>
        );
    }
}


const style = StyleSheet.create({

    total: {
        backgroundColor: '#302F2F',
    },

    titulozao: {
        fontSize: 30,
        backgroundColor: '#302F2F',
        textAlign: "center",
        color: "white"
    },

    filtrar:{
        backgroundColor: '#544D4C',
    },

    title: {
        fontSize: 20,
        backgroundColor: '#474140',
        textAlign: "center",
        borderRadius: 5,
        borderWidth: 1.5,
        color: "white"
    },

    sinopse: {
        fontSize: 17,
        backgroundColor: '#302F2F',
        textAlign: "center",
        borderRadius: 5,
        borderWidth: 1,
        color: "white"
    },

    data: {
        fontSize: 17,
        backgroundColor: '#302F2F',
        textAlign: "center",
        borderRadius: 5,
        borderWidth: 1.5,
        color: "white"
    },

    plataforma: {
        fontSize: 17,
        backgroundColor: '#302F2F',
        textAlign: "center",
        borderRadius: 5,
        borderWidth: 1,
        color: "white"
    },

    categoria: {
        fontSize: 17,
        backgroundColor: '#302F2F',
        textAlign: "center",
        borderRadius: 5,
        borderWidth: 1.5,
        color: "white"
    },

    classificacao: {
        fontSize: 17,
        backgroundColor: '#302F2F',
        textAlign: "center",
        borderRadius: 5,
        borderWidth: 1,
        color: "white"
    },

    duracao: {
        fontSize: 17,
        backgroundColor: '#302F2F',
        textAlign: "center",
        borderRadius: 5,
        borderWidth: 1.5,
        color: "white"

    },

    text: {
        fontSize: 25,
        alignSelf: 'center',
        color: 'black',
    }
})