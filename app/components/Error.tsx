const MyAwesomeError = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-4 p-24 text-center">
        <h4 className="text-4xl lg:text-6xl font-extrabold  bg-gradient-to-r from-red-500  via-red-900 to-yellow-500 bg-clip-text text-transparent">
            Something went wrong
        </h4>
        <h5 className="text-xl lg:text-3xl font-semibold">We all making bugs, right? report it to me to resolve this issue!</h5>
    </div>
  );
};

export default MyAwesomeError;