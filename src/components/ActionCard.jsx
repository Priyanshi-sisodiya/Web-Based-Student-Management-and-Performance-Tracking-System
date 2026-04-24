const ActionCard = ({ title, desc, icon, gradient }) => {
  return (
    <div
      className={`
        bg-gradient-to-r ${gradient}
        rounded-3xl p-6 min-h-[150px]
        text-white shadow-md
        cursor-pointer
        transition-all duration-300
        hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]
        relative overflow-hidden
      `}
    >
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl" />

      {/* Content */}
      <div className="relative z-10 flex gap-4 items-start">

        {/* Icon */}
        <div
          className="
            w-14 h-14 rounded-2xl
            bg-white/20 backdrop-blur-md
            flex items-center justify-center
            shrink-0
          "
        >
          <div className="text-white">{icon}</div>
        </div>

        {/* Text */}
        <div className="pt-1">
          <h3 className="text-2xl font-semibold leading-tight">
            {title}
          </h3>

          <p className="text-sm text-white/80 mt-2 leading-relaxed">
            {desc}
          </p>
        </div>

      </div>
    </div>
  );
};

export default ActionCard;