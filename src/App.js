// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import ApplicationForm from './ApplicationForm';
import ApplicationsList from './ApplicationsList';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Головна</Link>
                        </li>
                        <li>
                            <Link to="/apply">Подати заявку</Link>
                        </li>
                        <li>
                            <Link to="/applications">Заявки</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/apply" element={<ApplicationForm />} />
                    <Route path="/applications" element={<ApplicationsList />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;