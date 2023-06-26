import './card.styles.css';
import { Monster } from '../../models/monster';

interface Props {
  monster: Monster;
}

const Card = ({ monster: { id, name, email } }: Props) => {
  return (
    <div className='card-container' key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

// interface State {}

// class Card extends Component<Props, State> {
//   render() {
//     const { id, name, email } = this.props.monster;
//     return (
//       <div className='card-container' key={id}>
//         <img
//           src={`https://robohash.org/${id}?set=set2`}
//           alt={`monster ${name}`}
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

export default Card;
