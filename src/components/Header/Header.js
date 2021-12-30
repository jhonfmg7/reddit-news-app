import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const options =[
    'New',
    'Top',
    'Popular',
    'Hot'
]

const ItemHeader = ({ title, variantList, setVariantList }) => {
    return (
        <TouchableHighlight style={ variantList === title ? styles.buttonActive : styles.button } onPress={ () => setVariantList(title) }>
            <View style={ styles.item }>
                <Text style={ variantList === title ? styles.textActive : styles.text }>{ title }</Text>
            </View>
        </TouchableHighlight>
    )
}

const Header = ({ variantList, setVariantList }) => {
    return (
        <View style={ styles.container }>
            { options.map( item => (
                <ItemHeader key={ item } title={ item } variantList={ variantList } setVariantList={ setVariantList } />
            ) ) }
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
    },
    button: {
        // borderWidth: 1,
        // borderStyle: 'solid',
        // borderColor: 'rgba(225, 225, 225, 0.325)',
        flexBasis: '25%',
    },
    buttonActive: {
        flexBasis: '25%',
        backgroundColor: '#66bde6',
        color: 'white'
    },
    item: {
        textAlign: 'center',
        padding: 15,
    }, 
    textActive: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    },  
    text: {
        textAlign: 'center',
        color: '#66bde6',
        fontWeight: 'bold'
    }    
});
