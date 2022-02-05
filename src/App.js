import React from 'react'
import MainBody from './MainBody'
import Navbar from './Navbar'
export const store = React.createContext()

const App = () => {
  const [user, setUser] = React.useState([])
  const [data, setData] = React.useState({
    id: new Date().getTime(),
    title: '',
    description: '',
    date: new Date().toLocaleDateString('en-US'),
  })
  const [buttonState, setButtonState] = React.useState(false)
  return (
    <store.Provider
      value={{ user, setUser, data, setData, buttonState, setButtonState }}
    >
      <div className="row" style={{ width: '100%' }}>
        <div className="col-md-4">
          <Navbar></Navbar>
        </div>
        <div className="col-md-8">
          <MainBody></MainBody>
        </div>
      </div>
    </store.Provider>
  )
}

export default App
