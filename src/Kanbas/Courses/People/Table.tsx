import React, { useState, useEffect } from "react";
import * as client from "./client";
import Details from "./Details";
import { FaPlus } from "react-icons/fa6";

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  loginId?: string;
  section?: string;
  role?: string;
  lastActivity?: string;
  totalActivity?: string;
}

export default function PeopleTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const createUser = async () => {
    const user = await client.createUser({
      firstName: "New",
      lastName: `User${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      section: "S101",
      role: "STUDENT",
    });
    fetchUsers(); // 创建用户后重新获取数据
  };

  const filterUsersByName = async (name: string) => {
    setName(name);
    if (name) {
      const users = await client.findUsersByPartialName(name);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

  const filterUsersByRole = async (role: string) => {
    setRole(role);
    if (role) {
      const users = await client.findUsersByRole(role);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

  const fetchUsers = async () => {
    const users: User[] = await client.findAllUsers();
    console.log("Fetched users:", users); // 调试信息
    setUsers(users.filter(user => user && user.firstName && user.lastName && user.username && user.password));
  };

  const handleNameClick = (id: string) => {
    setSelectedUserId(id);
  };

  const handleCloseDetails = () => {
    setSelectedUserId(null);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div id="wd-people-table">
      <button onClick={createUser} className="float-end btn btn-danger wd-add-people">
        <FaPlus className="me-2" />
        People
      </button>
      <input onChange={(e) => filterUsersByName(e.target.value)} placeholder="Search people"
        className="form-control float-start w-25 me-2 wd-filter-by-name" />
      <select value={role} onChange={(e) => filterUsersByRole(e.target.value)}
        className="form-select float-start w-25 wd-select-role">
        <option value="">All Roles</option>
        <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option>
        <option value="FACULTY">Faculty</option>
      </select>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>UserName & password</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <span onClick={() => handleNameClick(user._id)} style={{ cursor: "pointer", color: "red" }}>
                  <span className="wd-first-name">{user.firstName}</span>
                  <span> </span>
                  <span className="wd-last-name">{user.lastName}</span>
                </span>
              </td>
              <td className="wd-username" style={{ color: "green", width: "15%" }}>{user.username} | {user.password}</td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUserId && (
        <Details
          fetchUsers={fetchUsers}
          uid={selectedUserId}
          onClose={handleCloseDetails}
        />
      )}
    </div>
  );
}

