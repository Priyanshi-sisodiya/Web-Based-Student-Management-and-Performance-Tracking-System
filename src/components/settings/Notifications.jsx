import { Bell, Mail, Smartphone, Monitor, Check } from "lucide-react";

const Notifications = () => {
  return (
    <div className="bg-white rounded-3xl shadow-md p-5 sm:p-6 lg:p-8 w-full min-w-0 overflow-hidden">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 lg:mb-8">

        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#2156f4] flex items-center justify-center shadow-md shrink-0">
          <Bell size={24} className="text-white sm:w-[26px] sm:h-[26px]" />
        </div>

        <div className="min-w-0">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1e2b4f] leading-tight">
            Notification Settings
          </h2>

          <p className="text-[#5f6f89] mt-1 text-[14px] sm:text-[16px]">
            Manage how you receive alerts and updates
          </p>
        </div>

      </div>

      {/* Options */}
      <div className="space-y-4 sm:space-y-5">

        {/* Email */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border border-[#edf1f7] rounded-2xl px-4 sm:px-6 py-4 sm:py-5 hover:bg-[#f8fbff] transition">

          <div className="flex items-start sm:items-center gap-4 min-w-0">

            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
              <Mail size={20} className="text-[#2156f4]" />
            </div>

            <div className="min-w-0">
              <p className="text-[16px] sm:text-[18px] font-semibold text-[#1e2b4f]">
                Email Notifications
              </p>

              <p className="text-[14px] sm:text-[15px] text-[#5f6f89] mt-1">
                Receive updates, reports and announcements by email
              </p>
            </div>

          </div>

          <input
            type="checkbox"
            defaultChecked
            className="w-5 h-5 sm:w-6 sm:h-6 accent-[#2156f4] shrink-0 self-end sm:self-center"
          />
        </div>

        {/* SMS */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border border-[#edf1f7] rounded-2xl px-4 sm:px-6 py-4 sm:py-5 hover:bg-[#f8fbff] transition">

          <div className="flex items-start sm:items-center gap-4 min-w-0">

            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
              <Smartphone size={20} className="text-green-600" />
            </div>

            <div className="min-w-0">
              <p className="text-[16px] sm:text-[18px] font-semibold text-[#1e2b4f]">
                SMS Notifications
              </p>

              <p className="text-[14px] sm:text-[15px] text-[#5f6f89] mt-1">
                Important alerts sent directly to your phone
              </p>
            </div>

          </div>

          <input
            type="checkbox"
            className="w-5 h-5 sm:w-6 sm:h-6 accent-[#2156f4] shrink-0 self-end sm:self-center"
          />
        </div>

        {/* App */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border border-[#edf1f7] rounded-2xl px-4 sm:px-6 py-4 sm:py-5 hover:bg-[#f8fbff] transition">

          <div className="flex items-start sm:items-center gap-4 min-w-0">

            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
              <Monitor size={20} className="text-purple-600" />
            </div>

            <div className="min-w-0">
              <p className="text-[16px] sm:text-[18px] font-semibold text-[#1e2b4f]">
                In-App Notifications
              </p>

              <p className="text-[14px] sm:text-[15px] text-[#5f6f89] mt-1">
                Show notifications inside dashboard panel
              </p>
            </div>

          </div>

          <input
            type="checkbox"
            defaultChecked
            className="w-5 h-5 sm:w-6 sm:h-6 accent-[#2156f4] shrink-0 self-end sm:self-center"
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

export default Notifications;