import {createContext, Fragment, useEffect, useReducer} from "react";
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from "react-router-dom";
import Header from "./components/header";
import AddStudent from "./pages/addStudent";

import LoginPage from "./pages/login";
import SignUp from "./pages/signUp";
import ListStudents from "./pages/listStudents";
import PrivateRoute from "./components/PrivateRoute";

export const AuthContext = createContext();
const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
};
const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            const {user, token} = action.payload;
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", token);
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token
            };
        case "LOGOUT":
            localStorage.clear();
            return {
                ...state,
                isAuthenticated: false,
                user: null
            };
        case "SET_STATE":
            return {
                ...state,
                isAuthenticated: true,
                user: JSON.parse(localStorage.getItem("user")),
                token: localStorage.getItem("token")
            };
        default:
            return state;
    }
};

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch({type: "SET_STATE"})
        }
    }, [])
    return (
        <AuthContext.Provider value={{
            state,
            dispatch
        }}>
            <Router>
                <Header/>
                <Fragment>
                    <Routes>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route exact path='/' element={<PrivateRoute/>}>
                            <Route exact path='/' element={<ListStudents/>}/>
                        </Route>
                        <Route exact path='/add-student' element={<PrivateRoute/>}>
                            <Route exact path='/add-student' element={<AddStudent/>}/>
                        </Route>
                        <Route exact path='/student/:id' element={<PrivateRoute/>}>
                            <Route exact path='/student/:id' element={<AddStudent/>}/>
                        </Route>

                        <Route path="/register" element={<SignUp/>}/>
                        <Route path="*" element={<Navigate to="/"/>}/>
                    </Routes>
                </Fragment>
            </Router>


        </AuthContext.Provider>
    );
}


export default App;
