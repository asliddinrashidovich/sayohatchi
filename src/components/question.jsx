import React from 'react'

function Question() {
  return (
    <section className='bg-[#FAFAFD] mb-[68px] px-5 md:px-10'>
        <div className='max-w-[1240px] relative overflow-hidden mx-auto bg-[#FAFAFD] flex justify-between items-center border-[1px] border-[#F0F0F6] rounded-[8px]'>
            <div className='p-[32px] z-40'>
                <h2 className='text-[42px] font-[700] leading-[126%] text-[#202126] mb-[18px]'>У вас есть вопросы?</h2>
                <p className='text-[18px] font-[400] leading-[128%] text-[#202126] mb-8 max-w-[478px]'>Вы можете поискать ответ на свой вопрос в разделе 
                “Часто задаваемые вопросы”.</p>
                <button className="py-[14px] px-12 rounded-[8px] cursor-pointer font-[600] text-[#fff] text-[16px] leading-[126%] bg-[#2F74D0]">Часто задаваемые вопросы</button>
            </div>
            <img className='w-full absolute top-[46px] max-w-[598px] right-0 z-[10]' src="/main/cycle.svg" alt="cycle" />
            <img className=' absolute right-[80px] z-[20]' src="/main/travel-concept-with-lugagge.svg" alt="luggage" />
            <div className='relative top-[-100px]'>
                <div className='absolute top-[46px] w-[598px] right-0 z-[10]'>
                </div>
            </div>
            <div className='relative '>
                <div className='z-12 absolute '>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Question