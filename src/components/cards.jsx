import { recomendedCards } from "@/data/data"
import Image from "next/image"

function Cards() {
  return (
    <section className="mb-[68px] px-5 md:px-10">
        <div className="max-w-[1240px] mx-auto" >
            <h1 className="font-[700] leading-[126%] text-[36px] text-[#202126] mb-[24px]">Мы рекомендуем</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                {recomendedCards.map(item => (
                    <div key={item.image} className=" border-[#F0F0F6] border-[1px] rounded-[8px] bg-[#FAFAFD]">
                        <div className="p-[6px] relative">
                            <div className="overflow-hidden rounded-[8px] flex justify-center ">
                                <img src={item.image} alt={item.paragraph} className=" cursor-pointer transition-all w-full duration-200 hover:scale-[105%] hover:rotate-[2deg]" />
                            </div>
                            <div className="absolute top-[10px] left-[10px] rounded-[8px] bg-[#202126CC] flex items-center gap-1 py-[4px]  px-[8px]">
                                <Image src="/main/Star 1.svg" alt="star" width={14} height={13}/>
                                <span className="text-[#fff]">3</span>
                            </div>
                        </div>
                        <p className="font-[400] text-[16px] leading-[140%] text-[#202126] p-[12px] cursor-pointer">{item.paragraph}</p>
                        <p className="font-[500] text-[14px] leading-[140%] text-[#202126] p-[12px]"><span className="text-[18px] font-[700]">от {item.price.toLocaleString()}</span> UZS / ночь</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Cards