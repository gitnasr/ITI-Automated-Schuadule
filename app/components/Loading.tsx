import { ColorRing } from "react-loader-spinner";

const LoadingIndicator = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <ColorRing
        visible={true}
        height="90"
        width="90"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
      <h4 className="text-2xl font-bold bg-gradient-to-r from-pink-500  via-red-500 to-yellow-500 bg-clip-text text-transparent">I&apos;m preparing a great work for you</h4>
    </div>
  );
};

export default LoadingIndicator;
