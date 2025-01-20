import { Drawer } from "@mui/material"
import Rightbar from "../Rightbar"
import Dashboard1 from "./Dashboard1"
import Sidebar from "../Sidebar"
import { useState } from "react";

function Index() {
    const [open, setOpen] = useState(false);
  const [on, setOn] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const toggleRightbar = (newOpen) => () => {
    setOn(newOpen);
  };
  return (
    <>
    <section className="grid grid-cols-6">
        <div className="xl:col-span-1 relative">
          {/* Sidebar */}
          <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
            <Sidebar />
          </Drawer>
          <div className="hidden lg:block h-full">
            <Sidebar />
          </div>
        </div>
        {/* Main Content */}
        <Dashboard1 toggleDrawer={toggleDrawer} toggleRightbar={toggleRightbar}/>
        {/* Rightbar */}
        <Drawer anchor="right" open={on} onClose={toggleRightbar(false)}>
          <Rightbar />
        </Drawer>
        <div className="hidden xl:block h-full">
          <Rightbar />
        </div>
      </section>
    </>
  )
}

export default Index