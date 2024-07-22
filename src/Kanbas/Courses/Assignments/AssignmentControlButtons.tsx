import React from 'react';
import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {FaPencil} from "react-icons/fa6";

export default function AssignmentControlButtons({ assignId, deleteAssignment, courseId }:
{ assignId: string; deleteAssignment: (assignId: string) => any; courseId: any }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDeleteClick = () => {
        const isConfirmed = window.confirm("Are you sure you want to delete this assignment?");
        if (isConfirmed) {
            dispatch(deleteAssignment(assignId));
        }
    };

    return (
        <div className="float-end">
            <FaPencil onClick={() => { navigate(`${assignId}`); }} className="text-primary me-3" />
            <FaTrash className="text-danger me-2 mb-1" onClick={handleDeleteClick} />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}