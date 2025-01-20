import { useState } from "react"
const arr = ["Overview", "Projects", "Campaigns", "Documents", "Followers"];
function Collapsible({children, url, isOpen}) {
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(isOpen);
    }
  return (
    <>
    <div className="mt-1 flex items-center ps-2 gap-1 cursor-pointer py-2 group hover:bg-slate-100 rounded-lg group" onClick={handleToggle}>
        <img src="/Icon1.png" alt="" />
        <div className="flex items-center gap-2">
            {url}
        <p className="text-sm font-[400] group-hover:translate-x-1 transition-all dark:group-hover:text-black">{children}</p>
        </div>
    </div>
        {
            open && (
                <ul className="ps-7">
                    {
                        arr.map((value, i) => (
                            <li key={i} className="ps-7 py-2 px-2 cursor-pointer text-sm font-normal">{value}</li>
                        ))
                    }
                </ul>
            )
        }
    </>
  )
}

export default Collapsible