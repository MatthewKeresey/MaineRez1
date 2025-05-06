import Image from 'next/image';

interface LogoProps {
  image?: {
    src: string;
    alt: string;
  };
}

const Logo = ({ image }: LogoProps) => (
  <div className="flex items-center justify-center w-full py-2">
    {image ? (
      <Image
        src={image.src}
        alt={image.alt}
        width={500}
        height={500}
        className="h-14 w-auto object-contain"
        priority
      />
    ) : (
      <span className="ml-2 self-center whitespace-nowrap text-5xl font-bold text-primary-500 dark:text-primary-200 md:text-4xl">
        MaineRez
      </span>
    )}
  </div>
);

export default Logo;
