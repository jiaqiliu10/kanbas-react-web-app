import React from "react";
import {useParams, useLocation} from "react-router";
import {assignment_details} from "../../Database";
import { useNavigate } from 'react-router-dom';

export default function AssignmentEditor() {
    const {aid} = useParams()
    const {pathname} = useLocation()
    const details = assignment_details.find((detail) => detail._id === aid)
    const descriptionHTML = details && details.description || "";
    const points =  details && details.points
    const dueDate = details && details.due
    const available = details && details.availableDate
    const navigate = useNavigate();

    return (
        <div id="wd-assignments-editor" className={"container"}>
            <div className={"mb-3 "}>
                <label htmlFor="wd-name">Assignment Name</label> <br/>
                <input id="wd-name" value={details?.title || ""} style={{width: "100%"}} readOnly/>
                <div id="wd-description" className="form-control mb-5 mt-3"
                     style={{width: "100%", height: "300px", overflow: "auto"}}
                     dangerouslySetInnerHTML={{__html: descriptionHTML}}>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="wd-points" className="col-sm-3 col-form-label">Points</label>
                    <div className="col-sm-9">
                        <input id="wd-points" placeholder={`${points}`} className="form-control"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="wd-group" className="col-sm-3 col-form-label">Assignment Group</label>
                    <div className="col-sm-9">
                        <select id="wd-group" className="form-select">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PROJECT">PROJECT</option>
                        </select>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="wd-display-grade-as" className="col-sm-3 col-form-label">Display Grade as</label>
                    <div className="col-sm-9">
                        <select id="wd-display-grade-as" className="form-select">
                            <option value="Percentage">Percentage</option>
                            <option value="Decimal">Decimal</option>
                        </select>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="wd-submission-type" className="col-sm-3 col-form-label">Submission Type</label>
                    <div className="col-sm-9"
                         style={{border: '2px groove #d3d3d3', padding: "20px", borderRadius: "8px"}}>
                        <select id="wd-submission-type" className="form-select">
                            <option value="Online">Online</option>
                            <option value="Offline">Offline</option>
                        </select>
                        <div className="mt-3">
                            <div className="mb-2"><strong>Online Entry Options:</strong></div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" name="submissionType"
                                       id="text-entry"/>
                                <label htmlFor="text-entry" className="form-check-label">Text Entry</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" name="submissionType"
                                       id="website-url"/>
                                <label htmlFor="website-url" className="form-check-label">Website URL</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" name="submissionType"
                                       id="media-recordings"/>
                                <label htmlFor="media-recordings" className="form-check-label">Media Recordings</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" name="submissionType"
                                       id="student-annotation"/>
                                <label htmlFor="student-annotation" className="form-check-label">Student
                                    Annotation</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" name="submissionType"
                                       id="file-uploads"/>
                                <label htmlFor="file-uploads" className="form-check-label">File Uploads</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label className={"col-sm-3 form-label"}> Assign</label>
                    <div className="col-sm-9"
                         style={{border: '2px groove #d3d3d3', padding: "20px", borderRadius: "8px"}}>

                        <div className="mb-3 row">
                            <label htmlFor="wd-assigned-to" className="col-sm-3 col-form-label">Assigned To</label>
                            <div className="col-sm-9">
                                <input id="wd-assigned-to" value="everyone" className="form-control"/>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="wd-due-date" className="col-sm-3 col-form-label">Due Date</label>
                            <div className="col-sm-9">
                                <input id="wd-due-date" value={`${dueDate}`} className="form-control"/>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <div className="col-sm-6">
                                <label htmlFor="wd-available-from" className="col-form-label">Available From</label>
                                <input id="wd-available-from" value={`${available}`} className="form-control"/>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="wd-available-to" className="col-form-label">Until</label>
                                <input id="wd-available-to" value={`${dueDate}`} className="form-control"/>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className={"mt-5 mb-1"}/>

                <div className="d-flex justify-content-end mt-3">
                    <button type="button" className="btn btn-secondary me-3" onClick={() => navigate(-1)}>Cancel
                    </button>
                    <button type="button" className="btn btn-danger" onClick={() => navigate(-1)}>Save</button>
                </div>
            </div>
        </div>
    );
}