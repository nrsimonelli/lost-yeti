import Image from 'next/image'
import yeti from '@/assets/lost-yeti-full.png'

import hero from '@/assets/hero-image.png'
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

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
})

export default function Home() {
  return (
    <main className='flex flex-col items-center'>
      <nav>
        <div>
          <Image src={nav} alt={''} height={62} width={200} />
          <Button>contact us</Button>
        </div>
      </nav>
      <section className='w-full'>
        <div className='mx-auto'>
          <h1
            className={cn('~text-5xl/7xl font-bold font-rubik', rubik.variable)}
          >
            Step into our office...
          </h1>
          <p className='~text-lg/2xl'>
            Lost Yeti is here to help you find your way in the world of web
            development
          </p>
          <Image alt={''} src={hero} width={600} height={650} />
        </div>
      </section>

      <section className='w-full bg-primary text-primary-foreground'>
        <div className='mx-auto'>
          <h2 className='font-bold ~text-[2rem]/[3rem]'>What we do</h2>
          <p className='~text-lg/2xl'>
            We are a two person team focused on helping small businesses with
            their UX and development needs.
          </p>
          <p className='~text-lg/2xl'>
            Whether you are looking for direction on your current site, or you
            need to create something completely new, Lost Yeti Design Company is
            here to help you on your journey.
          </p>
          <div>
            <Image alt={''} src={ux} width={320} height={355} />
            <h3 className='font-bold ~text-[1.5rem]/[2rem]'>UX design</h3>
            <p className='~text-lg/2xl'>
              From design audits and user testing to full development ready
              mock-ups, our UX designer is ready to help your business put it’s
              best foot forward.
            </p>
          </div>
          <div>
            <Image alt={''} src={ui} width={320} height={355} />
            <h3 className='font-bold ~text-[1.5rem]/[2rem]'>UI development</h3>
            <p className='~text-lg/2xl'>
              From design audits and user testing to full development ready
              mock-ups, our UX designer is ready to help your business put it’s
              best foot forward.
            </p>
          </div>
        </div>
      </section>

      <section className='w-full'>
        <div className='mx-auto'>
          <div>
            <h2 className='font-bold ~text-[2rem]/[3rem]'>
              Need help finding your way?
            </h2>
            <p className='~text-lg/2xl'>
              Reach out to us using the contact form and we can help create
              custom road map to get you were you need to go!
            </p>
            <Button>contact us</Button>
          </div>
          <div>
            <Image alt={''} src={computer} width={454} height={500} />
          </div>
        </div>
      </section>

      <section className='w-full bg-secondary text-secondary-foreground'>
        <div className='mx-auto'>
          <div>
            <h2 className='font-bold ~text-[2rem]/[3rem]'>Services</h2>
            <p className='~text-lg/2xl'>
              Whether you just need to fix a small bug or you need an entire
              website made from scratch- we can help!
            </p>
          </div>
          <div>
            <div>
              <Image src={service1} alt={''} height={262} width={250} />
              <h4 className='font-bold ~text-lg/2xl'>
                Consulting + User testing
              </h4>
            </div>
            <div>
              <Image src={service2} alt={''} height={262} width={250} />
              <h4 className='font-bold ~text-lg/2xl'>
                Feature addtion + Re-design
              </h4>
            </div>
            <div>
              <Image src={service3} alt={''} height={262} width={250} />
              <h4 className='font-bold ~text-lg/2xl'>Concept to coompletion</h4>
            </div>
          </div>
          <div>
            <h3 className='font-bold ~text-[1.5rem]/[2rem]'>
              We love hearing from users!
            </h3>
            <p className='~text-lg/2xl'>
              Feedback from users is one of the best ways to ensure your product
              is working how it needs to. User testing and research can be added
              to any step of our design and development journey, especially in
              the design phase. We also offer user testing and recommendations
              completely on their own!
            </p>
          </div>
        </div>
      </section>

      <section className='w-full bg-accent text-accent-foreground'>
        <div className='mx-auto'>
          <h2 className='font-bold ~text-[2rem]/[3rem]'>Our work</h2>
          <p className='~text-lg/2xl'>Check out some past projects!</p>

          <div>
            <div>
              <Image src={work1} alt={''} height={456} width={550} />
              <div>
                {/* overline styles here */}
                <p className='uppercase font-light ~text-sm/base'>
                  Re-design + sign-up optimzation
                </p>
                <h3 className='font-bold ~text-[1.5rem]/[2rem]'>
                  Gamepoint Performance
                </h3>
                <p className='~text-lg/2xl'>
                  We re-designed their entire site with a focus on helping them
                  get more sign-ups. Our biggest feature addition was a sign-up
                  form that was automised to make the sign up process easier for
                  both users and coaches.
                </p>
              </div>
            </div>
            <div>
              <Image src={work2} alt={''} height={456} width={550} />
              <div>
                {/* overline styles here */}
                <p className='uppercase font-light ~text-sm/base'>
                  Full site construction
                </p>
                <h3 className='font-bold ~text-[1.5rem]/[2rem]'>
                  Lugghead’s Lazer Lab
                </h3>
                <p className='~text-lg/2xl'>
                  We helped a small photographer bring their website to life to
                  not only show off their work, but help give customers a way to
                  contact them.
                </p>
              </div>
            </div>
            <div>
              <Image src={work3} alt={''} height={456} width={550} />
              <div>
                {/* overline styles here */}
                <p className='uppercase font-light ~text-sm/base'>
                  Interactive feature design{' '}
                </p>
                <h3 className='font-bold ~text-[1.5rem]/[2rem]'>
                  Minneapolis Winter League
                </h3>
                <p className='~text-lg/2xl'>
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
      <section className='w-full'>
        {/* call out card */}
        <div className='mx-auto'>
          <div>
            <p>LOST YETI</p>
            {/* THREE BARS EHRE */}
            <div>
              <span />
              <span />
              <span />
            </div>
            {/* CLOSE BUTTON */}
            <div>X</div>
          </div>
          <div>
            <div>
              <Image src={callout} alt={''} height={162} width={416} />
            </div>
            <div>
              <h3 className='font-bold ~text-[1.5rem]/[2rem]'>
                Want to work with us?
              </h3>
              <p className='~text-lg/2xl'>
                Start by telling us about you vision, and together we&apos;ll
                create a custom proposal that works for your needs.
              </p>
              <Button>Contact us</Button>
            </div>
          </div>
        </div>
      </section>
      <footer>
        {/* footer content */}

        <div>
          <Image src={footer} alt={''} height={173} width={246} />
          <p>
            Contact us: <a>lostyetidesignco@gmail.com</a>
          </p>
          <Button>contact us</Button>
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
