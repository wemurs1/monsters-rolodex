import { ChangeEvent, Component, ReactNode } from 'react';
import './search-box.styles.css';

interface Props {
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const SearchBox = ({ onChangeHandler, placeholder, className }: Props) => {
  return (
    <input
      className={`search-box ${className}`}
      type='search'
      placeholder={placeholder ? placeholder : 'search...'}
      onChange={onChangeHandler}
    />
  );
};

// interface State {}

// class SearchBox extends Component<Props, State> {
//   render(): ReactNode {
//     const { onChangeHandler } = this.props;
//     return (
//       <input
//         className={`search-box ${this.props.className}`}
//         type='search'
//         placeholder={
//           this.props.placeholder ? this.props.placeholder : 'search...'
//         }
//         onChange={onChangeHandler}
//       />
//     );
//   }
// }

export default SearchBox;
