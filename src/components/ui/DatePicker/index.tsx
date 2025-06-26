import dayjs, { Dayjs } from "dayjs";
import React, { useState } from "react";
import { BiCalendar, BiChevronLeft, BiChevronRight } from "react-icons/bi";

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

const DateInputModal: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [currentMonth, setCurrentMonth] = useState<Dayjs>(dayjs());
  const [open, setOpen] = useState<boolean>(false);

  const generateCalendar = (month: Dayjs): (Dayjs | null)[] => {
    const startOfMonth = month.startOf("month");
    const startDay = startOfMonth.day();
    const daysInMonth = month.daysInMonth();

    const dates: (Dayjs | null)[] = [];

    for (let i = 0; i < startDay; i++) {
      dates.push(null);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      dates.push(dayjs(month).date(d));
    }

    return dates;
  };

  const handleDateClick = (date: Dayjs | null) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  const renderCalendar = (month: Dayjs) => {
    const dates = generateCalendar(month);

    return (
      <div className="px-4">
        <div className="text-center font-semibold text-gray-700 mb-2">
          {month.format("MMMM YYYY")}
        </div>
        <div className="grid grid-cols-7 gap-1 text-sm text-center">
          {WEEKDAYS.map((d) => (
            <div key={d} className="text-gray-400">
              {d}
            </div>
          ))}
          {dates.map((date, index) => (
            <button
              key={index}
              disabled={!date}
              className={`h-10 w-10 rounded-full ${
                date && selectedDate?.isSame(date, "day")
                  ? "bg-black text-white"
                  : "hover:bg-gray-200"
              } ${!date ? "opacity-0" : ""}`}
              onClick={() => handleDateClick(date)}
            >
              {date?.date()}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto relative ">
        <div className="relative">
          <input
            type="text"
            readOnly
            onClick={() => setOpen(true)}
            value={selectedDate ? selectedDate.format("YYYY-MM-DD") : ""}
            placeholder="Pilih tanggal"
            className="w-full px-4 py-2 pr-10 border-r border-gray-300 focus:outline-none  cursor-pointer"
          />
          <BiCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/60 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Pilih Tanggal</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 cursor-pointer"
              >
                Tutup
              </button>
            </div>

            <div className="flex justify-between items-center mb-4 px-4">
              <button
                onClick={() =>
                  setCurrentMonth(currentMonth.subtract(1, "month"))
                }
                className="cursor-pointer"
              >
                <BiChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}
                className="cursor-pointer"
              >
                <BiChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {renderCalendar(currentMonth)}

            <div className="flex justify-between items-center mt-6 px-4">
              <button
                onClick={() => setSelectedDate(null)}
                className="text-red-500 text-sm cursor-pointer"
              >
                Hapus tanggal
              </button>
              <button
                onClick={() => setOpen(false)}
                className="bg-primary text-white px-4 py-2 rounded-lg cursor-pointer"
              >
                Selesai
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DateInputModal;
