import React from 'react';

const Minds_behind_argos_cards = ({ photo, name, designation, specialization, specialization_student }) => {
  return (
    <div className="relative bg-[#0a6aca] text-white rounded-3xl shadow-2xl pt-20 px-4 pb-6
                    w-full sm:w-[90vw] md:w-[40vw] lg:w-[20vw] max-w-xs
                    hover:scale-105 transition-transform duration-300 mx-auto
                    flex flex-col justify-start 
                    min-h-[340px] md:min-h-[36px] lg:min-h-[38px] max-h-[400px]">
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
        <img
          src={photo}
          alt={`${name}'s photo`}
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white ring-4 ring-blue-300 object-cover"
        />
      </div>

      <div className="text-center mt-6 flex-grow overflow-hidden">
        {/* Always show name */}
        <h2 className="text-xl sm:text-2xl font-bold break-words">{name}</h2>

        {/* Only show these on md and above */}
        <div className="">
          <h3 className="text-base sm:text-lg text-blue-100 font-semibold">{designation}</h3>
          <p className="text-sm sm:text-base text-blue-200 mt-2 truncate">
            {specialization}
          </p>
          {specialization_student && (
            <p className="text-sm text-blue-100 mt-1 truncate">{specialization_student}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Minds_behind_argos_cards;
