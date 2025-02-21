
import imagem from '../../public/assets/Logo/imagem-logo.png'

export default function Principal(){
    return(

            <section className="bg-gray-100">
                
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between md:mt-20">
                    
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 md:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="/assets/Logo/imagem-logo.png" alt="Imagem com logo da empresa" className="object-contain h-92 md:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>

                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Serviços  
                            <span className="text-[#E5332F]"> 24 Horas</span> de Assistência Veicular
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Sempre prontos para te socorrer, a 
                            <br  className="hidden md:inline lg:hidden" /> qualquer hora e em qualquer lugar.
                        </p>
                        
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            
                            <a rel="noopener noreferrer" href="#contato" className="px-8 py-3 text-lg font-semibold rounded bg-[rgb(229,51,47)] dark:text-gray-50">Contatos</a>
                            <a rel="noopener noreferrer" href="#servicos" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Serviços</a>

                        </div>
                    </div>
                </div>
            </section>
    );
}