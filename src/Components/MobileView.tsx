import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Screen from './Screen'
import ChatSection from './ChatSection/ChatSection'
import MessageSection from './ChatSection/MesssageSection'
import ChatSectionFooter from './ChatSection/ChatSectionFooter'
import SideBar from './SideBar/SideBar'
import ChatSectionHeader from './ChatSection/ChatSectionHeader'

const MobileView = () => {
  return (
    // <div>MobileView</div>

    <Routes>
        <Route  path="/" element={<SideBar/>}/>
        <Route  path="/:mobileNo" element={
        <>
        {/* <ChatSection/> */}
        <ChatSectionHeader/>
        <MessageSection/>
        <ChatSectionFooter/>
        </>
        
        }/>
    </Routes>
  )
}

export default MobileView