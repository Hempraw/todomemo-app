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
  justify-content: space-between;
  align-items: center; 
  padding: 0 10px;
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
  justify-content: flex-end;
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
const MainWrapper = styled.div`
  display: flex;
  height: calc(100vh - 8vh);
`

const Wrapper = styled.div`
  width: 200px;
  margin: 5px 0;
`

const RightWrapper = styled.div`
  width: 80vw;
  padding: 10px;
  border-left: 1px solid black;
`

const AddNewButton = styled.button`
  font-size: 20px;
  border: none;
  border-radius: 3px;
  margin-left: 10px;
  padding: 2px 10px;
  background: gray;
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
      <MainWrapper>
        <Wrapper>
          <Switch>
            <Route exact path='/todomemos' component={TodomemoList} />
          </Switch>
        </Wrapper>
          <RightWrapper>
            <Switch>
              <Route exact path='/todomemos/new' component={AddTodomemo} />
              <Route path='/todomemos/:id/edit' component={EditTodomemo} />
            </Switch>
          </RightWrapper>
      </MainWrapper>
    </>
  )
}

export default App