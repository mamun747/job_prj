function Notifications({children, subtitle, url}) {
  return (
    <div className='flex gap-1 flex-col hover:bg-slate-100 dark:hover:text-black rounded-lg hover:scale-105 transition-all group'>
              <div className='flex items-start gap-2 p-2 cursor-pointer'>
                <img src={url} alt="" />
                <div>
                  <h5 className='font-normal text-sm'>{children}</h5>
                  <p className='text-xs font-normal text-[#000000]/40 dark:text-[#ffffff]/40 dark:group-hover:text-black'>{subtitle}</p>
                </div>
              </div>
            </div>
  )
}

export default Notifications