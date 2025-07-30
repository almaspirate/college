<<<<<<< HEAD
export default function TeacherCard({ name, role, photo }) {
  return (
    <div className="min-w-[180px] bg-white shadow-md rounded-xl p-4 my-4 text-center">
      <img src={photo} alt={name} className="w-20 h-20 mx-auto rounded-full object-cover" />
      <h3 className="mt-2 text-md font-semibold text-gray-700">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
}
=======
export default function TeacherCard({ name, role, photo }) {
  return (
    <div className="min-w-[180px] bg-white shadow-md rounded-xl p-4 my-4 text-center">
      <img src={photo} alt={name} className="w-20 h-20 mx-auto rounded-full object-cover" />
      <h3 className="mt-2 text-md font-semibold text-gray-700">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
}
>>>>>>> c67b98635bb65160a126ee5d95ab9f9b2302015f
