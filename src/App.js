import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';
import { LoaderContext } from './Context/LoaderContext';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import GlobalLoader from './Components/Common/GlobalLoader';
import Home from './Components/Home/Home';

function App() {
  const {user,loading} = useContext(AuthContext);
    const {loader,setLoader} = useContext(LoaderContext);
    console.log(user,loading)
    return (
        <>
          {(loader || loading) && <GlobalLoader></GlobalLoader>}
          {!loading && <Router> 
              <Routes>
                  <Route exact path="/signIn" element={<SignIn />}></Route>
                  <Route exact path="/signUp" element={<SignUp />}></Route>  
                  <Route exact path="/" element={<Home />}></Route>
              </Routes>
          </Router>}
       </> 
    )
}

export default App;
