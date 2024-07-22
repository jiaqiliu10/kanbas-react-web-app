import React from 'react';
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import { Routes, Route, Navigate, useParams, useLocation } from "react-router";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import { courses } from "../Database";
import { FaAlignJustify } from "react-icons/fa";

export default function Courses() {
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const { pathname } = useLocation();
    const pathParts = pathname.split("/");

    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course && course.name} &gt; {pathParts[4]}
                {pathParts[5] && ` > ${pathParts[5]}`}
            </h2>
            <div className="d-flex">
                <div className="d-none d-md-block me-4">
                    <CoursesNavigation courseId={cid} />
                </div>
                <div className="flex-fill">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
