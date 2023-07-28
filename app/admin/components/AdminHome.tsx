"use client";

import { openSans } from "@/app/layout";

import Row from "./Row";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const AdminHome = () => {
  const [keyword, setKeyword] = useState("");
  const [emails, setEmails] = useState([]);

  const handleDelete = useCallback(
    (userInfo: { id: string; email: string; createdAt?: string }) => {
      console.log(userInfo.id);

      axios
        .delete(`/api/waitlistEmail/${userInfo.id}`)
        .then(() => toast.success("Deleted"))
        .then(() => fetchEmails())
        .catch(() => toast.error("Went wrong in delete"));
    },
    []
  );
  const fetchEmails = () => {
    axios
      .get("/api/waitlistEmail")
      .then((data) => {
        //console.log("Data-->", data.data);
        setEmails(data.data);
        //toast.success("Data fetched");
      })
      .catch((error) => toast.error("Unable to fetch data."));
  };
  useEffect(() => {
    fetchEmails();
  }, []);

  //console.log("Emails-->", emails);

  return (
    <div>
      <div
        className={`flex items-center font-medium px-6 py-4 justify-between ${openSans.className}`}
      >
        <div className="my-6 w-1/2 m-auto">
          <input
            type="text"
            className="bg-transparent border-gradient p-3 outline-none md:text-sm w-full"
            placeholder="Search email"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
      </div>
      <div
        className={`overflow-x-scroll md:overflow-auto  border-gradient rounded-xl  shadow m-5 ${openSans.className}`}
      >
        <table className="w-full border-collapse  text-left text-sm text-slate-500">
          <thead className=" border-b">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium ">
                Id
              </th>
              <th scope="col" className="px-6 py-4 font-medium ">
                Email
              </th>
              <th scope="col" className="px-6 py-4 font-medium ">
                Date
              </th>

              <th
                scope="col"
                className="px-6 py-4 font-medium text-gray-900"
              ></th>
            </tr>
          </thead>
          <tbody className=" ">
            {/*Table row */}
            {emails.map((userInfo: any) => (
              <Row
                key={userInfo.id}
                data={userInfo}
                onClick={() => handleDelete(userInfo)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminHome;
