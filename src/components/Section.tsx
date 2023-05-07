import { cx } from '@/utils/cx';
import { ReactNode } from 'react';

interface ISection {
  className?: string;
  children: ReactNode;
}

export default function Section(props: ISection) {
  return (
    <section className={cx('my-10', props.className)}>{props.children}</section>
  );
}
