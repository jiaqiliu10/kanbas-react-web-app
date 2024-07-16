import React from "react";
import { FaFileImport } from "react-icons/fa";
import { TiExportOutline } from "react-icons/ti";
import { CiSettings } from "react-icons/ci";
import "./index.css";
import {HiMiniMagnifyingGlass} from "react-icons/hi2";
import { IoFunnelOutline } from "react-icons/io5";
import {grades, enrollments, users} from '../../Database'
import { useParams} from "react-router-dom";

export default function Grades() {
    const {cid} = useParams()
    const entrolled_stu = enrollments.filter((enroll) => enroll.course === cid)


    return (
        <div id={"wd-grades-editor"} >
            <div id={"function_btn"} className={"d-flex mb-3 justify-content-end"}>
                <div className={"button-group me-2 button_style"}>
                    <FaFileImport/>
                    <button type={"button"} className={"btn "}>Import</button>
                </div>
                <div className="dropdown me-2 button_style">
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-bs-toggle="dropdown" aria-expanded="false">
                        <TiExportOutline/> Export
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a className="dropdown-item" href="#action1">Export as PDF</a></li>
                        <li><a className="dropdown-item" href="#action2">Export as CSV</a></li>
                        <li><a className="dropdown-item" href="#action3">Export as Excel</a></li>
                    </ul>
                </div>
                <div id={"settings"} className={"ms-2 button_style"} style={{fontSize: "30px"}}>
                    <CiSettings/>
                </div>
            </div>
            <div id={"name-search-box"} className={"d-flex justify-content-between"}>
                <div className={"d-flex search-container"}>
                    <div className={"col-sm-8 me-5"}>
                        <label className={"col-form-label fw-bold"}>Student Names</label>
                        <i className={"search-icon3"}>
                            <HiMiniMagnifyingGlass/>
                        </i>
                        <input type="search" className={"form-control"} placeholder={"Search Students"}
                               style={{paddingLeft: "20%"}}></input>
                    </div>
                    <div className={"col-sm-8"}>
                        <label className={"col-form-label fw-bold"}>Assignment Names</label>
                        <i className={"search-icon2"}>
                            <HiMiniMagnifyingGlass/>
                        </i>
                        <input type={"search"} className={"form-control"} placeholder={"Search Assignment"}
                               style={{paddingLeft: "20%"}}></input>
                    </div>
                </div>
            </div>
            <div id="filter-btn" className="apply-filters my-4 button_style" style={{width: "30%"}}>
                <IoFunnelOutline/>
                <button type="button" className="btn ">Apply Filters</button>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                    <tr className={"table-secondary"}>
                        <th> ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Grades</th>
                        <th>Email</th>
                        <th>Date of Birth</th>
                    </tr>
                    </thead>
                    <tbody>
                    {entrolled_stu.map((enroll => {
                            const user = users.find(user => user._id === enroll.user)
                            const grade = grades.find(stu => stu.student === enroll.user)
                                return (
                                    <tr>
                                        <td> {enroll.user} </td>
                                        <td className="text-danger">{`${user && user.firstName}`}</td>
                                        <td className="text-danger">{`${user && user.lastName}`}</td>
                                        <td>{`${grade && grade.grade}`}</td>
                                        <td>{`${user && user.email}`}</td>
                                        <td>{`${user && user.dob}`}</td>
                                    </tr>
                                );
                    }))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}