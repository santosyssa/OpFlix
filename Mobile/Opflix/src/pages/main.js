import React, { Component } from 'react';
import { Text, View, FlatList, AsyncStorage, StyleSheet } from 'react-native';



export default class Main extends Component {

    constructor() {
        // tudo que tiver em component sera passado p ca
        super();
        this.state = {
            lista: [],
            idPlataformaNavegation: [],
            idCategoriaNavegation: [],

            nome: "",
            sinopse: "",
            dataLancamento: "",
            classificacao: "",
            duracaoMin: ""

        }
    }

    componentDidMount() {
        this._listarLancamentos();
    }

    _listarLancamentos = async () => {
        await fetch('http://192.168.4.203:5000/api/lancamentos', {
            headers: {
                'Authorization': 'Bearer ' + await AsyncStorage.getItem('@opflix:token'),
                'Content-Type': 'application/json',
            }
        })
            .then(x => x.json())
            // .then(x => console.warn(x))
            // .catch(x => console.warn(x))
            .then(x => this.setState({ lista: x }))
            .catch(erro => console.warn(erro))
    };


    render() {
        return (
            <View style={style.total}>
                <Text style={style.titulozao}>Lançamento</Text>
                <View>
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
                    />
                </View>
            </View>
        );
    }
}


const style = StyleSheet.create({

    total:{
        backgroundColor: 'black',
    },

    titulozao:{
        fontSize: 30,
        backgroundColor: '#17344D',
        textAlign: "center",
        borderColor: "black",
        color: "white"
    },

    title:{
        fontSize: 20,
        backgroundColor: '#132B40',
        textAlign: "center",
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: "black",
        color: "white"
    },

    sinopse:{
        fontSize: 17,
        backgroundColor: '#305973',
        textAlign: "center",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black",
        color: "white"
    },

    data:{
        fontSize: 17,
        backgroundColor: '#46788C',
        textAlign: "center",
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: "black",
        color: "white"
    },

    plataforma:{
        fontSize: 17,
        backgroundColor: '#305973',
        textAlign: "center",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black",
        color: "white"
    },

    categoria:{
        fontSize: 17,
        backgroundColor: '#46788C',
        textAlign: "center",
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: "black"
        ,color: "white"
    },

    classificacao:{
        fontSize: 17,
        backgroundColor: '#305973',
        textAlign: "center",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black",
        color: "white"
    },

    duracao:{
        fontSize: 17,
        backgroundColor: '#46788C',
        textAlign: "center",
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: "black",
        color: "white"
    
    },
})