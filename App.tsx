import React, {useEffect, useState} from 'react';
import {StyleSheet,  View} from 'react-native';
import ListeJoueur from "./app/Components/JoueursComponents/ListeJoueur";
import {getJoueurs} from "./app/API";

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
            />
        </View>
    )
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
