import { SpinnerRoundFilled } from "spinners-react";

export default function Loading() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <SpinnerRoundFilled
        size={89}
        thickness={176}
        speed={138}
        color="rgba(79, 248, 210, 1)"
      />
    </div>
  );
}
