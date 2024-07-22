import LessonControlButtons from "../Modules/LessonControlButtons"
import {BsGripVertical} from "react-icons/bs";
import {MdAssignment} from "react-icons/md";
import {HiMiniMagnifyingGlass} from "react-icons/hi2";
import './index.css'
import {IoEllipsisVertical} from "react-icons/io5";
import {FiPlus} from "react-icons/fi";
import {assignments, modules} from "../../Database";
import {useParams, useLocation} from "react-router";
import {Link, useNavigate} from "react-router-dom";
import * as path from "node:path";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { useDispatch, useSelector} from "react-redux";
import { deleteAssignment, updateAssignment} from "./reducer";
import {useState} from "react";
import AssignmentEditor from "./Editor";


export default function Assignments() {
    const {cid, aid} = useParams()
    const {pathname} = useLocation()
    const [assignment, setassignment] = useState("")
    const {assignments} = useSelector((state:any) => state.assignmentsReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()

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
                            className="form-control search-input text-md-center"
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
                            onClick={() => {
                                navigate("newAssignment", {state: {courseId : cid}})}}
                        >
                            + Assignment
                        </button>
                    </div>

                </div>
            </div>
            <ul id="wd-assignment" className="list-group rounded-0 " style={{width: '100%'}}>
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
                    {assignments.filter((assign : any) => assign.course === cid).map((assign: any) => (
                        <ul key={assign._id} className="wd-lessons list-group rounded-0">
                            <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3"/>
                                <MdAssignment className="me-2 fs-3 text-success"/>
                                <div className="ms-3">
                                    <Link to= {`${pathname}/${assign._id}`} className="wd-assignment-link text-dark ">
                                        <div className="fw-bold">{assign.title}</div>
                                        <div className="text-muted small">
                                            <span className="text-danger">{`${assign.modules}`}</span> | <span>{`${assign.availability}`} |</span>
                                        </div>
                                        <div className="text-muted small">
                                            {`${assign.due}`} | {`${assign.points}`} pts
                                        </div>
                                        </Link>
                                </div>
                                <div className="ms-auto">
                                    <AssignmentControlButtons assignId={assign._id} deleteAssignment={deleteAssignment} courseId={cid}  />
                             </div>
                            </li>
                        </ul>
                    ))}
                </li>
            </ul>
        </div>
    );
}