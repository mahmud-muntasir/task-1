import Link from 'next/link';
import ButtonIcon from '@/components/ButtonIcon';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const socialLinks = [
  {
    icon: FaFacebook,
    url: 'https://facebook.com',
  },
  {
    icon: FaInstagram,
    url: 'https://instagram.com',
  },
  {
    icon: FaTwitter,
    url: 'https://twitter.com',
  },
];

const HeroSection = () => {
  return (
    <section
      className="min-h-screen bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/images/heroBg.png')" }}
    >
      <div className="container pt-44">
        <h1 className="text-7xl font-bold leading-32 mb-16">
          Trusted{' '}
          <span className="bg-[var(--foreground)] text-[var(--background)] px-4 py-0 rounded-2xl">
            Partner
          </span>{' '}
          for <br />
          Your Website{' '}
          <span className="bg-[var(--foreground)] text-[var(--background)] px-4 py-0 rounded-2xl">
            Develop.
          </span>
        </h1>
        <div className="grid grid-cols-[1fr_3fr]">
          <div className="relative">
            <div className="absolute bottom-10 left-[-60px] rotate-270 h-fit w-fit">
              <p className="text-lg text-[var(--foreground)] mb-2">
                @williamrey
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-[1px] bg-[var(--foreground)]"></div>
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="text-lg" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <p className="text-lg mb-12">
              Building the worlds best marketing websites for over a decade.
              Your trusted partner for strategy, design, and dev.
            </p>
            <ButtonIcon variant={'phone'} label={'Schedule a Call'} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
