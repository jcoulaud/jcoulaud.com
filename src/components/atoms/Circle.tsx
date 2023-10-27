import { classNames } from '@/helpers/utils';

type Props = {
  color: 'red' | 'orange' | 'green';
  style?: string;
};

export const Circle = ({ color, style }: Props) => {
  switch (color) {
    case 'red':
      return <div className='h-3 w-3 bg-red-500 rounded-full' />;
    case 'orange':
      return (
        <div className={classNames(style ? style : '', 'h-3 w-3 bg-orange-300 rounded-full')} />
      );
    case 'green':
      return (
        <div className={classNames(style ? style : '', 'h-3 w-3 bg-green-500 rounded-full')} />
      );
  }
};
