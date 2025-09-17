import { IoSearch } from "react-icons/io5";

interface CommonSearchBoxProps {
  onSearch: (text: string) => void;
  searchText?: string;
  className?: string;
  placeHolder?:string
}

const CommonSearchBox = ({
  onSearch,
  searchText,
  className,
  placeHolder="Search Name, Email"

}: CommonSearchBoxProps) => {
  return (
    <div className="relative">
      <div className="absolute rounded-full h-[70%] top-1/2 -translate-y-1/2 left-2 flex items-center justify-center bg-[#92BDF6] aspect-square">
        <IoSearch />
      </div>
      <input
        id="client_search"
        placeholder={placeHolder}
        name="search"
        className={`${
          className ? className : ""
        } w-full border !border-blue-900 focus:!border-blue-900 rounded-3xl !py-[5.7px] !pl-[40px]`}
        type="text"
        {...(searchText !== undefined ? { value: searchText } : {})}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default CommonSearchBox;
