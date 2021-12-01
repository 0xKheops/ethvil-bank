export const ConnectSpinner = () => (
  <div className="text-center">
    <div
      style={{ borderTopColor: "transparent" }}
      className="inline-block w-12 h-12 border-4 border-yellow-500 border-solid rounded-full animate-spin"
    ></div>
    <div className="text-yellow-500">Connecting to Ethereum...</div>
  </div>
);
