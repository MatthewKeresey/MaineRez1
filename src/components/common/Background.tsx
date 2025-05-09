import { BackgroundProps } from '~/shared/types';

const Background = ({ children }: BackgroundProps) => {
  return (
    <div className="absolute inset-0 bg-primary-50 dark:bg-slate-800">
      {children}
    </div>
  );
};

export default Background;
