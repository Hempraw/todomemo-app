import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FiSend } from 'react-icons/fi'
import { initial } from 'lodash'
import { props } from 'bluebird'

const InputAndButton = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3px;
`

const InputName = styled.input`
  font-size: 12px;
  width: 100%;
  height: 30px;
  padding: 2px 7px;
`

const Button = styled.button`
  font-size: 20px;
  border: none;
  border-radius: 3px;
  margin-left: 10px;
  padding: 2px 10px;
  background: gray;
  color: #fff;
  text-align: center;
  cursor: pointer;
  ${({ disabled }) => disabled && `
    opacity: 0.5;
    cursor: default;
  `}
`

const Icon = styled.span`
  display: flex;
  align-items: center;
  margin: 0 7px;
`

toast.configure()

 function AddTodomemo(props) {
   const initialTodomemoState = {
     id: null,
     name: "",
     is_completed: false
   }

   const [todomemo, setTodomemo] = useState(initialTodomemoState)

   const handleInputChange = event => {
     const { name, value } = event.target;
     setTodomemo({ ...todomemo, [name]: value })
   }

   const notify = () => {
     toast.info('登録を完了しました！', {
       position: 'top-center',
       hideProgressBar: true
     })
   }

   const saveTodomemo = () => {
     var data = {
       name: todomemo.name
     }

     axios.post('/api/v1/todomemos', data)
     .then(resp => {
       setTodomemo({
         id: resp.data.id,
         name: resp.data.name,
         is_completed: resp.data.is_completed
       })
       notify()
       props.history.push('/todomemos')
     })
     .catch(e => {
       console.log(e)
     })
   }

  return (
    <>
      <h2>新規登録</h2>
      <InputAndButton>
        <InputName
          type="text"
          required
          value={todomemo.name}
          name="name"
          onChange={handleInputChange}
        />
        <Button
          onClick={saveTodomemo}
          disabled={(!todomemo.name || /^\s*$/.test(todomemo.name))}
        >
          <Icon>
            <FiSend />
          </Icon>
        </Button>
      </InputAndButton>
    </>
  )
}

 export default AddTodomemo