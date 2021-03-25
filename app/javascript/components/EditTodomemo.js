import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { props } from 'bluebird'

const InputName = styled.input`
  font-size: 20px;
  width: 100%;
  height: 40px;
  padding: 2px 7px;
  margin: 12px 0;
`

const CurrentStatus = styled.div`
  font-size: 19px;
  margin: 8px 0 12px 0;
  font-weight: bold;
`

const IsCompletedButton = styled.button`
  color: #fff;
  font-weight: 500;
  font-size: 17px;
  padding: 5px 10px;
  background: #f2a115;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`

const EditButton = styled.button`
  color: #fff;
  font-weight: 500;
  font-size: 17px;
  padding: 5px 10px;
  margin: 0 10px;
  background: #0ac620;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`

const DeleteButton = styled.button`
  color: #fff;
  font-weight: 500;
  font-size: 17px;
  padding: 5px 10px;
  background: #f54242;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`

toast.configure()

function EditTodomemo(props) {
  const initialTodomemoState = {
    id: null,
    name: "",
    is_completed: false
  }

  const [currentTodomemo, setCurrentTodomemo] = useState(initialTodomemoState)

  const notify = () => {
    toast.success('Todomemo Successfully updated!', {
      position: 'bottom-center',
      hideProgressBar: true
    })
  }

  const getTodomemo = id => {
    axios.get(`/api/v1/todomemos/${id}`)
    .then(resp => {
      setCurrentTodomemo(resp.data)
    })
    .catch(e => {
      console.log(e)
    })
  }

  useEffect(() => {
    getTodomemo(props.match.params.id)
  }, [props.match.params.id])

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTodomemo({ ...currentTodomemo, [name]: value})
  }

  const updateIsCompleted = val => {
    var data = {
      id: val.id,
      name: val.name,
      is_completed: !val.is_completed
    }
    axios.patch(`/api/v1/todomemos/${val.id}`, data)
    .then(resp => {
      setCurrentTodomemo(resp.data)
    })
  }

  const updateTodomemo = () => {
    axios.patch(`/api/v1/todomemos/${currentTodomemo.id}`, currentTodomemo)
    .then(resp => {
      notify()
      props.history.push('/todomemos')
    })
    .catch(e => {
      console.log(e)
    })
  }

  const deleteTodomemo = () => {
    const sure = window.confirm('Are you sure?')
    if (sure) {
      axios.delete(`/api/v1/todomemos/${currentTodomemo.id}`)
      .then(resp => {
        props.history.push('/todomemos')
      })
      .catch(e => {
        console.log(e)
      })
    }
  }

  return (
    <>
      <h1>Editing Todomemo</h1>
      <div>
        <div>
          <label htmlFor="name">Current Name</label>
          <InputName
            type="text"
            name="name"
            value={currentTodomemo.name}
            onChange={handleInputChange}
          />
          <div>
            <span>Current Status</span><br/>
            <CurrentStatus>
              {currentTodomemo.is_completed ? "Completed" : "Uncompleted" }
            </CurrentStatus>
          </div>
        </div>
        {currentTodomemo.is_completed ? (
          <IsCompletedButton onClick={()=> updateIsCompleted(currentTodomemo)}>
            Uncompleted
          </IsCompletedButton>
        ) : (
          <IsCompletedButton onClick={() => updateIsCompleted(currentTodomemo)}>
            Completed
          </IsCompletedButton>
        )}
        <EditButton onClick={updateTodomemo}>
          Update
        </EditButton>
        <DeleteButton onClick={deleteTodomemo}>
          Delete
        </DeleteButton>
      </div>
    </>
  )
}

export default EditTodomemo