import CollegeHeader from "../components/CollegeHeader";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <CollegeHeader />
      <div className="flex-2 flex items-center justify-center pt-4">
      {children}
      </div>
    </div>
    
  );
}
