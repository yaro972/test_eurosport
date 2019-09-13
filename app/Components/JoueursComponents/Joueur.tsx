import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";
import React from "react";

/**
 * Affiche un joueur
 * @param key son Id
 * @param nom {String} Son nom
 * @param photo {String} sa photo
 * @param onClick {Function} Action lors du click
 * @constructor
 */
const Joueur = ({key, nom, photo, onClick}) => {
    return (
        <TouchableOpacity
            style={styles.JoueurContainer}
            key={key}
            OnClick={(el) => {onClick(el)}}

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
