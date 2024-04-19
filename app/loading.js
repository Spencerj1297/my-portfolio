import { SpinnerRoundFilled } from "spinners-react";

export default function Loading() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black z-30">
      <SpinnerRoundFilled
        size={89}
        thickness={176}
        speed={100}
        color="rgba(79, 248, 210, 1)"
      />
    </div>
  );
}
