import { FC, createContext, useState, Dispatch, SetStateAction } from 'react'

const userIngredientsDefaultValue = {
  userIngredients: [],
  setUserIngredients: () => {},
}

interface UserIngredientsInterface {
  userIngredients: string[]
  setUserIngredients: Dispatch<SetStateAction<string[]>>
}

const SelectedIngredientsContext = createContext<UserIngredientsInterface>(
  userIngredientsDefaultValue,
)

const SelectedIngredientsProvider: FC = ({ children }) => {
  const [userIngredients, setUserIngredients] = useState(
    userIngredientsDefaultValue.userIngredients,
  )

  return (
    <SelectedIngredientsContext.Provider value={{ userIngredients, setUserIngredients }}>
      {children}
    </SelectedIngredientsContext.Provider>
  )
}

export { SelectedIngredientsContext, SelectedIngredientsProvider }
