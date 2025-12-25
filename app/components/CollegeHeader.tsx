import Image from "next/image";

export default function CollegeHeader() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-[auto_1fr_auto] items-center">
        
       
        <div className="flex justify-start">
          <Image
            src="/SVKM-Logo-New.png"
            alt="SVKM Logo"
            width={70}
            height={70}
          />
        </div>

       
        <div className="text-center leading-snug max-w-4xl mx-auto">
          <p className="text-sm mb-2">
            Shri Vile Parle Kelvani Mandal&apos;s
          </p>
          <p className="text-lg font-bold ">
            Mithibai College of Arts, Chauhan Institute of Science and
          </p>
          <p className="text-lg font-bold">
            Amrutben
        </p>
        <p className="text-lg font-bold">
            Jivanlal College of Commerce and Economics
        </p>
          <p className="text-sm text-gray-600 mt-2">
            (Empowered Autonomous) Affiliated to University of Mumbai
          </p>
          <p className="text-sm text-red-600 font-semibold">
            NAAC Accredited A++ Grade, CGPA: 3.55 (November 2024)
          </p>
        </div>

        
        <div className="flex justify-end">
          <Image
            src="/banner.png"
            alt="Mithibai Logo"
            width={70}
            height={70}
          />
        </div>
      </div>
    </header>
  );
}
