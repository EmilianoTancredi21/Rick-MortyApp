import { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

function App() {

   const [characters, setCharacters] = useState ([]);
   const {pathname} = useLocation();
   

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

  
   const login = async (userData) =>{
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const response = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = response.data;
         setAccess(access);
         access && navigate('/home');
      } catch (error) {
         console.log(error)
      }
   }


useEffect(() => {
   !access && navigate('/');
}, [access]);

   
   const onSearch = async (id) => {
      try {
         const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         const { data } = response
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
               }
      } catch (error) {
         console.log(error);
      }
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(char => char.id !== (id))
      setCharacters(charactersFiltered)

   }

   return (
      <div className='App'>
         {pathname !== "/" && <Navbar onSearch={onSearch} />}
         {(pathname !== "/" && pathname !== "/about") && <Header />}
         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/Home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
         
      </div>
   );
}

export default App;
