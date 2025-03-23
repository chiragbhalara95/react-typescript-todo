import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TodoList from "../components/TodoList";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
};

export default AppRoutes;