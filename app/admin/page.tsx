import AdminHome from "./components/AdminHome";
import Sidebar from "./components/Sidebar";



const Admin = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div
        className="h-screen flex-1 pt-0 pl-0 bg-black"
       
      >
        <AdminHome/>
      </div>
    </div>
  );
};

export default Admin;
