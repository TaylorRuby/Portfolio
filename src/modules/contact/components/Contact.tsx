import { ReactNode } from 'react';
import { HiOutlineMail as EmailIcon } from 'react-icons/hi';

import Button from '@/common/components/elements/Button';

const CONTACTS = [
  {
    title: 'taylorhargravesruby@gmail.com',
    icon: <EmailIcon size={18} />,
    link: 'mailto:taylorhargravesruby@gmail.com',
    eventName: 'Contact: Click Email Button',
  }
];

interface ContactProps {
  title: string;
  icon: ReactNode;
  link: string;
  eventName: string;
}

const Contact = () => {
  const handleAction = (link: string) => window.open(link, '_blank');

  return (
    <section className='space-y-5'>
      <p className='dark:text-neutral-300'>
        You can reach out to me directly by sending an email, texting on
        Telegram, or connecting on social media.
      </p>
      <div className='flex gap-3'>
        {CONTACTS?.map((contact: ContactProps, index: number) => (
          <Button
            key={index}
            onClick={() => handleAction(contact?.link)}
            icon={contact?.icon}
            data-umami-event={contact?.eventName}
          >
            {contact?.title}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Contact;
