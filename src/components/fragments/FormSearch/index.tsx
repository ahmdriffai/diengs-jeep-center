import DatePicker from "@/components/ui/DatePicker";
import SearchInput from "@/components/ui/SearchInput";
import { FaUserGroup } from "react-icons/fa6";
import { PiJeepBold } from "react-icons/pi";

const FormSearch: React.FC = () => {
  return (
    <div className="relative -top-6 z-1 justify-center lg:px-80 h-full">
      <div className="flex flex-col gap-y-4 p-2 lg:p-0 lg:flex-row bg-white shadow-lg justify-between items-center w-full rounded-3xl">
        <DatePicker />
        <SearchInput
          name="amount"
          placeholder="Berapa Orang"
          border
          icon={<FaUserGroup size={20} />}
        />
        <SearchInput
          name="package"
          placeholder="Pilih Paket"
          icon={<PiJeepBold size={20} />}
        />
        <button
          className={`flex-1/2 cursor-pointer flex items-center justify-center text-white py-4 rounded-bl-3xl w-full h-full bg-primary rounded-tl-3xl lg:rounded-tl-none  rounded-tr-3xl rounded-br-3xl hover:bg-primary/90`}
        >
          Cari
        </button>
      </div>
    </div>
  );
};

export default FormSearch;
