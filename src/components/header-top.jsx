import Image from "next/image"

function HeaderTop() {
  return (
    <div className="bg-[#0A131D] py-[18px] px-5 md:px-10">
        <div className="max-w-[1240px] mx-auto flex justify-between items-center text-[#BCB6B6]">
            <div className="flex md:flex-row flex-col items-center gap-1 md:gap-8">
                <select name="lang" id="lang" className="outline-none font-[500] text-[16px] leading-[126%]">
                  <option value="Русский">Русский</option>
                  <option value="узбекский">узбекский</option>
                </select>
                <select name="capital" id="capital" className="outline-none font-[500] text-[16px] leading-[126%]">
                  <option value="UZS" className="">UZS</option>
                  <option value="USD">USD</option>
                  <option value="RUB">RUB</option>
                </select>
            </div>
            <div className="flex flex-col md:flex-row gap-1 items-center md:gap-8">
              <div className="flex items-center gap-[6px]">
                <Image src={'/main/papka.svg'} alt="papka" width={18} height={16}/>
                <p className="font-[500] text-[16px] leading-[126%]">Зарегистрировать свой объект</p>
              </div>
              <p  className="font-[500] text-[16px] leading-[126%]">Связаться с нами</p>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop