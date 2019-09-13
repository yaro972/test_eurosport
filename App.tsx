import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ListeJoueur from "./app/Components/JoueursComponents/ListeJoueur";
import {getJoueurs} from "./app/API";
import {DetailJoueur} from "./app/Components/JoueursComponents/DetailJoueur";

export default function App() {
    const [joueurs, setJoueurs] = useState([]);

    useEffect(() => {
        getJoueurs().then((j) => {
            setJoueurs(j);
        });
        return function cleanup() {

        }
    }, [joueurs]);

    return (
        <View style={styles.container}>
            <ListeJoueur
                liste={joueurs}
                onClick={() => {
                    onClick
                }}
            />
        </View>
    );

    function onClick(el) {
        const joueurSelect = joueurs.filter((jr) => {
            return jr.shortname === el.shortname;
        });

        return (
            <DetailJoueur
                joueur={joueurSelect}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        backgroundColor: '#fff',
        marginTop: 20,
        padding: 10
    },
});
