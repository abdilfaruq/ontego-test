import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex items-center justify-center">
        <div className="relative flex h-16 w-16">
          <div className="absolute border-t-4 border-blue-400 border-solid rounded-full w-12 h-12 animate-spin"></div>
        </div>
        <div className="text-lg font-semibold text-gray-700">
          <Image
            src="/images/Ontego_Business_Mobi.svg"
            alt="Logo"
            width={200}
            height={100}
            style={{ filter: "invert(1)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
