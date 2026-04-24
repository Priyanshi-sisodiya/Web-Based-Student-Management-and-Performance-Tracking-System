const StatCard = ({ title, value, extra, icon, color }) => {
  return (
    <div
      className="
        bg-white rounded-3xl shadow-sm border border-gray-100
        p-6 min-h-[150px]
        flex justify-between items-start
        transition-all duration-300
        hover:shadow-xl hover:-translate-y-1
        cursor-pointer
      "
    >
      {/* Left Content */}
      <div className="flex flex-col h-full justify-between">

        <div>
          <p className="text-gray-500 text-sm font-medium mb-2 tracking-wide">
            {title}
          </p>

          <h2 className="text-4xl font-bold text-gray-800 leading-none">
            {value}
          </h2>
        </div>

        {extra && (
          <p className="text-green-500 text-sm mt-4 font-medium">
            {extra}
          </p>
        )}
      </div>

      {/* Right Icon */}
      <div
        className={`
          w-14 h-14 rounded-2xl
          ${color}
          flex items-center justify-center
          shadow-sm
        `}
      >
        <div className="text-current">{icon}</div>
      </div>
    </div>
  );
};

export default StatCard;