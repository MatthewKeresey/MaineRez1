import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Widget } from '~/shared/types';
import Background from './Background';

interface WidgetWrapperProps extends Widget {
  children: React.ReactNode;
  containerClass?: string;
}

const WidgetWrapper = ({ children, id = '', hasBackground = false, containerClass }: WidgetWrapperProps) => (
  <section className="relative not-prose scroll-mt-[72px]" id={id}>
    <Background hasBackground={hasBackground} />
    <div
      className={twMerge(
        'relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default',
        containerClass,
      )}
    >
      {children}
    </div>
  </section>
);

export default WidgetWrapper;
