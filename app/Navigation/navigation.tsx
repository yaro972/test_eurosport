import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Joueur from "../Components/JoueursComponents/Joueur";

const AppContainer = createAppContainer(
    createStackNavigator({
            Joueur: {
                screen: Joueur
            },
        },
        {
            initialRouteName: 'Joueur',
        }
    )
);


export default AppContainer;
