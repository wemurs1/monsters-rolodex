import { Monster } from '../../models/monster';
import './card-list.styles.css';
import Card from '../card/card.component';

interface Props {
  monsters: Monster[];
}

const CardList = ({ monsters }: Props) => {
  return (
    <div className='card-list'>
      {monsters.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
};

// interface State {}

// class CardList extends Component<Props, State> {
//   render(): ReactNode {
//     const { monsters } = this.props;
//     return (
//       <div className='card-list'>
//         {monsters.map((monster) => {
//           return <Card monster={monster} key={monster.id} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
