import "./styles.css";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import Grades from "./Courses/Grades";

export default function Kanbas() {
    return (
        <div id="wd-kanbas" className="h-100">
            <KanbasNavigation />
            <div className="flex-fill p-4 wd-main-content-offset">
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/:id/*" element={<Courses />} />
                    <Route path="Grades" element={<Grades />} />
                </Routes>
            </div>
        </div>
    );
}