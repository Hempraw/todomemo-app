import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import AddTodomemo from './AddTodomemo'
import TodomemoList from './TodomemoList'
import EditTodomemo from './EditTodomemo'
import { IoMdCreate } from 'react-icons/io'
import { FaRegListAlt } from 'react-icons/fa'
import './App.css'

const Navbar = styled.nav`
  background: #cccccc;
  min-height: 8vh;
  display: flex;
  justify-content: space-around;
  align-items: center; 
  border: 1px solid black;
`

const Logo = styled.div`
  font-weight: bold;
  font-size: 23px;
  letter-spacing: 3px;
  color: #666666;
`
const NavItems = styled.ul`
  display: flex;
  width: 600px;
  max-width: 40%;
  justify-content: space-around;
  list-style: none;
`

const NavItem = styled.li`
  font-size: 19px;
  font-weight: bold;
  opacity: 0.7;
  &:hover{
    opacity: 1;
  }
`
const Wrapper = styled.div`
  width: 700px;
  max-width: 85%;
  margin: 20px auto;
`

const AddNewButton = styled.button`
  font-size: 20px;
  border: none;
  border-radius: 3px;
  margin-left: 10px;
  padding: 2px 10px;
  background: #1E90FF;
  color: #fff;
  text-align: center;
  cursor: pointer;
`
const AddIcon = styled.span`
  display: flex;
  align-items: center;
`

function App() {
  return (
    <>
      <Navbar>
        <Logo>
          Todomemo
        </Logo>
        <NavItems>
          <NavItem>
            <Link to='/todomemos'>
            <AddNewButton>
                <AddIcon>
                  <FaRegListAlt />
                  メモ一覧
                </AddIcon>
              </AddNewButton>
            </Link>
          </NavItem>
          <NavItem>
            <Link to='/todomemos/new'>
              <AddNewButton>
                <AddIcon>
                  <IoMdCreate />
                  新規作成
                </AddIcon>
              </AddNewButton>
            </Link>
          </NavItem>
        </NavItems>
      </Navbar>
      <Wrapper>
        <Switch>
          <Route exact path='/todomemos' component={TodomemoList} />
          <Route exact path='/todomemos/new' component={AddTodomemo} />
          <Route path='/todomemos/:id/edit' component={EditTodomemo} />
        </Switch>
      </Wrapper>
    </>
  )
}

export default App