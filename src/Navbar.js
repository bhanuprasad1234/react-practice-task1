import React from 'react'
import { store } from './App'

const Navbar = () => {
  const {
    user,
    setUser,
    setData,
    buttonState,
    setButtonState,
  } = React.useContext(store)
  const handleDelete = (item) => {
    console.log(item, 'item', user)
    let filterdArr = user.filter((i) => i.id !== item.id)
    // console.log(filterdArr, 'filterdArr')
    setUser(filterdArr.length > 0 ? filterdArr : [])
  }
  const handleEdit = (item) => {
    setData(item)
    setButtonState(true)
  }

  return (
    <div>
      <div className="wrapper">
        <nav id="sidebar">
          <div className="sidebar-header">
            <div>
              <center>
                <h3>List</h3>
              </center>
            </div>
          </div>
          {user.map((item, index) => {
            return (
              <div
                className="card border-success mb-3"
                style={{ maxWidth: '100%', background: '#5c6792' }}
                key={index}
              >
                {/* {console.log(item, 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzz')} */}
                <div className="card-header">
                  <h5>{item.title.toUpperCase()}</h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    // aria-label="Close"
                    onClick={() => handleDelete(item)}
                  ></button>
                  <i
                    className="fas fa-edit"
                    onClick={() => handleEdit(item)}
                  ></i>
                </div>

                <div className="fw-normal text-warning">
                  <p>{item.description}</p>
                  <p className="text-dark" style={{ fontSize: '10px' }}>
                    s{item.date}
                  </p>
                </div>
              </div>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

export default Navbar
