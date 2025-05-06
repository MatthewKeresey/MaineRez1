import Image from 'next/image';

interface LogoProps {
  image?: {
    src: string;
    alt: string;
  };
}

const Logo = ({ image }: LogoProps) => (
  <div className="flex items-center justify-center w-full py-4">
    {image ? (
      <Image
        src={image.src}
        alt={image.alt}
        width={500}
        height={500}
        className="h-24 w-auto object-contain"
        priority
      />
    ) : (
      <span className="ml-2 self-center whitespace-nowrap text-4xl font-bold text-primary-500 dark:text-primary-200 md:text-3xl">
        MaineRez
      </span>
    )}
  </div>
);

export default Logo;
