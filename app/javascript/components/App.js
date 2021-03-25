import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import AddTodomemo from './AddTodomemo'
import TodomemoList from './TodomemoList'
import EditTodomemo from './EditTodomemo'
import './App.css'

const Navbar = styled.nav`
  background: #dbfffe;
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
`
const NavItems = styled.ul`
  display: flex;
  width: 400px;
  max-width: 40%;
  justify-content: space-around;
  list-style: none;
  border: 1px solid black;
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
              Todomemos
            </Link>
          </NavItem>
          <NavItem>
             <Link to='/todomemos/new'>
               Add New Todomemo
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