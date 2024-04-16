import { useFormStatus } from "react-dom";

export function Submit() {
  const status = useFormStatus();
  console.log(status);

  return (
    <button className="w-[20ch] " disabled={status.pending}>
      {"Create!"}
    </button>
  );
}
