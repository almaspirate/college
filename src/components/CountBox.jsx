export default function CountBox({ label, count, avatar }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 flex items-center gap-4 w-full sm:w-60">
      <img src={avatar} alt={label} className="w-12 h-12 rounded-full" />
      <div>
        <div className="text-sm text-gray-500">{label}</div>
        <div className="text-2xl font-bold text-blue-700">{count}</div>
      </div>
    </div>
  );
}
