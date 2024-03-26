import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

const Page = () => {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    container: {
        height: 300,
        width: 300,
        backgroundColor: "tomato"
    },
    map: {
        flex: 1
    }
});


export default Page