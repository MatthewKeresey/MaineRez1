import Image from 'next/image';

interface LogoProps {
  image?: {
    src: string;
    alt: string;
  };
}

const Logo = ({ image }: LogoProps) => (
  <div className="flex items-center">
    {image ? (
      <Image
        src={image.src}
        alt={image.alt}
        width={150}
        height={40}
        className="h-8 w-auto"
      />
    ) : (
      <span className="ml-2 self-center whitespace-nowrap text-2xl font-bold text-primary-500 dark:text-primary-200 md:text-xl">
        TailNext
      </span>
    )}
  </div>
);

export default Logo;
