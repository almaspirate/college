export default function DirectorCard({ name, role, photo, style = "A" }) {
  const styles = {
    A: "bg-blue-100",
    B: "bg-blue-200",
    C: "bg-blue-300",
  };

  return (
    <div className={`w-72 p-4 rounded-lg shadow ${styles[style]} text-center`}>
      <img src={photo} alt={name} className="w-20 h-20 mx-auto rounded-full object-cover mb-2" />
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  );
}
