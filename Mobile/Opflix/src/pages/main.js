import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';

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
        this.listarLancamentos();
    }

    listarLancamentos = () => {
        await('http://192.168.4.203:5000/api/lancamentos', {
            headers: {
                'Authorization': 'Bearer ' + await AsyncStorage.getItem('@opflix:token'),
                'Content-Type': 'application/json',
            }
        })
            .then(resposta => resposta.json())
            .then(data => this.setState({ lista: data }))
            .catch(erro => console.warn(erro));
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
                                <Text style={style.plataforma}>{item.idPlataformaNavegation.nome}</Text>
                                <Text style={style.categoria}>{item.idCategoriaNavegation.nome}</Text>
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