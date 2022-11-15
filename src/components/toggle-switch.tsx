import React from "react";

type ToggleSitchProps = {
  onClick: any;
  isChecked: boolean;
};
const ToggleSwitch = ({ onClick, isChecked }: ToggleSitchProps) => {
  return (
    <label className="inline-flex relative items-center cursor-pointer mt-2">
      <input
        type="checkbox"
        value={""}
        id="default-toggle"
        className="sr-only peer"
        onChange={onClick}
        checked={isChecked}
      />
      <div
        className="w-12 h-[27px] bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer
        dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white 
        after:content-[''] after:absolute after:top-[3px] after:left-[4px] after:bg-white
         after:border-gray-300 after:border after:rounded-full after:h-[20px] after:w-5 
         after:transition-all dark:border-gray-600 peer-checked:bg-primary-black after:pl-1"
      ></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
    </label>
  );
};

export default ToggleSwitch;
