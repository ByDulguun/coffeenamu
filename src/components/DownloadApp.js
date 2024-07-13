export const DownloadApp = () => {
  return (
    <div className="relative -z-10">
      <div className="mx-5 my-10 md:flex gap-20  ">
        <img src="/DownloadAppImg.jpg" />
        <div className="md:my-24   ">
          <h1 className="text-[#AA714A] text-center md:text-start md:text-3xl font-bold my-6">
            Үнэгүй кофе авахад <br /> илүү амар боллоо.
          </h1>
          <p className="text-center md:text-start md:text-xl my-8">
            <strong>Coffee namu app </strong>-Урамшууллын апп <br />
            татаж аваад, дуртай зүйлээ хаанаас
            <br /> ч, хэзээ ч хамаагүй захиалаарай.
          </p>  
          <button className=" w-full h-fit mx-0 flex justify-center mt-4 md:justify-start ">
            <p className="px-4 py-1 text-[#AA714A]  w-fit rounded-md border-2 border-[#AA714A]">
              Апп татах
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
