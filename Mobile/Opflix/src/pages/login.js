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
                    style={{ width: 200, height: 140, marginTop: -20, marginLeft: -20, marginBottom: 50}}
                    source={require('./../assets/img/agoravai.png')}
                />
                  <Text style={styles.titulozao}>Login</Text> 

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
        padding: 30,
        height: 1000
    },

    titulozao:{
        fontSize: 50,
        textAlign: "center",
        marginBottom: 50,
    },

    email: {
        fontSize: 30,
        width: 330,
        marginBottom: 50,
        
    },

    senha: {
        fontSize: 30,
        width: 330,
        marginBottom: 60,
    },

    button: {
        fontSize: 22,
        backgroundColor: '#3C3B3B',
        textAlign: "center",
        marginBottom: 20,
        borderRadius: 30,
        borderWidth: 0.5,
        borderColor: "black",
        height: 50,
        
    },
    text: {
        fontSize: 20,
        textAlign: "center"
    }
  });
