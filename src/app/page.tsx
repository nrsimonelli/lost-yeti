import Image from 'next/image'
import flamingo from '@/assets/flamingo-yeti.png'

import wave from '@/assets/wave.png'

import hero from '@/assets/hero.png'
import ux from '@/assets/ux-yeti.png'
import ui from '@/assets/ui-yeti.png'
import computer from '@/assets/computer-yeti.png'
import service1 from '@/assets/service-consulting.png'
import service2 from '@/assets/service-construction.png'
import service3 from '@/assets/service-concept.png'
import work1 from '@/assets/work-gpp.png'
import work2 from '@/assets/work-lugg.png'
import work3 from '@/assets/work-league.png'
import callout from '@/assets/dial-up.png'
import footer from '@/assets/footer.png'
import nav from '@/assets/nav-logo.png'

import { Rubik } from 'next/font/google'
import { CrossCircledIcon } from '@radix-ui/react-icons'

import { ContactButton } from '@/components/contact-button'
import { cn } from '@/lib/utils'

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
})

export default function Home() {
  return (
    <main className='flex flex-col items-center'>
      <nav className='w-full items-center justify-between inline-flex px-4 shadow-md bg-white z-10'>
        <Image
          src={nav}
          alt={'Lost Yeti Navigation Logo'}
          height={62}
          width={200}
        />
        <ContactButton className='px-8 h-10'>contact us</ContactButton>
      </nav>
      <section className='w-full relative border-b-8 border-secondary bg-[#fafafa] p-0 m-0 ~pt-8/16 xl:pt-0 xl:h-[40rem] flex justify-center min-w-full'>
        {/* container */}
        <div className='flex flex-col xl:flex-row w-full h-full flex-1 items-start xl:items-center xl:justify-center justify-start min-w-full relative xl:max-w-[1156px] xl:w-full'>
          <div className='py-8 px-4 xl:pl-16 flex-col flex flex-1 justify-center md:-mb-24 xl:mb-0'>
            <h1
              className={cn(
                '~text-5xl/7xl font-bold font-rubik',
                rubik.variable,
              )}
            >
              Step into our office...
            </h1>
            <p className='~text-lg/2xl ~mt-4/8 xl:max-w-[600px] md:max-w-[440px]'>
              Lost Yeti is here to help you find your way in the world of web
              development
            </p>
          </div>
          <div className='flex flex-1 w-full shrink-0 justify-center md:justify-end ~-mb-16/32 xl:mb-0'>
            <Image
              alt={'hero image'}
              src={hero}
              width={600}
              height={586}
              className='xl:absolute xl:top-1/2 xl:-translate-y-1/2 xl:right-8 md:right-0 ~max-w-[26rem]/[37.5rem] ~max-h-[25rem]/[36.625rem]'
            />
          </div>
        </div>
      </section>

      <section className='w-full bg-primary text-primary-foreground px-4'>
        <div className='mx-auto'>
          <h2 className='font-bold ~text-[2rem]/[3rem]'>What we do</h2>
          <p className='~text-lg/2xl ~mt-2/4'>
            We are a two person team focused on helping small businesses with
            their UX and development needs.
          </p>
          <p className='~text-lg/2xl ~mt-1/2'>
            Whether you are looking for direction on your current site, or you
            need to create something completely new, Lost Yeti Design Company is
            here to help you on your journey.
          </p>
          <div className='flex flex-col md:space-y-0 space-y-16 md:space-x-16 md:flex-row items-center md:items-start md:justify-between mt-16 max-w-[900px] md:px-8'>
            <div className='max-w-[320px] ~space-y-2/8 flex-1 flex flex-col items-center'>
              <Image
                alt={'Portrait of a UX designer'}
                src={ux}
                width={320}
                height={350}
              />
              <div className='~space-y-1/2 max-w-[320px]'>
                <h3 className='font-bold ~text-[1.5rem]/[2rem]'>UX design</h3>
                <p className='~text-lg/2xl'>
                  From design audits and user testing to development ready
                  mock-ups, our UX designer is ready to help your business put
                  its best foot forward.
                </p>
              </div>
            </div>
            <div className='max-w-[320px] ~space-y-2/8 flex-1 flex flex-col items-center'>
              <Image
                alt={'Portrait of a UI developer'}
                src={ui}
                width={320}
                height={350}
              />
              <div className='~space-y-1/2 max-w-[320px]'>
                <h3 className='font-bold ~text-[1.5rem]/[2rem] '>
                  UI development
                </h3>
                <p className='~text-lg/2xl'>
                  From blank slates to feature rich applications, our UI
                  developer is ready to help you bring your dream site to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full px-4 relative z-10 bg-[linear-gradient(to_bottom,hsl(var(--primary))_0%,hsl(var(--primary))_50%,hsl(var(--secondary))_50%,hsl(var(--secondary))_100%)] py-0'>
        <div className='mx-auto p-4 shadow-callout border-2 border-foreground rounded-2xl bg-background text-foreground'>
          <div className='inline-flex w-full gap-4 items-center'>
            <p className='font-bold'>LOST YETI</p>
            {/* THREE BARS EHRE */}
            <div className='w-full flex flex-col flex-1 space-y-1'>
              <span className='h-px w-full bg-[hsl(0,0,67%)]' />
              <span className='h-px w-full bg-[hsl(0,0,67%)]' />
              <span className='h-px w-full bg-[hsl(0,0,67%)]' />
            </div>
            {/* CLOSE BUTTON */}
            <CrossCircledIcon className='w-7 h-7 text-foreground' />
          </div>
          <div className='border border-foreground rounded-2xl flex flex-row flex-wrap items-stretch justify-center overflow-clip mt-1 min-h-[300px] h-full'>
            <div className='flex-1 basis-[300px] bg-[hsl(350,88,81%)] flex flex-col items-center justify-center'>
              <Image
                src={computer}
                alt={'Yeti smiling infront of a retro computer'}
                height={455}
                width={518}
              />
            </div>
            <div className='flex-1 basis-[300px] ~p-4/8 flex-col flex md:items-start items-center justify-center'>
              <h3 className='font-bold ~text-[1.5rem]/[2rem]'>
                Need help finding your way?
              </h3>
              <p className='~text-lg/2xl ~mt-2/4'>
                Reach out to us using the contact form and we can help create a
                custom road map to get you where you need to go!
              </p>
              <ContactButton className='px-8 h-10 ~mt-4/8'>
                Contact us
              </ContactButton>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full bg-secondary text-secondary-foreground px-4 ~pb-32/80'>
        <div className='mx-auto'>
          <div>
            <h2 className='font-bold ~text-[2rem]/[3rem]'>Services</h2>
            <p className='~text-lg/2xl ~mt-2/4'>
              Whether you just need to fix a small bug or you need an entire
              website made from scratch--we can help!
            </p>
          </div>
          <div className='flex-col ~my-8/16 flex md:items-start items-center justify-center md:flex-row flex-wrap ~gap-8/16'>
            <div className='max-w-[250px]'>
              <Image
                src={service1}
                alt={'Yeti smiling with binoculars'}
                height={262}
                width={250}
              />
              <h4 className='text-center font-bold ~text-lg/2xl ~mt-2/4'>
                Consulting + User testing
              </h4>
            </div>
            <div className='max-w-[250px]'>
              <Image
                src={service2}
                alt={'Yeti in construction gear'}
                height={262}
                width={250}
              />
              <h4 className='text-center font-bold ~text-lg/2xl ~mt-2/4'>
                Feature addtion + Re-design
              </h4>
            </div>
            <div className='max-w-[250px]'>
              <Image
                src={service3}
                alt={'A retro computer with creative ideas'}
                height={262}
                width={250}
              />
              <h4 className='text-center font-bold ~text-lg/2xl ~mt-2/4'>
                Concept to completion
              </h4>
            </div>
          </div>
          <div>
            <h3 className='font-bold ~text-[1.5rem]/[2rem]'>
              We love hearing from users!
            </h3>
            <p className='~text-lg/2xl ~mt-2/4'>
              Feedback from users is one of the best ways to ensure your product
              is working how it needs to. User testing and research can be added
              to any step of our design and development journey, especially in
              the design phase. We also offer user testing and recommendations
              completely on their own!
            </p>
          </div>
        </div>
      </section>

      <section className='w-full bg-accent text-accent-foreground relative px-4 z-50'>
        <div className='mx-auto z-40 bg-transparent'>
          <div className='h-auto w-full absolute top-0 left-0 -z-10 overflow-y-hidden -translate-y-1/4 bg-transparent'>
            <Image
              src={wave}
              height={720}
              width={1440}
              alt={'A big blue wave'}
              className='w-full bottom-0'
            />
            <Image
              src={flamingo}
              height={407}
              width={507}
              alt='Yeti on a flamingo floating device'
              className='absolute right-0 -translate-x-1/3 top-0 object-contain w-[300px] h-[200px] lg:w-[407px] lg:h-[307px] xl:w-[507px] xl:h-[407px] z-0'
            />
          </div>
          <h2 className='font-bold ~text-[2rem]/[3rem]'>Our work</h2>
          <p className='~text-lg/2xl ~mt-2/4'>Check out some past projects!</p>

          <div className='~mt-8/16 ~space-y-16/32'>
            <div className='flex flex-col gap-4 md:gap-32 md:flex-row'>
              <Image
                src={work1}
                alt={'Gamepoint Performance logo'}
                height={456}
                width={550}
                className='flex-1 w-full h-auto max-w-[280px] md:max-w-[550px]'
              />
              <div className='flex-1'>
                {/* overline styles here */}
                <p className='uppercase font-light ~text-sm/base'>
                  Re-design + sign-up optimzation
                </p>
                <h3 className='font-bold ~text-[1.5rem]/[2rem]'>
                  Gamepoint Performance
                </h3>
                <p className='~text-lg/2xl ~mt-2/4'>
                  We re-designed their entire site with a focus on helping them
                  get more sign-ups. Our biggest feature addition was a sign-up
                  form that was automised to make the sign up process easier for
                  both users and coaches.
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-4 md:gap-32 md:flex-row'>
              <Image
                src={work2}
                alt={"Lugghead's Lazer Lab logo"}
                height={456}
                width={550}
                className='flex-1 w-full h-auto max-w-[280px] md:max-w-[550px]'
              />
              <div className='flex-1'>
                {/* overline styles here */}
                <p className='uppercase font-light ~text-sm/base'>
                  Full site construction
                </p>
                <h3 className='font-bold ~text-[1.5rem]/[2rem]'>
                  Lugghead’s Lazer Lab
                </h3>
                <p className='~text-lg/2xl ~mt-2/4'>
                  We helped a small photographer bring their website to life to
                  not only show off their work, but help give customers a way to
                  contact them.
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-4 md:gap-32 md:flex-row'>
              <Image
                src={work3}
                alt={'Minneapolis Winter League logo'}
                height={456}
                width={550}
                className='flex-1 w-full h-auto max-w-[280px] md:max-w-[550px]'
              />
              <div className='flex-1'>
                {/* overline styles here */}
                <p className='uppercase font-light ~text-sm/base'>
                  Interactive feature design{' '}
                </p>
                <h3 className='font-bold ~text-[1.5rem]/[2rem]'>
                  Minneapolis Winter League
                </h3>
                <p className='~text-lg/2xl ~mt-2/4'>
                  A local sports league needed a feature rich website to help
                  players sign-up, report scores, and keep track of standings.
                  We were excited to help them build a website that fit their
                  needs and also create a design built around fun and community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full px-4 bg-accent text-accent-foreground'>
        {/* call out card */}
        <div className='mx-auto p-4 shadow-callout border-2 border-foreground rounded-2xl bg-background text-foreground'>
          <div className='inline-flex w-full gap-4 items-center'>
            <p className='font-bold'>LOST YETI</p>
            {/* THREE BARS EHRE */}
            <div className='w-full flex flex-col flex-1 space-y-1'>
              <span className='h-px w-full bg-[hsl(0,0,67%)]' />
              <span className='h-px w-full bg-[hsl(0,0,67%)]' />
              <span className='h-px w-full bg-[hsl(0,0,67%)]' />
            </div>
            {/* CLOSE BUTTON */}
            <CrossCircledIcon className='w-7 h-7 text-foreground' />
          </div>
          <div className='border border-foreground rounded-2xl flex flex-row flex-wrap items-stretch justify-center overflow-clip mt-1 min-h-[300px] h-full'>
            <div className='flex-1 basis-[300px] bg-[hsl(232,100,93%)] p-4 flex flex-col items-center justify-center'>
              <Image src={callout} alt={''} height={162} width={416} />
            </div>
            <div className='flex-1 basis-[300px] ~p-4/8 flex-col flex md:items-start items-center justify-center'>
              <h3 className='font-bold ~text-[1.5rem]/[2rem]'>
                Want to work with us?
              </h3>
              <p className='~text-lg/2xl ~mt-2/4'>
                Start by telling us about you vision, and together we&apos;ll
                create a custom proposal that works for your needs.
              </p>
              <ContactButton className='px-8 h-10 ~mt-4/8'>
                Contact us
              </ContactButton>
            </div>
          </div>
        </div>
      </section>
      <footer className='w-full px-4 lg:px-0 border-t-8 border-secondary flex flex-col justify-start pt-8'>
        {/* footer content */}
        <div className='flex max-w-screen-lg mx-auto flex-col gap-8 md:gap-0 items-center md:items-center md:justify-between w-full md:flex-row'>
          <Image src={footer} alt={''} height={173} width={246} className='' />
          <p>
            Contact us: <a>lostyetidesignco@gmail.com</a>
          </p>
          <ContactButton className='px-8 h-10 w-full md:w-auto'>
            Contact us
          </ContactButton>
        </div>
      </footer>
    </main>
  )
}

// h1 -> hero title
// h2 -> section titles
// h3 -> subtitles or section subheadings
// h4 -> photo captions
// p -> body text
