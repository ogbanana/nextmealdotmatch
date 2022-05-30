import { FC, createContext, useState, Dispatch, SetStateAction } from 'react'
interface UserIngredientsInterface {
  userIngredients: string[]
  setUserIngredients: Dispatch<SetStateAction<string[]>>
  userTime: string
  setUserTime: Dispatch<SetStateAction<string>>
}

const userIngredientsDefaultValue = {
  userIngredients: [],
  setUserIngredients: () => {},
  userTime: '',
  setUserTime: () => {},
}

const SelectedIngredientsContext = createContext<UserIngredientsInterface>(
  userIngredientsDefaultValue,
)

const SelectedIngredientsProvider: FC = ({ children }) => {
  const [userIngredients, setUserIngredients] = useState(
    userIngredientsDefaultValue.userIngredients,
  )

  const [userTime, setUserTime] = useState(userIngredientsDefaultValue.userTime)

  return (
    <SelectedIngredientsContext.Provider
      value={{ userIngredients, setUserIngredients, userTime, setUserTime }}
    >
      {children}
    </SelectedIngredientsContext.Provider>
  )
}

export { SelectedIngredientsContext, SelectedIngredientsProvider }
