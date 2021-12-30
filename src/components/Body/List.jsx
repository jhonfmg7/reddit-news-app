import { useCallback, useContext, useEffect, useState } from 'react';
import { FlatList, SafeAreaView, RefreshControl, StyleSheet } from 'react-native';

// Context
import Context from '../../context/context';

// Components
import Item from './Item';
import Loader from '../Loader/Loader';

const List = ({ variantList }) => {

    // Context Extraction
    const { posts, orderedPosts, loading, getRedditPost, filterRedditNews } = useContext(Context);

    // Local state
    const [ refreshing, setRefreshing ] = useState(false);

    // Function for render each item
    const renderItem = ({ item }) => (
        <Item item={ item } />
    );

    useEffect(() => {
        getRedditPost();
    }, [ refreshing ]);

    useEffect(() => {
        if (posts.length > 0) {
            filterRedditNews(posts, variantList);
        }
    }, [ posts, variantList ]);

    const onRefresh = useCallback(async() => {
        setRefreshing(true);
        if (!loading) {
            setRefreshing(false);
        }
    }, [ refreshing, loading ]);

    return (
        <SafeAreaView style={ styles.container }>
            { orderedPosts.length > 0 && (
                <FlatList 
                    data={ orderedPosts }
                    renderItem={ renderItem }
                    keyExtractor={ item => item.data.id }
                    refreshControl={
                        <RefreshControl refreshing={ refreshing } onRefresh={ onRefresh } />
                    }
                />
            ) }
            { loading && (
                <Loader />
            ) }
        </SafeAreaView>
    )
}

export default List;

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
});
