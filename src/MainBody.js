import React, { useContext } from 'react'

import { store } from './App'

const MainBody = () => {
  const { user, setUser, data, setData } = useContext(store)

  //   console.log(user)
  //   const [data, setData] = React.useState({
  //     id: new Date().getTime(),
  //     title: '',
  //     description: '',
  //     date: new Date().toLocaleDateString('en-US'),
  //   })
  console.log(user, 'qwertyui')

  const submit = () => {
    setUser([...user, data])
    setData({
      id: new Date().getTime(),
      title: '',
      description: '',
      date: new Date().toLocaleDateString('en-US'),
    })
  }
  return (
    <div>
      <center>
        <h1>Main Body</h1>
      </center>
      <div>
        <form>
          <div className="row">
            <div className="mb-3 col-md-8">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Write title"
                value={data.title}
                onChange={(e) => setData({ ...data, title: e.target.value })}
              />
            </div>
            <div className="mb-4 col-md-8 ">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                value={data.description}
                placeholder="Write Description"
                id="floatingTextarea"
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
              />
            </div>

            <button
              type="button"
              className="btn btn-primary col-md-8"
              onClick={() => submit()}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default MainBody
