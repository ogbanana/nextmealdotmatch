import { FC, createContext, useState } from 'react'

const SelectedIngredientsContext = createContext()

const SelectedIngredientsProvider: FC = ({ children }) => {
  const [userIngredients, setUserIngredients] = useState([])

  return (
    <SelectedIngredientsContext.Provider
      value={{
        userIngredients,
        setUserIngredients,
      }}
    >
      {children}
    </SelectedIngredientsContext.Provider>
  )
}

export { SelectedIngredientsContext, SelectedIngredientsProvider }
