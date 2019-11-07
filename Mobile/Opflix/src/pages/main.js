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
            data_lancamento: "",
            classificacao: "",
            duracao: ""

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
            <View>
                <Text>Lançamento</Text>
                <View>
                    <FlatList
                        data={this.state.lista}
                        keyExtractor={item => item.idLancamento}
                        renderItem={({ item }) => (
                            <View style={style.table}>
                                <Text style={style.title}>{item.nome}</Text>
                                <Text style={style.sinopse}>{item.sinopse}</Text>
                                <Text style={style.data}>{item.data_lancamento}</Text>
                                <Text style={style.plataforma}>{item.idPlataformaNavigation.nome}</Text>
                                <Text style={style.categoria}>{item.idCategoriaNavigation.nome}</Text>
                                <Text style={style.classificacao}>{item.classificacao}</Text>
                                <Text style={style.duracao}>{item.duracao}</Text>
                            </View>
                        )}
                    />
                </View>
            </View>
        );
    }
}


const style = StyleSheet.create({
    title:{
        fontSize: 20,
        backgroundColor: '#2493BF',
        textAlign: "center",
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: "black"
    },

    sinopse:{
        fontSize: 15,
        backgroundColor: '#6CBAD9',
        textAlign: "center",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black",
    },

    data:{
 
    },

    plataforma:{
        fontSize: 15,
        backgroundColor: '#6CBAD9',
        textAlign: "center",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black",
    },

    categoria:{
        
    },

    classificacao:{
        fontSize: 15,
        backgroundColor: '#6CBAD9',
        textAlign: "center",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black",
    },

    duracao:{
    
    },
})