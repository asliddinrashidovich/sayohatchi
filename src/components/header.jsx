import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='py-[14px] border-[1px] border-[#F0F0F6] px-5 md:px-10 sticky z-99 top-0 bg-[#fff]'>
        <div className='max-w-[1240px] mx-auto flex items-center justify-between'>
            <div className='flex items-center gap-[38px]'> 
                <Link href={'/'} className='cursor-pointer'>
                    <Image src={'/main/main_logo (2).svg'} alt='main logo' width={37} height={52}/>
                </Link>
                <button className='flex items-center gap-[9px] border-[1px] border-[#F0F0F6] rounded-[8px] py-2 px-[26px] bg-[#FAFAFD] cursor-pointer'>
                    <p className='text-[16px] font-[600] md:block hidden leading-[126%] text-[#202126]'>Скачать приложение</p>
                    <Image src={'/main/download.svg'} alt='download' width={18} height={18}/>
                </button>
            </div>
            <div className='flex items-center gap-[32px]'>
                <div className='group md:block hidden relative cursor-pointer'>
                    <p className='text-[16px] group-hover:text-[#2F74D0] font-[600] leading-[126%] text-[#202126]'>Главная</p>
                    <span
                        className="absolute left-0 -bottom-1 h-[2px] w-[28px]  bg-[#202126] group-hover:bg-[#2F74D0] transition-all duration-300 group-hover:w-full "
                    ></span>
                </div>
                <div className='group md:block hidden relative cursor-pointer'>
                    <p className='text-[16px] group-hover:text-[#2F74D0] font-[600] leading-[126%] text-[#202126]'>Регламент</p>
                    <span
                        className="absolute left-0 -bottom-1 h-[2px] w-[28px]  bg-[#202126] group-hover:bg-[#2F74D0] transition-all duration-300 group-hover:w-full "
                    ></span>
                </div>
                <div className='group md:block hidden relative cursor-pointer'>
                    <p className='text-[16px] group-hover:text-[#2F74D0] font-[600] leading-[126%] text-[#202126]'>Вопросы-Ответы</p>
                    <span
                        className="absolute left-0 -bottom-1 h-[2px] w-[28px]  bg-[#202126] group-hover:bg-[#2F74D0] transition-all duration-300 group-hover:w-full "
                    ></span>
                </div>
                <button className='py-2 px-[26px] rounded-[8px] bg-[#2F74D0] gap-[9px] cursor-pointer flex items-center'>
                    <Image src={'/main/login.svg'} alt='login' width={18} height={19}/>
                    <p className='text-[16px] font-[600] leading-[126%] text-[#FFF] md:block hidden'>Войти</p>
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header