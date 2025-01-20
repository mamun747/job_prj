import { Drawer } from "@mui/material";
import Dash2Sidebar from "./Dash2Sidebar";
import { useEffect, useState } from "react";
import Dashboard2 from "./Dashboard2";

function Index2() {
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
      document.querySelector("#htmlTag").classList.add("dark");
    }
  }, []);
  const [open, setOpen] = useState(false);
  const [on, setOn] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const handleDarkMode = () => {
    const tag = document.querySelector("#htmlTag");
    tag.classList.toggle("dark");
  };

  const toggleRightbar = (newOpen) => () => {
    setOn(newOpen);
  };
  return (
    <>
      <section className="grid grid-cols-5 bg-[#F5F5F6]">
        <div className="lg:col-span-1 relative h-full">
          {/* Sidebar */}
          <Drawer
            className="h-full"
            anchor="left"
            open={open}
            onClose={toggleDrawer(false)}
          >
            <Dash2Sidebar />
          </Drawer>
          <div className="hidden lg:block h-full">
            <Dash2Sidebar />
          </div>
        </div>
        {/* main area */}
        <div className="col-span-5 lg:col-span-4">
          <Dashboard2
            toggleDrawer={toggleDrawer}
            handleDarkMode={handleDarkMode}
            toggleRightbar={toggleRightbar}
          />
        </div>
      </section>
    </>
  );
}

export default Index2;
