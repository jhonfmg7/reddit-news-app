const useOrderPosts = (posts, key) => {
    if (key === 'New') {
        let arr3 = posts.sort((a, b) => {
            let dateA = (new Date(a.data.created)).getTime();
            let dateB = (new Date(b.data.created)).getTime();
            return dateA < dateB ? 1 : -1;
        });
        return arr3
    } else if (key === 'Top') {
        let arr = posts.sort((a, b) => (a.data.score - b.data.score))
        return arr.reverse();
    } else if (key === 'Popular') {
        let arr2 = posts.sort((a, b) => (a.data.num_comments - b.data.num_comments))
        return arr2.reverse();
    } else if (key === 'Hot') {
        let arr3 = posts.sort((a, b) => (a.data.all_awardings.length - b.data.all_awardings.length))
        return arr3.reverse();
    } else {
        return posts
    }
}

export default useOrderPosts