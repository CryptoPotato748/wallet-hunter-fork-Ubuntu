// links 
import Link from 'next/link';
import { RiTelegramLine, RiTwitterXLine, RiDiscordLine, RiMailLine } from 'react-icons/ri';

const Socials = () => {
  const linkStyles = 'text-white hover:text-accent transition-all duration-300';

  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href='https://t.me/rexa233_eth'>
        <div className={linkStyles}>
          <RiTelegramLine />
        </div>
      </Link>
      <Link href='https://x.com/Rexa233_sol?t=yTQmCPie8poMEmADC9gjqw&s=09'>
        <div className={linkStyles}>
          <RiTwitterXLine />
        </div>
      </Link>
      <Link href='https://discord.com/rexa23'>
        <div className={linkStyles}>
          <RiDiscordLine />
        </div>
      </Link>
      <Link href='mailto:dolphrexa@gmail.com'>
        <div className={linkStyles}>
          <RiMailLine />
        </div>
      </Link>
    </div>
  );
};

export default Socials;
