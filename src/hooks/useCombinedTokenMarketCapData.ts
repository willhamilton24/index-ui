import { useContext } from 'react'

import { DpiTokenMarketDataContext } from 'contexts/DpiTokenMarketData'
import { CgiTokenMarketDataContext } from 'contexts/CgiTokenMarketData'
import { FliTokenMarketDataContext } from 'contexts/FliTokenMarketData'

const useCombinedTokenMarketCapData = () => {
  const allMarketCaps = [
    { ...useContext(DpiTokenMarketDataContext) }?.latestMarketCap || 0,
    { ...useContext(CgiTokenMarketDataContext) }?.latestMarketCap || 0,
    { ...useContext(FliTokenMarketDataContext) }?.latestMarketCap || 0
  ]
  return allMarketCaps?.reduce((total,cap)=> total + cap);
}

export default useCombinedTokenMarketCapData
