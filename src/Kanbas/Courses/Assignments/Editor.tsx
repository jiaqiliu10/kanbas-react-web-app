export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className={"container"}>
            <div className={"mb-3 "}>
                <label htmlFor="wd-name">Assignment Name</label> <br/>
                <input id="wd-name" value="A1" style={{width: "100%"}}/>
            </div>
            <div id="wd-description" className="mb-3 form-control" contentEditable="true"
                 style={{width: "100%", height: "300px", overflow: "auto"}}>
                The assignment is
                <span className="text-danger ms-2">available online</span><br/><br/>
                Submit a link to the landing page of your web application running on Netlify.<br/><br/>

                The landing page should include the following: <br/><br/>
                <ul>
                    <li>
                        Your full name and section
                    </li>
                    <li>
                        Links to the Kanbas application
                    </li>
                    <li>
                        Links to Kanbas appilcation
                    </li>
                    <li>
                        links to all relevant source code repositories
                    </li>
                </ul>
                The Kanbas application should include a linke to navigate back to the landing page
            </div>


            <div className="mb-3 row">
                <label htmlFor="wd-points" className="col-sm-3 col-form-label">Points</label>
                <div className="col-sm-9">
                    <input id="wd-points" placeholder="100" className="form-control"/>
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
                <div className="col-sm-9" style={{border: '2px groove #d3d3d3', padding: "20px", borderRadius: "8px"}}>
                    <select id="wd-submission-type" className="form-select">
                        <option value="Online">Online</option>
                        <option value="Offline">Offline</option>
                    </select>
                    <div className="mt-3">
                        <div className="mb-2"><strong>Online Entry Options:</strong></div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" name="submissionType" id="text-entry"/>
                            <label htmlFor="text-entry" className="form-check-label">Text Entry</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" name="submissionType" id="website-url"/>
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
                            <label htmlFor="student-annotation" className="form-check-label">Student Annotation</label>
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
                <div className="col-sm-9" style={{border: '2px groove #d3d3d3', padding: "20px", borderRadius: "8px"}}>

                    <div className="mb-3 row">
                        <label htmlFor="wd-assigned-to" className="col-sm-3 col-form-label">Assigned To</label>
                        <div className="col-sm-9">
                            <input id="wd-assigned-to" value="everyone" className="form-control"/>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="wd-due-date" className="col-sm-3 col-form-label">Due Date</label>
                        <div className="col-sm-9">
                            <input id="wd-due-date" value="2021-09-05" className="form-control"/>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <div className="col-sm-6">
                            <label htmlFor="wd-available-from" className="col-form-label">Available From</label>
                            <input type="date" id="wd-available-from" value="2024-05-06" className="form-control"/>
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="wd-available-to" className="col-form-label">Until</label>
                            <input type="date" id="wd-available-to" value="2024-05-20" className="form-control"/>
                        </div>
                    </div>
                </div>
            </div>

            <hr className={"mt-5 mb-1"}/>

            <div className="d-flex justify-content-end mt-3">
                <button type="button" className="btn btn-secondary me-3">Cancel</button>
                <button type="button" className="btn btn-danger">Save</button>
            </div>
        </div>
    );
}