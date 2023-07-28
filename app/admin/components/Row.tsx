import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { EmailList } from "@/app/types";
import axios from "axios";
import { toast } from "react-hot-toast";
import moment from "moment";

interface RowProps {
  data: EmailList;
  onClick?: () => void;
  setModalVisible?:(value: boolean ) => void;
}

const Modal = ({ data,setModalVisible }: RowProps) => {
  const [newEmail, setEmail] = useState(data.email);

  const handleEditSubmit = () => {
    console.log(data.email, newEmail);
    const loaderID = toast.loading("Updating...")
    axios
      .put(`/api/waitlistEmail/${data.id}`, { email: newEmail })
      .then(() => {
        toast.success("Updated")
        //setModalVisible(false)
        toast.dismiss(loaderID)
      })
      .catch(() => toast.error("Something went wrong."));
  };

  const handleClose = () => {
    //setModalVisible(false)
  }

  return (
    <div>
      <div
        className="py-12 bg-transparent transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
        id="modal"
      >
        <div
          role="alert"
          className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
        >
          <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
            <label
              htmlFor="name"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Email address
            </label>
            <input
              id="name"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder={data.email}
              value={newEmail}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="flex items-center justify-start w-full">
              <button
                onClick={handleEditSubmit}
                className="focus:outline-none transition duration-150 ease-in-out  bg-black rounded text-white px-8 py-2 text-sm"
              >
                Submit
              </button>
              <button  onClick={handleClose} className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm">
                Cancel
              </button>
            </div>
            <div onClick={handleClose} className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Close"
                className="icon icon-tabler icon-tabler-x"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={18} y1={6} x2={6} y2={18} />
                <line x1={6} y1={6} x2={18} y2={18} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Row = ({ data, onClick }: RowProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { id, email, createdAt } = data;

  //console.log(typeof(id),id);

  return (
    <>
      <tr
        className="hover:bg-gray-800 text-slate-300 hover:text-white"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => {
          setIsVisible(false);
        }}
      >
        <td className="px-6 py-4">{id}</td>
        <td className="px-6 py-4">{email}</td>
        <td className="px-6 py-4">
          <div className="flex gap-2">
            <span className="inline-flex items-center gap-1 rounded  px-2 py-1 text-xs font-semibold ">
              {moment(createdAt).format("MMM Do YYYY")}
            </span>
          </div>
        </td>

        <td className="px-6 py-4">
          <div
            className={`flex justify-end relative gap-4 ${
              isVisible ? "visible" : "invisible"
            }`}
          >
            <div>
              <BiEdit
                className="h-5 w-5 cursor-pointer"
                onClick={() => setModalVisible(true)}
              />
            </div>

            <p>
              <MdDelete className="h-5 w-5 cursor-pointer" onClick={onClick} />
            </p>
          </div>
        </td>
      </tr>
      {modalVisible && <Modal data={data} setModalVisible={setModalVisible} />}
    </>
  );
};

export default Row;
