import React from "react";
import { FaFileImport } from "react-icons/fa";
import { TiExportOutline } from "react-icons/ti";
import { CiSettings } from "react-icons/ci";
import "./index.css";
import {HiMiniMagnifyingGlass} from "react-icons/hi2";
import { IoFunnelOutline } from "react-icons/io5";

export default function Grades() {
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
                        <th>Student Name</th>
                        <th>A1 SETUP</th>
                        <th>A2 HTML</th>
                        <th>A3 CSS</th>
                        <th>A4 BOOTSTRAP</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr >
                        <td className="text-danger">Jane Adams</td>
                        <td>100%</td>
                        <td>96.67%</td>
                        <td>92.18%</td>
                        <td>66.22%</td>
                    </tr>
                    <tr className={"table-secondary"}>
                        <td className="text-danger ">Christina Allen</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100%</td>
                    </tr>
                    <tr >
                        <td className="text-danger">Samreen Ansari</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100%</td>
                    </tr>
                    <tr className={"table-secondary "}>
                        <td className={"text-danger"}>Han Bao</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>
                            <input type="text" value="88.03%" className="form-control"/>
                        </td>
                        <td>98.99%</td>
                    </tr>
                    <tr>
                        <td className="text-danger">Mahi Sai Srinivas Bobbili</td>
                        <td>100%</td>
                        <td>96.67%</td>
                        <td>98.37%</td>
                        <td>100%</td>
                    </tr>
                    <tr className={"table-secondary"}>
                        <td className="text-danger">Siran Cao</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100%</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}