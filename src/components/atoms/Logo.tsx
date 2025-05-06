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
        width={500}
        height={500}
        className="h-12 w-auto object-contain"
        priority
      />
    ) : (
      <span className="ml-2 self-center whitespace-nowrap text-2xl font-bold text-primary-500 dark:text-primary-200 md:text-xl">
        MaineRez
      </span>
    )}
  </div>
);

export default Logo;
