import React from 'react';
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import { Routes, Route, Navigate } from "react-router";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";

export default function Courses() {
    return (
        <div id="wd-courses">
            <h2>Course 1234</h2>
            <hr />
            <table className={"w-100"}>
                <tr>
                    <td valign="top" style={{width: "50px"}}>
                        <CoursesNavigation />
                    </td>
                    <td valign="top" >
                        <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home/>} />
                            <Route path="Modules" element={<Modules/>} />
                            <Route path="Assignments"
                                element={<Assignments/>} />
                            <Route path="Assignments/:id"
                                element={<AssignmentEditor/>} />
                            <Route path={"Grades"} element={<Grades/>} />
                        </Routes>
                    </td>
                </tr>
            </table>
        </div>
    );
}
