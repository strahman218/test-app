import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts, ApplicationStyles} from '../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
    backgroundImage: {
      backgroundColor: Colors.transparent,
      flex: 1,
      width: null,
      height: null,
      justifyContent: 'center',
      alignItems: 'center'
    },
    contentWrapper: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    upsideLogo: {
      marginTop: 50,
      //width: Metrics.threeFourthWidth
    },
    appName: {
      backgroundColor: Colors.transparent,
      color: Colors.snow,
      fontWeight: 'bold',
      fontSize: 25,
      textShadowColor: Colors.coal,
      textShadowRadius: 1,
      textShadowOffset: {
        width: 1.5,
        height: 1.5
      }
    },
    connectWrapper: {
      alignItems: 'center',
      marginBottom: 20
    },
    facebookNotice: {
      fontFamily: Fonts.type.base,
      backgroundColor: Colors.transparent,
      color: Colors.snow,
      fontSize: 10
    },
    button: {
      ...ApplicationStyles.screen.button,
      marginBottom: Metrics.doubleBaseMargin
    },
    termsWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: Metrics.baseMargin,
      width: Metrics.halfWidth
    },
    terms: {
      color: Colors.snow
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      backgroundImage: {
        //backgroundColor: Colors.transparent,
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center'
      }
  })
  