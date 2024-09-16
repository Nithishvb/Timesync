export const LoginBanner = () => {
  return (
    <>
      <div
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg?height=800&width=600')",
        }}
      >
        <div className="h-full w-full bg-primary bg-opacity-50 flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-4xl font-bold mb-4">Time sync</h2>
            <p className="text-xl">Effortless scheduling across time zones</p>
          </div>
        </div>
      </div>
    </>
  );
};
