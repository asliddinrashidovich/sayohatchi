function Footer() {
  return (
    <footer className="bg-[#0A131D] px-5 md:px-10 py-[48px]">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-[30px] mb-12">   
            <div>
                <h2 className="text-[18px] font-[700] leading-[126%] text-[#fff] max-w-[411px] mb-3">SAYOHATCHI - это самый быстрый и лучший 
                способ организовать свои путешествия</h2>
                <p className="text-[16px] font-[400] leading-[126%] text-[#BCB6B6] max-w-[411px] ">Регистрируйтесь и путешествуйте вместе 
                с SAYOHATCHI!</p>
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-8 justify-between items-center">
                <p className='text-[16px] cursor-pointer hover:text-[#FFFFFF] font-[400] leading-[126%] transition-all duration-200 text-[#BCB6B6] hover:border-b-[1px] border-b-[1px] border-b-transparent hover:border-b-[#fff] pb-[4px]'>Главная</p>
                <p className='text-[16px] cursor-pointer hover:text-[#FFFFFF] font-[400] leading-[126%] transition-all duration-200 text-[#BCB6B6] hover:border-b-[1px] border-b-[1px] border-b-transparent hover:border-b-[#fff] pb-[4px]'>Часто задаваемые вопросы</p>
                <p className='text-[16px] cursor-pointer hover:text-[#FFFFFF] font-[400] leading-[126%] transition-all duration-200 text-[#BCB6B6] hover:border-b-[1px] border-b-[1px] border-b-transparent hover:border-b-[#fff] pb-[4px]'>Регламент</p>
                <div className="flex items-center gap-[6px] cursor-pointer hover:border-b-[1px] border-b-[1px] border-b-transparent hover:border-b-[#fff] pb-[4px] transition-all duration-200">
                    <img src="/main/voice.svg" alt="voice" />
                    <p className='text-[16px] cursor-pointer hover:text-[#FFFFFF] font-[400] leading-[126%] transition-all duration-200 text-[#BCB6B6] '>Телеграм канал</p>
                </div>
                <div className="flex items-center gap-[6px] cursor-pointer hover:border-b-[1px] border-b-[1px] border-b-transparent hover:border-b-[#fff] pb-[4px] transition-all duration-200">
                    <img src="/main/instagram_footer_logo.png" alt="instagram" />
                    <p className='text-[16px] cursor-pointer hover:text-[#FFFFFF] font-[400] leading-[126%] transition-all duration-200 text-[#BCB6B6] '>Instagram</p>
                </div>
            </div>
        </div>
        <div className="max-w-[1200px] mx-auto flex items-start gap-[30px]">
            <p className="text-[16px] font-[400] leading-[126%] text-[#BCB6B6] max-w-[411px] ">© 2025, ООО «SAYOHATCHI»</p>
            <p className="text-[16px] font-[400] leading-[126%] text-[#BCB6B6] max-w-[411px] ">Политика конфеденциальности</p>
        </div>
    </footer>
  )
}

export default Footer