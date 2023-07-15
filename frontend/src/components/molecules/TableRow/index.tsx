import { FC } from 'react';
//import * as S from './styles'

type TProps = {
  data: {
    [key: string]: string | number;
  };
  onClick?: () => void;
};

const TableRow: FC<TProps> = ({ data, onClick = () => {} }) => {
  return (
    <tr onClick={onClick}>
      {Object.values(data).map((value, i) => (
        <td key={i}>{value}</td>
      ))}
    </tr>
  );
};

export default TableRow;
