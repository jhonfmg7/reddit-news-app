import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native-web';

const LoaderPage = ({ setLoading }) => {
    return (
        <View style={ styles.container } >
            <Text style={ styles.text }>Cargando Navegador Externo...</Text>
            <br />
            <Button title="Cerrar Alerta" onPress={ () => setLoading(false) } />
        </View>
    )
}

export default LoaderPage;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'rgba(0, 0, 0, .3)',
        position: 'fixed',
        width: '100%',
        height: '100vh',
        zIndex: 100,
        marginTop: -30,
    },
    text : {
        color: 'white',
        fontSize: 28
    }
});