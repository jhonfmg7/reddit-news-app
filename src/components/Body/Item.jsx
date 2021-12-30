import { Image, StyleSheet, Text, View, Linking, TouchableWithoutFeedback } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

// Custom Hook
import useDateCreation from '../../hooks/useDateCreation';

const Item = ({ item }) => {

    const _handleOpenWithWebBrowser = (link) => {
        WebBrowser.openBrowserAsync(link);
    };

    const _handleOpenWithLinking = (link) => {
        Linking.openURL(link);
    };

    return (
        <TouchableWithoutFeedback onPress={ () => _handleOpenWithWebBrowser(item.data.url) }>
            <View style={ styles.card }>
                <View style={ styles.cardItem1 }>
                    <Image
                        style={ styles.image } 
                        source={{
                            uri: item.data.thumbnail,
                        }}
                    />
                </View>
                <View style={ styles.cardItem2 }>
                    <Text style={ styles.date }>{ useDateCreation(item.data.created) }</Text>
                    <Text style={ styles.title }>{ item.data.title }</Text>
                    <View style={ styles.complementContainer }>
                        <Text style={ styles.complementText }>{ item.data.author }</Text>
                        <Text style={ styles.complementText }>Puntaje: { item.data.score }</Text>
                        <Text style={ styles.complementText }>{ item.data.num_comments } Comentarios</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Item;

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(225, 225, 225, 0.369)',
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardItem1: {
        flexBasis: '20%'
    },
    cardItem2: {
        padding: 10,
        flexBasis: '80%'
    },
    image: {
        height: 80,
        width: 80,
        marginVertical: 'auto'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    complementContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    complementText: {
        paddingTop: 10,
        fontSize: 10
    },
    date: {
        textAlign: 'right',
        paddingBottom: 10,
        fontSize: 12
    }
})
