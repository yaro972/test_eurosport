import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ListeJoueur from "../Components/JoueursComponents/ListeJoueur";

const AppContainer = createAppContainer(
    createStackNavigator({
            Joueur: {
                screen: ListeJoueur
            },
        },
        {
            initialRouteName: 'ListeJoueur',
        }
    )
);


export default AppContainer;
