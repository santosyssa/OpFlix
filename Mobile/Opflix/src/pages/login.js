import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, AsyncStorage, StyleSheet, Image } from 'react-native';

export default class Login extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor() {
        super();
        this.state = {
            email: "erik@email.com",
            senha: "123456",
        };
    }

    
    _realizarLogin = async () => {
        await fetch('http://192.168.4.203:5000/api/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                senha: this.state.senha
            }),
        })
            .then(resposta => resposta.json())
            .then(data => this._irParaHome(data.token))
            .catch(erro => console.warn('erro>: ', erro));
    };

    _irParaHome = async tokenAReceber => {
        if (tokenAReceber != null) {
            try {
                await AsyncStorage.setItem('@opflix:token', tokenAReceber);
                // Console.warn('assync', await AsyncStorage.getItem('@roman:token'))

                //redirecionar pra home
                this.props.navigation.navigate('MainNavigation');
            } catch (erro) {
                console.warn("erro 3>", erro)
            }
        }
    };

    render() {
        return (
            <View style={styles.total}>
                
                <Image
                    style={{ width: 200, height: 140, marginTop: -40, marginLeft: -40}}
                    source={require('./../assets/img/agoravai.png')}
                />
                <TextInput
                    style={styles.email}
                    placeholder='Email'
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                    underlineColorAndroid="#707070"
                />

                <TextInput
                    style={styles.senha}
                    placeholder='Senha'
                    onChangeText={senha => this.setState({ senha })}
                    value={this.state.senha}
                    underlineColorAndroid="#707070"

                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={this._realizarLogin}>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>

            </View>


        );
    }
}

const styles = StyleSheet.create({
    
    total:{
        backgroundColor: '#302F2F',
        padding: 50,
        height: 10000
    },

    email: {
        fontSize: 30,
        width: 240,
        marginBottom: 10,
        
    },

    senha: {
        fontSize: 30,
        width: 240,
        marginBottom: 10,
    },

    button: {
        fontSize: 20,
        backgroundColor: '#D8E6F2',
        textAlign: "center",
        marginBottom: 40,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black",
        height: 40
    },
    text: {
        fontSize: 20,
        textAlign: "center"
    }
  });
