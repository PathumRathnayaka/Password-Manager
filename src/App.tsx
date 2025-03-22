import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Generator from './components/Generator';
import Footer from './components/Footer';
import { GoogleOAuthProvider } from '@react-oauth/google';
import SignUp from './components/SignUp';
import Login from './components/Login'; // Import the Login component
import { UserProvider } from './context/UserContext';

function App() {
    return (
        <GoogleOAuthProvider clientId="1005720253515-0u4mg53mp7ukctfenchitsf19hglgssq.apps.googleusercontent.com">
            <UserProvider>
                <Router>
                    <div className="min-h-screen bg-gray-50 flex flex-col">
                        <Navbar/>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/generator" element={<Generator />} />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/login" element={<Login />} /> {/* Add the /login route */}
                        </Routes>
                        <Footer />
                    </div>
                </Router>
            </UserProvider>
        </GoogleOAuthProvider>
    );
}

export default App;