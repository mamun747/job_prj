import { Breadcrumbs, IconButton, Tooltip } from "@mui/material";
import { Activities, Bar, Favourites, Notifications, Sun } from "../../Icons/Icon";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Nav({toggleDrawer, handleDarkMode}) {
    const [notClose, setNotClose] = useState(false);
    const handleMenuBar = () => {
        setNotClose((prev) => !prev);
      };
      const { width } = useWindowSize();
      function useWindowSize() {
        const [size, setSize] = useState({ width: window.innerWidth });
    
        useEffect(() => {
          const handleResize = () => setSize({ width: window.innerWidth });
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
        }, []);
    
        return size;
      }
  return (
    <>
      <nav className="py-5 px-2 md:px-7 border-b dark:border-b-[#FFFFFF]/15 flex justify-between items-center">
        <div className="md:hidden">
          <button onClick={handleMenuBar}>
            <img src="/menus.png" className="w-7 h-7" alt="Menu" />
          </button>
        </div>
        <div className="flex gap-2 items-center">
          <div className="hidden md:flex">
            <button disabled={width > 1024} onClick={toggleDrawer(true)}>
              <Tooltip title="Sidebar">
                <IconButton>
                  <Bar />
                </IconButton>
              </Tooltip>
            </button>
            <Tooltip title="Favourites">
              <IconButton>
                <Favourites />
              </IconButton>
            </Tooltip>
          </div>
          <div className="hidden sm:block">
            <Breadcrumbs aria-label="breadcrumb" dev>
              <Link
                underline="none"
                color="inherit"
                href="/"
                className="hover:bg-slate-100 px-2 py-1 rounded-lg transition-all text-black font-medium dark:text-[#ffffff]/40"
              >
                Dashboards
              </Link>
              <Link
                underline="none"
                color="inherit"
                href="/"
                className="hover:bg-slate-100 md:px-2 md:py-1 rounded-lg transition-all text-black dark:text-[#ffffff] font-medium"
              >
                Overview
              </Link>
            </Breadcrumbs>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="relative py-1 ps-2">
            <input
              type="text"
              className="w-[160px] h-7 flex-1 rounded-lg bg-[#000000]/5 dark:bg-[#ffffff]/10 py-1 ps-8 overflow-hidden pe-9"
              placeholder="Search"
            />
            <img
              src="/Search.png"
              className="absolute top-[11px] left-4"
              alt="Search"
            />
            <img
              src="/Text.png"
              className="absolute top-[9px] right-2"
              alt="Text"
            />
          </div>
          <div className="hidden md:flex items-center">
            <Tooltip title="Toggle theme">
              <IconButton>
                <button onClick={handleDarkMode} id="switch">
                  <Sun />
                </button>
              </IconButton>
            </Tooltip>

            <Tooltip title="Activities">
              <IconButton>
                <Activities />
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
              <IconButton>
                <Notifications />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </nav>
      {notClose && (
        <div className="flex flex-col gap-2 items-start bg-slate-200 dark:bg-[#ffffff]/35 rounded-br-3xl absolute top-[77px] left-0 h-[236px] w-12 shadow-lg md:hidden">
          {/* Mobile Sidebar Items */}
          <Tooltip title="Sidebar">
            <IconButton>
              <button disabled={width > 1024} onClick={toggleDrawer(true)}>
                <Bar />
              </button>
            </IconButton>
          </Tooltip>
          <Tooltip title="Favourites">
            <IconButton>
              <Favourites />
            </IconButton>
          </Tooltip>
          <Tooltip title="Toggle theme">
            <IconButton>
              <button onClick={handleDarkMode}>
                <Sun />
              </button>
            </IconButton>
          </Tooltip>
          <Tooltip title="Activities">
            <IconButton>
              <Activities />
            </IconButton>
          </Tooltip>
          <Tooltip title="Notifications">
            <IconButton>
              <Notifications />
            </IconButton>
          </Tooltip>
        </div>
      )}
    </>
  );
}

export default Nav;
