import React, { useState, useEffect } from 'react'
import FliIndexPortfolioDataContext from './FliIndexPortfolioDataContext'
import { fetchSetComponentsBeta } from 'utils/tokensetsApi'
import { tokensetsFliId } from 'constants/tokensetsIds'

const FliIndexPortfolioDataProvider: React.FC = ({ children }) => {
  const [fliIndexPortfolioData, setFliIndexPortfolioData] = useState<any>([])

  useEffect(() => {
    fetchSetComponentsBeta(tokensetsFliId)
      .then((response: any) => {
        setFliIndexPortfolioData(response)
      })
      .catch((error: any) => console.log(error))
  }, [])

  return (
    <FliIndexPortfolioDataContext.Provider value={{ ...fliIndexPortfolioData }}>
      {children}
    </FliIndexPortfolioDataContext.Provider>
  )
}

export default FliIndexPortfolioDataProvider
