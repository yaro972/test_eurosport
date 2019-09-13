import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Joueur from './Joueur';
import {toFullname} from '../../Helpers'

const ListeJoueur = ({liste, onClick}) => {
    return (
        <ScrollView style={styles.container}
        >
            {formatListe(liste)}
        </ScrollView>
    );


    function formatListe(listeJoueurs) {
        return listeJoueurs.map(el => (
                <Joueur
                    key={el.shortName}
                    photo={el.picture}
                    nom={toFullname(el.firstname, el.lastname)}
                    onclick={onClick}
                />
            )
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex"
    }
});

export default ListeJoueur;
