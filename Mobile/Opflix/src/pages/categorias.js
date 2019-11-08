import React, { Component } from 'react';
import { Text, View, FlatList, AsyncStorage, StyleSheet } from 'react-native';



export default class Main extends Component {

    constructor() {
        // tudo que tiver em component sera passado p ca
        super();
        this.state = {
            categoria: [],
            lancamentos: [],
            

            nome: "",
           

        }
    }

    componentDidMount() {
        this._listarCategorias();
    }

    _listarCategorias = async () => {
        await fetch('http://192.168.4.203:5000/api/categorias', {
            headers: {
                'Authorization': 'Bearer ' + await AsyncStorage.getItem('@opflix:token'),
                'Content-Type': 'application/json',
            }
        })
            .then(x => x.json())
            // .then(x => console.warn(x))
            // .catch(x => console.warn(x))
            .then(x => this.setState({ categoria: x }))
            .catch(erro => console.warn(erro))
    };


    render() {
        return (
            <View style={style.total}>
                <Text style={style.titulozao}>Lançamento</Text>
                <View>
                    <FlatList
                        data={this.state.categoria}
                        keyExtractor={item => item.idCategoria}
                        renderItem={({ item }) => (
                            <View style={style.table}>
                                <Text style={style.title}>{item.nome}</Text>
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
    }
})