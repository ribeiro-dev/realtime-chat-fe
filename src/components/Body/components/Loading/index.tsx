import { Spinner } from "../../../Spinner";

export function Loading() {
  return (
    <div style={{ margin: "auto", textAlign: "center" }}>
      <Spinner />
      <p>Conectando...</p>
    </div>
  );
}
