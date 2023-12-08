function Heading({ title, intro }) {
  return (
    <div className="flex flex-col items-center gap-2 py-14">
      <h1 className="text-[3rem] font-semibold p-0 tracking-wider">{title}</h1>
      <div className="h-2 w-6 bg-[#3923eb]"></div>
      <p className="text-center text-[13px] tracking-wider md:text-[16px]">{intro}</p>
    </div>
  );
}
export default Heading;
