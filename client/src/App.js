
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/routes/Home';
import Items from './components/routes/Items';
import ItemCreate from './components/routes/ItemsCreate';
import Item from './components/routes/Item';
import ItemEdit from './components/routes/ItemEdit';

function App() {
  return (
    <div className="App">
      
      <Routes>
                <Route path='/' element = { <Home/> }/>
                <Route path='/items' element = { <Items/> }/>
                <Route path='create-item' element = { <ItemCreate/> }/>
                <Route path='/items/:id' element = { <Item/> }/>
                <Route path='/items/:id/edit' element = { <ItemEdit/> }/>
                
            </Routes>
    </div>
  );
}

export default App;
