import { FC } from 'react';
//import * as S from './styles'

type TProps = {
  data: {
    [key: string]: string | number;
  };
};

const TableRow: FC<TProps> = ({ data }) => {
  return (
    <tr>
      {Object.values(data).map((value, i) => (
        <td key={i}>{value}</td>
      ))}
    </tr>
  );
};

export default TableRow;
