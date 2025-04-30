import { recomendedCards } from "@/data/data"
import Image from "next/image"

function Cards() {
  return (
    <section className="mb-[68px] px-5 md:px-10">
        <div className="max-w-[1240px] mx-auto" >
            <h1 className="font-[700] leading-[126%] text-[36px] text-[#202126] mb-[24px]">Мы рекомендуем</h1>
            <div className="flex gap-4">
                {recomendedCards.map(item => (
                    <div key={item.image} className="">
                        <div className="p-[6px]">
                            <Image src={item.image} alt={item.paragraph} className="rounded-[8px]" width={286} height={210}/>
                        </div>
                        <p className="font-[400] text-[16px] leading-[140%] text-[#202126] p-[12px]">{item.paragraph}</p>
                        <p className="font-[500] text-[14px] leading-[140%] text-[#202126] p-[12px]"><span className="text-[18px] font-[700]">от {item.price.toLocaleString()}</span> UZS / ночь</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Cards