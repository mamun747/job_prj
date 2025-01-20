import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import {
  Activities,
  Dot,
  Home,
  List,
  Notifications,
  Settings,
} from "../../Icons/Icon";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Dash2Data, tableData } from "../../data/data";
import CountUp from "react-countup";
import { BarChart } from "@mui/x-charts";
import Nav from "./Nav";

function Dashboard2({ toggleDrawer, handleDarkMode }) {
  const [chartWidth, setChartWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setChartWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const DataA = [18000, 22000, 20000, 28000, 23000, 15000];
  const DataB = [2000, 3500, 2500, 800, 4000, 1500];
  const xLabel = ["Linux", "Mac", "ios", "Windows", "Android", "Other"];
  const yLabel = ["US", "Canada", "Mexico", "China", "Japan", "Australia"];
  return (
    <>
      <div className="col-span-4 dark:bg-[#2a2a2a]">
        <Nav toggleDrawer={toggleDrawer} handleDarkMode={handleDarkMode} />
        <div className="p-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {Dash2Data.map((data) => (
              <div
                key={data.id}
                className={`p-4 lg:p-6 bg-gradient-to-t ${data.bg} rounded-3xl`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#ffffff]">{data.name}</p>
                  <img src={data.img} alt="" className="md:size-7 size-6" />
                </div>
                <div className="pt-2 flex items-center justify-between">
                  <h2 className="font-semibold text-lg md:text-[32px] text-white">
                    <CountUp start={0} end={data.count} duration={3.5} />
                  </h2>
                  <p className="text-sm md:text-lg font-normal text-white">
                    {data.rate}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white dark:bg-[#323232] p-4 md:p-6 rounded-3xl mt-4">
            <div className="pb-6 flex justify-between items-center">
              <div className="flex gap-3 md:gap-6">
                <h3 className="text-base md:text-lg font-semibold text-[#AF52DE]">
                  Users
                </h3>
                <h3 className="text-base md:text-lg font-semibold text-[#000]/40 dark:text-[#fff]/40">
                  Projects
                </h3>
                <h3 className="text-base md:text-lg font-semibold text-[#000]/40 dark:text-[#fff]/40">
                  Operating Status
                </h3>
              </div>
              <div className="hidden lg:flex items-center">
                <div>
                  <FormControl
                    sx={{ m: 1, minWidth: 120, border: "none" }}
                    size="small"
                    className="dark:bg-[#ffffff]/15 rounded-md"
                  >
                    <InputLabel
                      id="demo-select-small-label"
                      className="dark:text-white"
                    >
                      Week
                    </InputLabel>
                    <Select
                      className="border-none"
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="week"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Saturday</MenuItem>
                      <MenuItem value={20}>Sunday</MenuItem>
                      <MenuItem value={30}>Monday</MenuItem>
                      <MenuItem value={40}>Tuesday</MenuItem>
                      <MenuItem value={50}>Wednesday</MenuItem>
                      <MenuItem value={60}>Thursday</MenuItem>
                      <MenuItem value={70}>Friday</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <FormControl
                    sx={{ m: 1, minWidth: 120, border: "none" }}
                    size="small"
                    className="dark:bg-[#ffffff]/15 rounded-md"
                  >
                    <InputLabel id="demo-select-small-label">
                      <img src="/Icon.png" alt="" />
                    </InputLabel>
                    <Select
                      className="border-none"
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="icon"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Trend Up</MenuItem>
                      <MenuItem value={20}>Trend Down</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="p-2 bg-[#000000]/5 dark:bg-[#464646] rounded-xl cursor-pointer">
                  <Dot />
                </div>
              </div>
            </div>
            <img src="Chart.png" className="w-full" alt="" />
          </div>
          <div className="grid gap-4 mt-4 grid-cols-2">
            {/* Device Traffic Section */}
            <div className="col-span-2 md:col-span-1 bg-[#F9F9FA] dark:bg-[#FFFFFF]/5 rounded-2xl p-6 dark:text-[#FFFFFF] relative">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-sm md:text-lg text-[#007AFF] pb-4">
                  Device Traffic
                </h3>
                <div className="p-2 bg-[#000000]/5 dark:bg-[#464646] rounded-xl cursor-pointer">
                  <Dot />
                </div>
              </div>
              <div className="absolute top-44 right-1/2 transform translate-x-1/2 z-20 px-4 py-2 bg-gradient-to-t to-[#151515] from-[#343434] rounded-full">
                <h4 className="text-lg text-white">243K</h4>
              </div>
              <div className="w-full h-auto">
                <BarChart
                  width={500}
                  height={300}
                  borderRadius={8}
                  barWidth="2px"
                  series={[{ data: DataA, id: "pvId", stack: "total" }]}
                  xAxis={[{ data: xLabel, scaleType: "band" }]}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>

            {/* Location Traffic Section */}
            <div className="col-span-2 md:col-span-1 bg-[#F9F9FA] dark:bg-[#FFFFFF]/5 rounded-2xl p-6 dark:text-[#FFFFFF]">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-sm md:text-lg text-[#34C759] pb-4">
                  Location Traffic
                </h3>
                <div className="p-2 bg-[#000000]/5 dark:bg-[#464646] rounded-xl cursor-pointer">
                  <Dot />
                </div>
              </div>
              <div className="w-full h-auto">
                <BarChart
                  width={500}
                  height={300}
                  borderRadius={8}
                  barWidth="2px"
                  series={[{ data: DataB, id: "Id", stack: "total" }]}
                  xAxis={[{ data: yLabel, scaleType: "band" }]}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>

            {/* Product Traffic Section */}
            <div className="col-span-2 bg-white dark:bg-[#323232] mt-4 rounded-3xl">
              <div className="p-6">
                <div className="mb-6 flex flex-col md:flex-row md:justify-between">
                  <h4 className="text-lg font-semibold text-[#FF3B30]">
                    Product Traffic
                  </h4>
                  <div className="flex items-center gap-2">
                    <div className="px-2 py-[2px] flex gap-2 items-center">
                      <span className="h-2 w-2 rounded-full bg-[#000000]"></span>
                      <p className="text-xs md:text-sm dark:text-white">All</p>
                    </div>
                    <div className="px-2 py-[2px] flex gap-2 items-center">
                      <span className="h-2 w-2 rounded-full bg-[#000000]/40"></span>
                      <p className="text-xs md:text-sm dark:text-white">
                        SnowUI
                      </p>
                    </div>
                    <div className="px-2 py-[2px] flex gap-2 items-center">
                      <span className="h-2 w-2 rounded-full bg-[#FF3B30]"></span>
                      <p className="text-xs md:text-sm dark:text-white">
                        Dashboard
                      </p>
                    </div>
                    <div className="sm:p-2 bg-[#000000]/5 dark:bg-[#464646] rounded-xl cursor-pointer">
                      <Dot />
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <img
                    src="/Chart2.png"
                    className="w-full object-contain"
                    alt="Chart"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-2 bg-white dark:bg-[#323232] p-6 rounded-3xl">
              <div className="mb-6 flex items-center justify-between">
                <h4 className="text-lg font-semibold text-[#00C7BE]">
                  Projects
                </h4>
                <div className="p-2 bg-[#000000]/5 dark:bg-[#464646] rounded-xl cursor-pointer">
                  <Dot />
                </div>
              </div>
              <div className="w-full overflow-x-auto mb-4">
                <div className="hidden md:grid grid-cols-4 font-semibold text-[#000000]/40 dark:text-gray-300 p-4 rounded-t-lg text-xs">
                  <div>Manager</div>
                  <div>Date</div>
                  <div>Amount</div>
                  <div>Status</div>
                </div>
                {tableData.map((data) => (
                  <div
                    key={data.id}
                    className={`grid grid-cols-2 md:grid-cols-4 p-4 text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 ${
                      data.bg ? "bg-[#000000]/5 dark:bg-[#2a2a2a]" : ""
                    } rounded-2xl border-none `}
                  >
                    <div className="flex gap-1 items-center">
                      <div>
                        <List />
                      </div>
                      <div className="text-sm">{data.name}</div>
                    </div>
                    <div className="hidden md:block text-sm">{data.date}</div>
                    <div className="hidden md:block text-sm">{data.amount}</div>
                    <div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${data.statusBg}`}
                      >
                        {data.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <footer className="hidden md:block">
                <div className="flex items-center justify-between p-4">
                  <p className="text-xs text-[#000]/40 dark:text-[#fff]/40">
                    © 2024 SnowUI
                  </p>
                  <div className="flex gap-4 items-center">
                    <p className="text-xs text-[#000]/40 dark:text-[#fff]/40">
                      About
                    </p>
                    <p className="text-xs text-[#000]/40 dark:text-[#fff]/40">
                      Support
                    </p>
                    <p className="text-xs text-[#000]/40 dark:text-[#fff]/40">
                      Contact Us
                    </p>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
      <div className="dark:bg-[#2a2a2a] sm:hidden p-4 flex justify-center">
        <div className="p-4 flex gap-[23.25px] items-center">
          <button>
            <Link to="/">
              <Home />
            </Link>
          </button>
          <button>
            <Activities />
          </button>
          <button>
            <Notifications />
          </button>
          <button>
            <Settings />
          </button>
          <button>
            <img className="size-7" src="/Profile.png" alt="" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Dashboard2;
