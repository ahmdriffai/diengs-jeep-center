const Card: React.FC = () => {
  return (
    <div className="w-80 shadow-lg p-4  hover:shadow-xl mb-6 hover:-translate-1 transition-all rounded-2xl">
      {/* image */}
      <div className="rounded-xl overflow-hidden">
        <img src="./jeep.png" alt="" />
      </div>
      {/* title */}
      <h3 className="font-semibold my-3 text-lg">Paket Satu Paling </h3>
      {/* detail */}
      <div className="flex justify-start gap-x-3 text-xs font-normal">
        <p>4 Destinasi</p>
        <p>4x4 Jeep</p>
      </div>
      <div className="flex justify-between mt-3">
        <p className="text-lg font-bold">IDR. 600.000</p>
        <a
          href="#"
          className="bg-secondary px-5 py-2 text-white rounded-2xl hover:bg-primary/90"
        >
          Booking
        </a>
      </div>
      {/* price */}
    </div>
  );
};

export default Card;
