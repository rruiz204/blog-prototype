import SadFaceIcon from "@assets/icons/sad-face-icon.svg";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="rounded-lg p-4 flex flex-col items-center gap-5">
        <p className="text-4xl font-inter-semi">404 Not Found</p>
        <img src={SadFaceIcon} height={150} width={150} />
      </div>
    </div>
  );
};