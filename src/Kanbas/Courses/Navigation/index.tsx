import './index.css';
import {Link, useLocation} from "react-router-dom";

export default function CoursesNavigation({courseId}: { courseId: string | undefined }) {
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];
    const {pathname} = useLocation()
    return (
        <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
            {links.map((link) => (
                <Link key={link} to={`/Kanbas/Courses/${courseId}/${link}`} className={`list-group-item active border border-0 
                ${pathname.includes(link) ? "text-danger" : "text-black"}`}> {link} </Link> ))}
        </div>
    );
}
