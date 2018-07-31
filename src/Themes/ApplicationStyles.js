import { Platform, StyleSheet } from 'react-native'
import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'
import { ifIphoneX, isIphoneX } from '../Helpers/Layout'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  global: {
    text: {
      color: Colors.charcoal,
      fontFamily: Fonts.type.normal,
      fontSize: 16,
      textAlign: 'center'
    },
    headerText: {
      ...Fonts.style.h5,
      marginBottom: 20
    }
  },
  modal: {
    container: {
      overflow: 'hidden',
      justifyContent: 'space-between',
      height: 241,
      width: 300,
      borderRadius: 6
    },
    buttonGroup: {
      flexDirection: 'row'
    },
    button: {
      flex: 1,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center'
    },
    singleButton: {
      borderBottomLeftRadius: 6,
      borderBottomRightRadius: 6
    },
    leftButton: {
      borderBottomLeftRadius: 6
    },
    rightButton: {
      borderBottomRightRadius: 6
    },
    buttonText: {
      color: Colors.snow,
      fontFamily: Fonts.type.base
    },
    primary: {
      backgroundColor: Colors.cuttySark
    },
    secondary: {
      backgroundColor: Colors.persimmon
    },
    disabled: {
      backgroundColor: Colors.silverChalice
    },
    tertiary: {}
  },
  screen: {
    buttonWrapper: {
      alignItems: 'center'
    },
    buttonWrapperTertiary: {
      borderTopColor: Colors.charcoal,
      borderTopWidth: StyleSheet.hairlineWidth
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      width: Metrics.threeFourthWidth,
      height: 40
    },
    buttonBottom: {
      width: Metrics.screenWidth,
      height: isIphoneX() ? 50 + 29 : 50,
      paddingBottom: isIphoneX() ? 29 : 0
    },
    buttonText: {
      fontFamily: Fonts.type.bold,
      fontSize: Fonts.size.medium
    },
    buttonPrimary: {
      backgroundColor: Colors.primary
    },
    buttonTextPrimary: {
      color: Colors.primaryText
    },
    buttonSecondary: {
      backgroundColor: Colors.secondary
    },
    buttonTextSecondary: {
      color: Colors.secondaryText
    },
    buttonTertiary: {
      backgroundColor: Colors.tertiary
    },
    buttonTextTertiary: {
      color: Colors.tertiaryText
    },
    buttonDisabled: {
      backgroundColor: Colors.disabled
    },
    buttonTextDisabled: {
      color: Colors.disabledText
    },
    buttonQuaternary: {
      backgroundColor: Colors.quaternary
    },
    buttonTextQuaternary: {
      color: Colors.quaternaryText
    },
    stickyButton: {
      alignItems: 'center',
      borderTopColor: Colors.charcoal,
      borderTopWidth: StyleSheet.hairlineWidth,
      ...ifIphoneX({
        paddingBottom: 29
      }, {
        paddingTop: Metrics.smallMargin
      })
    },
    standardButton: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      width: Metrics.threeFourthWidth,
      backgroundColor: Colors.jaffa
    },
    standardButtonText: {
      color: Colors.snow,
      fontFamily: Fonts.type.bold,
      fontSize: Fonts.size.medium
    },
    tertiaryButton: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      width: Metrics.threeFourthWidth,
      backgroundColor: Colors.snow
    },
    tertiaryButtonText: {
      color: Colors.charcoal,
      fontFamily: Fonts.type.bold
    },
    closeButton: {
      position: 'absolute',
      paddingTop: Platform.OS === 'ios' ? 15 : 0,
      zIndex: 10,
      backgroundColor: 'transparent'
    },
    centered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      fontFamily: Fonts.type.base
    },
    header: {
      backgroundColor: Colors.jaffa,
      borderBottomWidth: 0,
      borderBottomColor: Colors.transparent,
      shadowColor: Colors.transparent,
      shadowOpacity: 0,
      elevation: 0
    },
    headerTitle: {
      color: Colors.snow,
      fontFamily: Fonts.type.base,
      fontWeight: '400'
    },
    headerLeft: {
      color: Colors.snow,
      fontFamily: Fonts.type.base,
      marginLeft: 10
    },
    headerRight: {
      color: Colors.snow,
      fontFamily: Fonts.type.base,
      marginRight: 10
    },
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.transparent
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin,
      backgroundColor: Colors.white
    },
    section: {
      margin: Metrics.section,
      padding: Metrics.baseMargin
    },
    sectionText: {
      ...Fonts.style.normal,
      paddingVertical: Metrics.doubleBaseMargin,
      color: Colors.snow,
      marginVertical: Metrics.smallMargin,
      textAlign: 'center'
    },
    subtitle: {
      color: Colors.snow,
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin
    },
    titleText: {
      ...Fonts.style.h2,
      fontSize: 14,
      color: Colors.text
    },
    alignItemsCenter: {
      alignItems: 'center'
    },
    spaceAround: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    theButton: {
      fontFamily: Fonts.type.base,
      color: Colors.snow
    },
    listContent: {
      marginTop: Metrics.baseMargin,
      paddingBottom: Metrics.doubleBaseMargin
    }
  },
  darkLabelContainer: {
    padding: Metrics.smallMargin,
    paddingBottom: Metrics.doubleBaseMargin,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    marginBottom: Metrics.baseMargin
  },
  darkLabel: {
    fontFamily: Fonts.type.bold,
    color: Colors.snow
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  sectionTitle: {
    ...Fonts.style.h4,
    color: Colors.coal,
    backgroundColor: Colors.ricePaper,
    padding: Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
    borderWidth: 1,
    borderColor: Colors.ember,
    alignItems: 'center',
    textAlign: 'center'
  }
}

export default ApplicationStyles
