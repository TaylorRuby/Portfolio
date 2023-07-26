const Introduction = () => {
  return (
    <section className='bg-cover bg-no-repeat space-y-2'>
      <div className='flex gap-2 text-2xl lg:text-3xl font-medium font-sora'>
        <h1>Hi, I&apos;m Taylor</h1>{' '}
        <div className='ml-1 animate-waving-hand'>👋</div>
      </div>

      <div className='space-y-4'>
        <>
          <ul className='flex flex-col lg:flex-row gap-1 lg:gap-8 ml-5 list-disc text-neutral-700 dark:text-neutral-400'>
            <li>life-long learner</li>
            <li>
              Based in United States
            </li>
          </ul>
        </>
        <p className='leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300'>
          Highly-collaborative and creative frontend-focused Full Stack Software Engineer 
          with nearly 8 years of proven exposure in web and mobile application development 
          in various business domains including SaaS, B2B, B2C, E-Commerce, Real Estate, Education, Booking, Transportation, Healthcare, Insurance and Web3/Blockchain industries.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
