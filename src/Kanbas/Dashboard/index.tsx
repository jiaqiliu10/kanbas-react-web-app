export default function Dashboard() {
    return (
        <div>
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course col" style={{ width: "300px", height: "300px"}}>
                        <div className="card">
                            <img src="images/reactjs.jpg" alt="shinchan1" height="200px" />
                            <div className="card-body" style={{height:220}}>
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5001
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Intensive Foundations of Computer Science<br />
                                    CRN: 20425<br />
                                    Year: Fall 2023<br />
                                </p>
                                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card" >
                            <img src="images/course2.jpg" alt="shinchan2" height="200px"/>
                            <div className="card-body" style={{height:220}}>
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5002
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Discrete Structures <br/>
                                    CRN: 20428<br/>
                                    Year: Fall 2023<br/>
                                </p>
                                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <img src="images/course3.jpg" alt="shinchan3" height="200px" />
                            <div className="card-body" style={{height:220}}>
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5004
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Object Oriented Design<br/>
                                    CRN: 202430<br/>
                                    Year: Spring 2024<br/>
                                </p>
                                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card" >
                            <img src="images/course4.jpg" alt="shinchan4" height="200px"/>
                            <div className="card-body" style={{height:220}}>
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5200
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Database Management<br/>
                                    CRN: 40916<br/>
                                    Year: Summer 1 2024<br/>
                                </p>
                                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <img src="images/course5.jpg" alt="shinchan5" height="200px"   />
                            <div className="card-body" style={{height:220}}>
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5610
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Web Development<br/>
                                    CRN: 61065<br/>
                                    Year: Summer 2 2024<br/>
                                </p>
                                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px"}} >
                        <div className="card">
                            <img src="images/course6.jpg" alt="shinchan6" height="200px" />
                            <div className="card-body" style={{height:220}}>
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5800
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Algorithms<br/>
                                    CRN: 52873<br/>
                                    Year: Summer Full 2024<br/>
                                </p>
                                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <img src="images/course7.jpg" alt="shinchan7" height="200px" />
                            <div className="card-body" style={{height:220}}>
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5520
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Mobile Application<br/>
                                    CRN: 51354<br/>
                                    Year: Summer Full 2024<br/>
                                </p>
                                <a href="#/Kanbas/Courses/Home" className="btn btn-primary" > Go </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}