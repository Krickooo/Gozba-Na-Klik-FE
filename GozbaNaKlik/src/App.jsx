import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/login" element={<LoginForm />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
};

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">Početna stranica</Link><br></br>
            </nav>
        </header>
    );
};

export default App;