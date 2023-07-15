import { FC, ReactNode } from 'react';
import * as S from './styles'

type TProps = {
    children?: ReactNode,
    columns?: string[],
    className?: string
};

const TableList: FC<TProps> = ({ children, columns, className }) => {
    return(
        <S.Table className={className}>
        <thead>
          <tr>
            {columns?.map((column, index) => (
                <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </S.Table>
    );
};

export default TableList;