import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Header from './header';
import { Link } from 'react-router-native';

import api from '../services/api';

export default class Main extends Component {

    state = {
        productInfo: {},
        docs: [],
        page: 1
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const res = await api.get(`/products?page=${page}`);
        const { docs, ...productInfo } = res.data;
        console.log(docs);

        this.setState({
            docs: [...this.state.docs, ...docs],
            productInfo,
            page
        });

    }

    renderItem = ({ item }) => (
        <View style={styles.productContainer}>
            {/* ({item})=desestruturação */}
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productDesc}>{item.description}</Text>
            <Link to="/products" 
            component={TouchableOpacity} 
            style={styles.productBtn}
            teste={'foi'}>
                <Text style={styles.productBtnText}>Acessar</Text>
            </Link>

        </View>
    );

    loadMore = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }

    render() {
        return (

            <View style={styles.container}>
                <Text>Main</Text>
                <FlatList
                    data={this.state.docs}
                    keyExtractor={item => item._id}
                    renderItem={this.renderItem}
                    contentContainerStyle={styles.list}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={0.1}
                />
                {/*{this.state.docs.map(doc => (<Text key={doc._id}>{doc.title}</Text>))}*/}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa"
    },

    list: {
        padding: 20
    },

    productContainer: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },

    productTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333"
    },

    productDesc: {
        fontSize: 16,
        color: "#999",
        marginTop: 5,
        lineHeight: 24
    },

    productBtn: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#DA552F",
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },

    productBtnText: {
        fontSize: 16,
        color: "#DA552F",
        fontWeight: "bold"
    }
})
