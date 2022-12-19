import React, { useState } from 'react'
import './Sidebar.css'
import { BiHomeAlt, BiMoney } from 'react-icons/bi'
import { GiSwipeCard } from 'react-icons/gi'
import { IoCardOutline } from 'react-icons/io5'
import styled from 'styled-components'

interface Props {
  mini: boolean
}

const SidebarContainer = styled.div<Props>`
  min-height: 100vh;
  width: ${(props) => (props.mini ? '85px' : '300px')};
  top: 0;
  left: 0;
  background-color: #111;
  padding-top: 60px;
  transition: 0.5s;
  overflow-x: hidden;
  height: 100%;
  padding-top: 60px;
  white-space: nowrap;
`

const SidebarOption = styled.span`
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;

  &: hover {
    color: #f1f1f1;
    cursor: pointer;
  } ;
`

const SidebarIcon = styled.span`
  vertical-align: middle;
  margin-right: 30px;
`

const Sidebar = (props: { sideClick: (event: any) => void }) => {
  const [mini, setMini] = useState(true)

  return (
    <SidebarContainer
      mini={mini ? true : false}
      onMouseOver={() => {
        setMini((prevMini) => !prevMini)
      }}
      onMouseOut={() => {
        setMini((prevMini) => !prevMini)
      }}
    >
      <SidebarOption id='overview' onClick={props.sideClick}>
        <SidebarIcon>
          <BiHomeAlt />
        </SidebarIcon>
        <SidebarIcon>Home</SidebarIcon>
      </SidebarOption>

      <br />

      <SidebarOption id='transactions' onClick={props.sideClick}>
        <SidebarIcon>
          <BiMoney />
        </SidebarIcon>
        <SidebarIcon>Transactions</SidebarIcon>
      </SidebarOption>

      <br />

      <SidebarOption id='cards' onClick={props.sideClick}>
        <SidebarIcon>
          <GiSwipeCard />
        </SidebarIcon>
        <SidebarIcon>Cards</SidebarIcon>
      </SidebarOption>

      <br />

      <SidebarOption id='bins' onClick={props.sideClick}>
        <SidebarIcon>
          <IoCardOutline />
        </SidebarIcon>
        <SidebarIcon>Bins</SidebarIcon>
      </SidebarOption>
    </SidebarContainer>
  )
}

export default Sidebar
