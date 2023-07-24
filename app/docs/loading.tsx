export default function Loading() {
  return (
    <div className="relative top-1/2 left-1/4 w-64 h-1 bg-gray-200 rounded-full">
      <div className="absolute h-1 bg-blue-500 rounded-full animate-loading-bar grid justify-center items-center" />
    </div>
  );
}
