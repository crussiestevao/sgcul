import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children, logo }) {
    return (
        <div 
        className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0"
            style={{
                // background: "url(https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) no-repeat center center fixed",
      

                backgroundImage: "url(https://img.freepik.com/free-vector/high-price-car-fuel-concept-people-wasting-money-gasoline-changing-car-scooter-saving-cash-flat-vector-illustration-economy-refueling-city-transport-concept_74855-10089.jpg?t=st=1721041611~exp=1721045211~hmac=db06f9268d9ea6e69031631767d05bc93845062cb51de1c40a1c547bcd5a4ea0&w=1060)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >

            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" logo={logo} />
                </Link>
            </div>
            <div className="font-bold text-[14.5pt] text-center mt-2 bg-blue-400 rounded-t-lg p-2">
                <h2 className='uppercase text-white'>Departamento de Património e Logística</h2>
                <h3 className='uppercase text-white'>SISTEMA DE GESTAO DE COMBUSTIVEL</h3>
            </div>
            <div className="w-full sm:max-w-md px-6 py-12  bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>

        </div>
    );
}
