<<<<<<< HEAD
export default function SectionHeader({ title, onShowMore }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold text-blue-600">{title}</h2>
      <button
        onClick={onShowMore}
        className="text-sm text-blue-500 hover:underline"
      >
        {
            onShowMore? 'show more': ''
        } 
      </button>
    </div>
  );
}
=======
export default function SectionHeader({ title, onShowMore }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold text-blue-600">{title}</h2>
      <button
        onClick={onShowMore}
        className="text-sm text-blue-500 hover:underline"
      >
        {
            onShowMore? 'show more': ''
        } 
      </button>
    </div>
  );
}
>>>>>>> c67b98635bb65160a126ee5d95ab9f9b2302015f
