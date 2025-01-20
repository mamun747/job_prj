import { chartData, data, trafficWebsite } from "../../data/data";
import CountUp from "react-countup";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart, PieChart } from "@mui/x-charts";
import {
  Activities,
  Bar,
  Favourites,
  Notifications,
  Sun,
} from "../../Icons/Icon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useEffect, useState } from "react";

function Dashboard1({ toggleDrawer, toggleRightbar }) {
  function useWindowSize() {
    const [size, setSize] = useState({ width: window.innerWidth });

    useEffect(() => {
      const handleResize = () => setSize({ width: window.innerWidth });
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return size;
  }
  const [notClose, setNotClose] = useState(false);
  const { width } = useWindowSize();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleMenuBar = () => {
    setNotClose((prev) => !prev);
  };
  const uData = [2000, 12300, 16000, 5000, 3100, 30000, 34000];
  const pData = [8000, 10000, 15000, 22000, 3000, 28300, 27000];
  const xLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

  const DataA = [18000, 29000, 20000, 35000, 11000, 25000];
  const xLabel = ["Linux", "Mac", "ios", "Windows", "Android", "Other"];

  const handleDarkMode = () => {
    const tag = document.querySelector("#htmlTag");
    tag.classList.toggle("dark");
  };
  return (
    <>
      <div className="col-span-6 lg:col-span-5 xl:col-span-4 dark:bg-[#ffffff]/15">
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
                  Default
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
              <button onClick={toggleRightbar(true)} disabled={width > 1024}>
                <Tooltip title="Rightbar">
                  <IconButton>
                    <Bar />
                  </IconButton>
                </Tooltip>
              </button>
            </div>
          </div>
        </nav>
        {notClose && (
          <div className="flex flex-col gap-2 items-start bg-slate-200 dark:bg-[#ffffff]/35 rounded-br-3xl absolute top-[77px] left-0 h-[296px] w-12 shadow-lg md:hidden">
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
            <button onClick={toggleRightbar(true)} disabled={width > 1024}>
              <Tooltip title="Rightbar">
                <IconButton>
                  <Bar />
                </IconButton>
              </Tooltip>
            </button>
          </div>
        )}
        <div className="px-7 pt-7">
          <p className="font-semibold text-sm px-2 py-1 dark:text-[#ffffff]">
            Overview
          </p>
          <div className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 xl:gap-7">
              {data.map((item) => (
                <div key={item.id} className={`p-6 ${item.bg} rounded-xl`}>
                  <h6 className="text-sm font-normal pb-2">{item.title}</h6>
                  <div className="flex items-center lg:gap-1 xl:gap-4">
                    <h2 className="text-3xl font-semibold">
                      <CountUp start={0} end={item.count} duration={3.5} />
                    </h2>
                    <div className="flex gap-2 items-center">
                      <p className="text-sm font-normal">{item.subCount}</p>
                      <img src={item.img} alt={item.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 2xl:grid-cols-4 gap-7">
            <div className="mt-7 rounded-2xl bg-[#F9F9FA] dark:bg-[#FFFFFF]/5 dark:text-white xl:w-[912px] p-6 col-span-3">
              <div className="flex flex-wrap gap-2 md:gap-4">
                <h3 className="text-sm font-semibold">Total Users</h3>
                <h3 className="text-sm font-normal text-[#000000]/40 dark:text-[#ffffff]/40">
                  Total Projects
                </h3>
                <h3 className="text-sm font-normal text-[#000000]/40 dark:text-[#ffffff]/40">
                  Operating Status
                </h3>
                <h3 className="text-sm font-normal text-[#000000]/40"></h3>
                <img src="/Devider.png" alt="" />
                <div className="flex gap-[5px] items-center">
                  <span className="size-[6px] rounded-full bg-black"></span>
                  <p className="text-xs font-normal">This Year</p>
                </div>
                <div className="flex gap-[5px] items-center">
                  <span className="size-[6px] rounded-full bg-[#AEC7ED]"></span>
                  <p className="text-xs font-normal">Last Year</p>
                </div>
              </div>
              <div className="w-full max-w-[912px] h-auto">
              <LineChart
                    width={912}
                    height={330}
                    series={[{ data: pData }, { data: uData }]}
                    xAxis={[{ scaleType: "point", data: xLabels }]}
                    style={{ width: "100%", height: "auto" }}
                  />
              </div>
            </div>
            <div className="col-span-1 bg-[#F9F9FA] dark:bg-[#ffffff]/5 dark:text-[#ffffff] mt-7 rounded-2xl p-6">
              <h3 className="text-sm font-semibold pb-4">Traffic by Website</h3>
              <div className="py-2 flex items-center gap-4">
                <div className="grid grid-cols-2 gap-4 items-center">
                  {trafficWebsite.map((item) => (
                    // <div className="grid grid-cols-2 gap-10" key={item.id}>
                    <>
                      <h5>{item.name}</h5>
                      <img src={item.img} alt="" />
                    </>
                    // </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-7 mt-7">
            {/* Traffic by Device */}
            <div className="col-span-1 bg-[#F9F9FA] dark:bg-[#FFFFFF]/5 rounded-2xl p-6 dark:text-[#FFFFFF]">
              <h3 className="font-semibold text-sm pb-4">Traffic by Device</h3>
              <div className="w-full h-auto">
                <BarChart
                  width={500}
                  height={300}
                  borderRadius={8}
                  barWidth="2px"
                  series={[
                    { data: DataA, id: "pvId", stack: "total" },
                    // { data: DataB, id: "uvId", stack: "total" },
                  ]}
                  xAxis={[{ data: xLabel, scaleType: "band" }]}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>

            {/* Traffic by Location */}
            <div className="col-span-1 dark:bg-[#FFFFFF]/5 dark:text-white bg-[#F9F9FA] rounded-2xl p-6">
              <h3 className="font-semibold text-sm mb-4">
                Traffic by Location
              </h3>
              <div className="flex flex-col xl:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <PieChart
                    series={[
                      {
                        data: [
                          { id: 0, value: 52.1 },
                          { id: 1, value: 22.8 },
                          { id: 2, value: 13.9 },
                          { id: 3, value: 11.2 },
                        ],
                      },
                    ]}
                    colors={["#9F9FF8", "#92BFFF", "#94E9B8", "#92BFFF"]}
                    width={280}
                    height={200}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="flex flex-col gap-4 w-full">
                  {chartData.map((data) => (
                    <div
                      key={data.id}
                      className="flex justify-between items-center text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-[6px] h-[6px] rounded-full ${data.bg}`}
                        ></span>
                        <p className="font-normal">{data.name}</p>
                      </div>
                      <p className="font-normal">{data.rate}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard1;
