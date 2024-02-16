import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { BlogList, Followers, Following, Navbar } from './components'
import { About, Home, Profile, BlogPage, WriteBlog, NotLoggedIn, Users } from './pages';
import React, { useEffect } from 'react';
import axios from './axios';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from './features/user/userSlice';


function App() {

  const jwt = localStorage.getItem("jwt_token")
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(state => state.user)

  useEffect(() => {

    ; (async () => {
      try {
        if (jwt) {
          const response = await axios.get('/user', { headers: { 'Authorization': jwt } });
          if (response.data) {
            dispatch(logIn(response.data))
          }
        }
      } catch (error) {
        console.log(error)
      }
    })()

  }, [jwt])

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/user/:id" element={<Profile />}>
          <Route path='blogs' element={<BlogList />}></Route>
          <Route path='followers' element={<Followers />}></Route>
          <Route path='following' element={<Following />}></Route>
          <Route index element={<Navigate to='blogs' />}></Route>
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/write" element={isLoggedIn ? <WriteBlog /> : <NotLoggedIn />}></Route>
        <Route path="/blog/:id" element={<BlogPage />}></Route>
        <Route path="/users" element={<Users />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
