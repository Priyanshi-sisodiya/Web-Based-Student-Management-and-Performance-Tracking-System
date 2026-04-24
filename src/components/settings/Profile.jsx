import { User, Mail, Phone, Camera, Check } from "lucide-react";

const Profile = () => {
  return (
    <div className="bg-white rounded-3xl shadow-md p-5 sm:p-6 lg:p-8 w-full min-w-0 overflow-hidden">

      {/* Header */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#1e2b4f] mb-6 lg:mb-8 leading-tight">
        Profile Settings
      </h2>

      {/* Top Profile Area */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8 mb-8 lg:mb-10">

        {/* Avatar */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 min-w-0">

          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#2156f4] to-blue-500 flex items-center justify-center text-white text-4xl sm:text-5xl font-semibold shadow-md shrink-0">
            A
          </div>

          <div className="min-w-0">
            <button className="h-[48px] sm:h-[52px] px-5 sm:px-7 rounded-2xl bg-[#2156f4] text-white font-medium text-[15px] sm:text-[16px] flex items-center gap-3 shadow-md hover:bg-blue-700 transition whitespace-nowrap">
              <Camera size={18} />
              Change Photo
            </button>

            <p className="text-[#5f6f89] text-sm mt-3">
              JPG, PNG. Max size 2MB
            </p>
          </div>

        </div>

      </div>

      {/* Form */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 sm:gap-6">

        {/* Full Name */}
        <div className="min-w-0">
          <label className="block text-[15px] sm:text-[16px] font-semibold text-[#1e2b4f] mb-3">
            Full Name
          </label>

          <div className="relative">
            <User
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#94a3b8]"
            />

            <input
              type="text"
              defaultValue="Admin User"
              className="w-full h-[54px] sm:h-[58px] rounded-2xl border border-[#dbe3f0] pl-14 pr-4 text-[15px] sm:text-[17px] outline-none focus:border-[#2156f4]"
            />
          </div>
        </div>

        {/* Email */}
        <div className="min-w-0">
          <label className="block text-[15px] sm:text-[16px] font-semibold text-[#1e2b4f] mb-3">
            Email Address
          </label>

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#94a3b8]"
            />

            <input
              type="email"
              defaultValue="admin@school.edu"
              className="w-full h-[54px] sm:h-[58px] rounded-2xl border border-[#dbe3f0] pl-14 pr-4 text-[15px] sm:text-[17px] outline-none focus:border-[#2156f4]"
            />
          </div>
        </div>

        {/* Phone */}
        <div className="min-w-0">
          <label className="block text-[15px] sm:text-[16px] font-semibold text-[#1e2b4f] mb-3">
            Phone Number
          </label>

          <div className="relative">
            <Phone
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#94a3b8]"
            />

            <input
              type="text"
              defaultValue="(555) 999-0000"
              className="w-full h-[54px] sm:h-[58px] rounded-2xl border border-[#dbe3f0] pl-14 pr-4 text-[15px] sm:text-[17px] outline-none focus:border-[#2156f4]"
            />
          </div>
        </div>

        {/* Role */}
        <div className="min-w-0">
          <label className="block text-[15px] sm:text-[16px] font-semibold text-[#1e2b4f] mb-3">
            Role
          </label>

          <input
            type="text"
            value="Administrator"
            disabled
            className="w-full h-[54px] sm:h-[58px] rounded-2xl border border-[#dbe3f0] px-5 text-[15px] sm:text-[17px] bg-[#f8fafc] text-[#64748b]"
          />
        </div>

      </div>

      {/* Save */}
      <div className="mt-8 flex justify-start sm:justify-end">
        <button className="w-full sm:w-auto h-[52px] sm:h-[54px] px-6 sm:px-8 rounded-2xl bg-[#2156f4] text-white font-semibold text-[15px] sm:text-[17px] flex items-center justify-center gap-3 shadow-md hover:bg-blue-700 transition whitespace-nowrap">
          <Check size={20} />
          Save Changes
        </button>
      </div>

    </div>
  );
};

export default Profile;