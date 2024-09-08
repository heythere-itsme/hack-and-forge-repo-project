import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateLearn } from '../../departmentLearnSlice';
import arrow from '/free-arrow-down-icon-3101-thumb.png'

function LearningDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Visual');

  const dispatch = useDispatch();


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item) => {
    dispatch(updateLearn(item));
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        className="bg-blue-500 text-white font-semibold w-36 rounded-lg h-10 flex justify-center items-center gap-2"
        onClick={toggleDropdown}
      >
        {selectedItem}
        <img src={arrow} alt="" className='w-5'/>
      </button>

      {isOpen && (
        <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            <li
            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            onClick={() => handleSelect('Visual')}
          >
            Visual
          </li>
          <li
            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            onClick={() => handleSelect('Auditory')}
          >
            Auditory
          </li>
          <li
            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            onClick={() => handleSelect('Kinesthetic')}
          >
            Kinesthetic
          </li>
        </ul>
      )}
    </div>
  );
}

export default LearningDropDown;
