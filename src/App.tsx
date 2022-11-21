import { useState, useContext } from "react"
import Form from "./Form"

import { User } from "./interfaces"
import { InputValueContext } from "./InputValueContext"
function App() {
  const [user, setUser] = useState<User | undefined>()
  const { state, dispatch } = useContext(InputValueContext)

  const fetchUser = () =>
    setUser({
      name: "Michael",
      age: 22,
      country: "Nigeria",
      address: {
        street: "ogbomosho",
        number: 88,
        zip: "2004"
      },
      admin: false
    })

  return (
    <div className="App">
      <button type="button" onClick={fetchUser}>
        Fetch user on click
      </button>

      {user && <p>{`Welcome ${user.name}`}</p>}
      <Form />
      <div>
        <p> value: {state.inputValue}</p>
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "SET_INPUT_VALUE_TO_100"
            })
          }
        >
          SET VALUE TO 100
        </button>
      </div>
    </div>
  )
}

export default App
