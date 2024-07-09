
import LessonControlButtons from "../Modules/LessonControlButtons"
import {BsGripVertical} from "react-icons/bs";
import {MdAssignment} from "react-icons/md";
import {HiMiniMagnifyingGlass} from "react-icons/hi2";
import './index.css'
import {IoEllipsisVertical} from "react-icons/io5";
import {FiPlus} from "react-icons/fi";

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <div className="search-container d-flex w-100 mb-4"  >
                <div className={"row flex-grow-1"} >
                    <div className={"col-6"}>
                        <i className="search-icon">
                            <HiMiniMagnifyingGlass/>
                        </i>
                        <input
                            type="text"
                            className="form-control search-input"
                            id="wd-search-assignment"
                            placeholder="Search..."
                        />
                    </div>
                    <div className={"col-6 d-flex justify-content-end align-items-center"}  >
                        <button
                            id="wd-add-assignment-group"
                            className="btn btn-md btn-secondary me-1"
                        >
                            + Group
                        </button>
                        <button
                            id="wd-add-assignment"
                            className="btn btn-md btn-danger me-1"
                        >
                            + Assignment
                        </button>
                    </div>

                </div>
            </div>

            <ul id="wd-assignment" className="list-group rounded-0" style={{width: '100%'}}>
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3"/>
                        ASSIGNMENT
                        <span className="float-end">
                                 <span
                                     className="badge rounded-pill  text-dark border border-black me-2">
                                    40% of Total
                                  </span>
                            <FiPlus/>
                        <IoEllipsisVertical className="fs-4"/>
                        </span>
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3"/>
                            <MdAssignment className="me-2 fs-3 text-success"/>
                            <div className="ms-3">
                                <a className="wd-assignment-link text-dark"
                                   href="#/Kanbas/Courses/1234/Assignments/123">
                                    <div className="fw-bold">A1</div>
                                    <div className="text-muted small">
                                        <span className="text-danger">Multiple Modules</span> | <span>Not available until May 6 at 12:00am |</span>
                                    </div>
                                    <div className="text-muted small">
                                        Due May 13 at 11:59pm | 100 pts
                                    </div>
                                </a>
                            </div>

                            <div className="ms-auto">
                                <LessonControlButtons/>
                            </div>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3"/>
                            <MdAssignment className="me-2 fs-3 text-success"/>
                            <div className="ms-3">
                                <a className="wd-assignment-link text-dark"
                                   href="#/Kanbas/Courses/1234/Assignments/123">
                                    <div className="fw-bold">A2</div>
                                    <div className="text-muted small">
                                        <span className="text-danger">Multiple Modules</span> | <span>Not available until May 13 at 12:00am |</span>
                                    </div>
                                    <div className="text-muted small">
                                        Due May 20 at 11:59pm | 100 pts
                                    </div>
                                </a>
                            </div>
                            <div className="ms-auto">
                                <LessonControlButtons/>
                            </div>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3"/>
                            <MdAssignment className="me-2 fs-3 text-success"/>
                            <div className="ms-3">
                                <a className="wd-assignment-link text-dark"
                                   href="#/Kanbas/Courses/1234/Assignments/123">
                                    <div className="fw-bold">A3</div>
                                    <div className="text-muted small">
                                        <span className="text-danger">Multiple Modules</span> | <span>Not available until May 20 at 12:00am |</span>
                                    </div>
                                    <div className="text-muted small">
                                        Due May 27 at 11:59pm | 100 pts
                                    </div>
                                </a>
                            </div>
                            <div className="ms-auto">
                                <LessonControlButtons/>
                            </div>
                        </li>
                    </ul>

                </li>
            </ul>
        </div>
    );
}
