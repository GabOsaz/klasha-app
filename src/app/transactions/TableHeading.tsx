import Input from '@/components/input';
import SearchInputIcon from '@/assets/components/SearchInputIcon';
import FilterIcon from '@/assets/components/FilterIcon';
import Button from '@/components/button';
import tableHeadingT from '../types/tableHeadingT';

function TableHeading({ searchValue, setSearchValue }: tableHeadingT) {
  return (
    <div className="w-full px-6">
      <h1 className="font-medium text-lg text-shades-black">Transaction history</h1>
      <div className="py-4 border-t border-b w-full mt-6 flex justify-between">
        <Input
          type="text"
          value={searchValue}
          onChange={setSearchValue}
          placeholder="Search"
          className="focus:border focus:border-black"
          rightIcon={<SearchInputIcon />}
        />
        <div className="font-semibold text-xs flex items-center space-x-3">
          <Button
            rightIcon={<FilterIcon />}
            text="Filter"
            className="border border-black rounded-lg"
          />
          <Button text="Export" className="border border-black  rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default TableHeading;
