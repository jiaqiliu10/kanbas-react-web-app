import React from "react";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import './index.css';
import { IoEllipsisVertical } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import assignmentsData from "../../Database/assignments.json";
import { useParams, useLocation, Link } from "react-router-dom";

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const assignments = (assignmentsData as any[]).filter((assign) => assign.course === cid);
  const { pathname } = useLocation();

  return (
    <div id="wd-assignments">
      <div className="search-container d-flex w-100 mb-4">
        <div className="row flex-grow-1">
          <div className="col-6">
            <i className="search-icon">
              <HiMiniMagnifyingGlass />
            </i>
            <input
              type="text"
              className="form-control search-input text-md-center"
              id="wd-search-assignment"
              placeholder="Search..."
            />
          </div>
          <div className="col-6 d-flex justify-content-end align-items-center">
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
      <ul id="wd-assignment" className="list-group rounded-0" style={{ width: '100%' }}>
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENT
            <span className="float-end">
              <span className="badge rounded-pill text-dark border border-black me-2">
                40% of Total
              </span>
              <FiPlus />
              <IoEllipsisVertical className="fs-4" />
            </span>
          </div>
          {assignments.map((assign) => (
            <ul className="wd-lessons list-group rounded-0" key={assign._id}>
              <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <MdAssignment className="me-2 fs-3 text-success" />
                <div className="ms-3">
                  <Link to={`${pathname}/${assign._id}`} className="wd-assignment-link text-dark">
                    <div className="fw-bold">{assign.title}</div>
                    <div className="text-muted small">
                      <span className="text-danger">{assign.modules}</span> | <span>{assign.availability}</span>
                    </div>
                    <div className="text-muted small">
                      {assign.due} | {assign.points} pts
                    </div>
                  </Link>
                </div>
                <div className="ms-auto">
                  <LessonControlButtons />
                </div>
              </li>
            </ul>
          ))}
        </li>
      </ul>
    </div>
  );
}
