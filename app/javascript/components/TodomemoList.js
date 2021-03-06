import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { ImCheckboxChecked, ImCheckboxUnchecked, ImCheckboxUnChecked } from 'react-icons/im'
import { AiFillEdit } from 'react-icons/ai'

const SearchAndButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
`
const SearchForm = styled.input`
  font-size: 12px;
  width: 80%;
  height: 30px;
  margin: 5px 0px;
  padding: 3px;
`
const RemoveAllButton = styled.button`
  width: 40%;
  height: 30px;
  background: #f54242;
  border: none;
  font-weight: 5;
  margin-left: 10px;
  padding: 5px 10px;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
`

const TodoName = styled.span`
  font-size: 14px;
  ${({is_completed}) => is_completed && `
    opacity: 0.4;
  `}
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 7px auto;
  padding: 10px;
  font-size: 14px;
`

const CheckedBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0 7px;
  color: green;
  cursor: pointer;
`
const UnCheckedBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0 7px;
  cursor: pointer;
`
const EditButton = styled.span`
  display: flex;
  align-items: center;
  margin: 0 7px;
`

function TodomemoList() {
  const [todomemos, setTodomemos] = useState([])
  const [searchName, setSearchName] = useState('')

  useEffect(()=>{
    axios.get('/api/v1/todomemos.json')
    .then(resp => {
      console.log(resp.data)
      setTodomemos(resp.data);
    })
    .catch(e => {
      console.log(e);
    })
  },[])

/* ダイヤルボックスを表示させてユーザーに全消去して良いか再確認する */
  const removeAllTodomemos = () => {
    const sure = window.confirm('本当に削除してよろしいですか？');
    if (sure) {
      axios.delete('api/v1/todomemos/destroy_all')
      .then(resp => {
        setTodomemos([])
      })
      .catch(e => {
        console.log(e)
      })
    }
  }

  const updateIsCompleted = (index, val) => {
    var data = {
      id: val.id,
      name: val.name,
      is_completed: !val.is_completed
    }
    axios.patch(`/api/v1/todomemos/${val.id}`, data)
    .then(resp => {
      const newTodomemos = [...todomemos]
      newTodomemos[index].is_completed = resp.data.is_completed
      setTodomemos(newTodomemos)
    })
  }

  return (
    <>
      <h2>リスト一覧</h2>
      <SearchAndButton>
        <SearchForm
          type="text"
          placeholder="Search todomemo..."
          onChange={event => {
            setSearchName(event.target.value)
          }}
        />
        <RemoveAllButton onClick={removeAllTodomemos}>
          全削除
        </RemoveAllButton>
      </SearchAndButton>
      <div>
        {todomemos.filter((val) => {
          if(searchName === "") {
            return val
          } else if(val.name.toLowerCase().includes(searchName.toLowerCase())){
            return val
          }
        }).map((val, key) => {
          return (
            <Row key={key}>
              {val.is_completed ? (
                <CheckedBox>
                  <ImCheckboxChecked onClick={() => updateIsCompleted(key, val) }/>
                </CheckedBox>
              ) : (
                <UnCheckedBox>
                  <ImCheckboxUnchecked onClick={() => updateIsCompleted(key, val) }/>
                </UnCheckedBox>
              )}
              <Link to={"/todomemos/" + val.id + "/edit"}>
                <TodoName is_completed={val.is_completed}>
                  {val.name}
                </TodoName>
              </Link>
              <Link to={"/todomemos/" + val.id + "/edit"}>
                <EditButton>
                  <AiFillEdit />
                </EditButton>
              </Link>
            </Row>
          )
        })}
      </div>
    </>
  )
}

export default TodomemoList