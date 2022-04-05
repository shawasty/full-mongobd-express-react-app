
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

      {/* with complex , sometimes we will need to access the history of the objects closest Route match */}
      {/* in react-router v5 there was withRouter which took care of the history, but has been depricated in v6 */}
      
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
// the following is needed to replace withRouter
// function withRouter (Child){
//   return function withRouter(props)  {
//     const location = useLocation()

//     return <Child {...props} location = {location}/>
//   }

// }

export default App;
