import { Dimensions, Platform } from 'react-native'

export function isIphoneX () {
  let dimensions = Dimensions.get('window')
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimensions.height === 812 || dimensions.width === 812)
  )
}

export function ifIphoneX (iphoneXStyle, regularStyle) {
  if (isIphoneX()) {
    return iphoneXStyle
  } else {
    return regularStyle
  }
}

export function getAssetUrl (assetVariations, assetType) {
  if (!assetVariations || !assetVariations.length) return null
  if (!assetType) throw new Error(`assetType is required but has a value of ${assetType}`)
  const variation = assetVariations.find((type) => type.name === assetType)
  if (variation) {
    return {
      useGeneric: false,
      assetUrl: variation.getIn(['download_url'])
    }
  }
  return {
    useGeneric: true,
    assetUrl: assetVariations.getIn([0, 'download_url'])
  }
}
