import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";
import React from "react";

const Joueur = ({key, nom, photo}) => {
    return (
        <TouchableOpacity
            style={styles.JoueurContainer}
            key={key}
        >
            <Image source={{uri: photo}}
                   style={styles.imageContainer}
            />
            <Text
                style={styles.textContainer}
            > {nom}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    JoueurContainer: {
        flex: 1
    },
    imageContainer: {
        flex: 1,
        height: 100,
        width: 100
    },
    textContainer: {
        flex: 2,
        color: "#000"
    }
});

export default Joueur
