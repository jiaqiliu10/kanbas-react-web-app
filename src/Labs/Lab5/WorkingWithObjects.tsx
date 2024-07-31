import React, {useState} from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [module, setModule] = useState({
        id: 2, name: "nicenice", description: "This is a happy place", course: "CS5333"
    })

    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}`
    return (
        <div id="wd-working-with-objects">
            <div id={"my-own-module"} className={"text-danger"}>
                <h3> On My Own</h3>
                <input className={"form-control w-75"}
                       value={module.name} onChange={(e) => setModule({...module, name: e.target.value})}/>
                <a id={"module-button"}
                   className={"btn btn-primary float-end"}
                   href={`
                   ${ASSIGNMENT_API_URL}/lab5/module/${module.name}`}> update module name</a>
            </div>
            <h3>Working With Objects</h3>
            <h4>Modifying Properties</h4>

            <input className="form-control w-75" id="wd-assignment-title"
                   value={assignment.title} onChange={(e) =>
                setAssignment({...assignment, title: e.target.value})}/>
            <a id="wd-update-assignment-title"
               className="btn btn-primary float-end"
               href={`${ASSIGNMENT_API_URL}/lab5/assignment/title/${assignment.title}`}>
                Update Title
            </a>
            <hr/>
            <br/>
            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary"
               href={`${REMOTE_SERVER}/lab5/assignment`}>
                Get Assignment
            </a>
            <hr/>
            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary"
               href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                Get Title
            </a>
            <hr/>
            <h4>Revise score</h4>
            <input className="form-control w-75" id="wd-assignment-score"
                     value={assignment.score} onChange={(e) =>
                 setAssignment({...assignment, score: Number(e.target.value)})}/>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary"
               href={`${REMOTE_SERVER}/lab5/assignment/score/${assignment.score}`}>
                Update Score
            </a>
            <hr/>
            <h4>Revise completed</h4><br/>
            <a id={"wd-assignment-completed-label"}
                className={"btn btn-primary"}
            href={`${REMOTE_SERVER}/lab5/assignment/completed/${assignment.completed}`}>Check if Completed: </a>
            <br/>
            <input className={"form-check"} type={"checkbox"} id={"wd-assignment-completed"}
                   style={{width: "40px", height: "40px"}}
                     checked={assignment.completed} onChange={(e) => setAssignment({...assignment, completed: e.target.checked})}/>

        </div>
    );
}
