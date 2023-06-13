import { cx } from '@/utils/cx';
import { ReactNode } from 'react';

interface ISection {
  className?: string;
  id?: string;
  children: ReactNode;
}

export default function Section(props: ISection) {
  return (
    <section className={cx('my-10', props.className)} id={props.id}>
      {props.children}
    </section>
  );
}
