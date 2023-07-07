import { ChangeEventHandler } from 'react';
import './search-box.styles.css';

type SearchBoxProps = {
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  className?: string;
};

const SearchBox = ({
  onChangeHandler,
  placeholder,
  className,
}: SearchBoxProps) => {
  return (
    <input
      className={`search-box ${className}`}
      type='search'
      placeholder={placeholder ? placeholder : 'search...'}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
