import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {

  return (
    <main className='min-h-screen bg-gray-800 text-slate-100'>
      <div className='fixed h-10 bottom-0 w-screen bg-gradient-to-t from-gray-800/90 to-gray-800/0 pointer-events-none'></div>
      <div className='fixed h-10 top-0 w-screen bg-gradient-to-t to-gray-800/90 from-gray-800/0 pointer-events-none'></div>
      <div className='container grid lg:grid-cols-[19rem_auto] h-full min-h-screen'>
        <div className='border-l border-r border-slate-500 px-8 lg:px-0'>
          <nav className='flex lg:flex-col lg:h-full lg:min-h-screen align-middle fixed top-0 left-0 right-0 lg:left-auto lg:right-auto px-5 lg:w-auto justify-between'>
            <h1 className='fixed top-0 pt-6 lg:pt-16 px-2 text-3xl lg:text-4xl font-bold tracking-wide'>Sait<span className='text-red-300'>&apos;</span>s<br /><span className='font-normal tracking-normal'>Project</span></h1>
            <ul className='space-y-5 flex flex-col pt-6 lg:pt-16 lg:p-12 justify-center h-full ml-auto'>
              <li className='before:content-["↠"] before:text-gray-500 before:absolute before:-left-3 before:-translate-x-full before:-translate-y-1/2 relative before:text-2xl before:top-1/2 before:scale-y-125'>
                <Link className='text-2xl opacity-60 hover:opacity-100 transition-opacity' href={'#about-me'}>
                  About me
                </Link>
              </li>
              <li className='before:content-["↠"] before:text-gray-500 before:absolute before:-left-3 before:-translate-x-full before:-translate-y-1/2 relative before:text-2xl before:top-1/2 before:scale-y-125'>
                <Link className='text-2xl opacity-60 hover:opacity-100 transition-opacity' href={'#experience'}>Experience</Link>
              </li>
              <li className='before:content-["↠"] before:text-gray-500 before:absolute before:-left-3 before:-translate-x-full before:-translate-y-1/2 relative before:text-2xl before:top-1/2 before:scale-y-125'>
                <Link className='text-2xl opacity-60 hover:opacity-100 transition-opacity' href={'#side-projects'}>
                  Side Projects
                </Link>
              </li>
              <li className='ml-6 !mt-3 before:content-["🔗"] before:text-gray-500 before:absolute before:-left-3 before:-translate-x-7 before:-translate-y-1/2 relative before:text-2xl before:top-1/2'>
                <Link className='text-xl opacity-60 hover:opacity-100 hover:text-blue-400 transition-all' href={'/notes'}>
                  Notes
                </Link>
              </li>
              <li className='ml-6 !mt-2 before:content-["🔗"] before:absolute before:-left-3 before:-translate-x-7 before:-translate-y-1/2 relative before:text-2xl before:text-gray-500 before:top-1/2'>
                <Link className='text-xl opacity-60 hover:opacity-100 hover:text-blue-200 transition-all' href={'/tictactoe'}>Tic-Tac-Toe</Link>
              </li>
              <li className='before:content-["↠"] before:text-gray-500 before:absolute before:-left-3 before:-translate-x-full before:-translate-y-1/2 relative before:text-2xl before:top-1/2 before:scale-y-125'>
                <Link className='text-2xl opacity-60 hover:opacity-100 transition-opacity hover:text-yellow-100' href={'#tech-i-use'}>Tech I use</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='px-12 prose prose-invert prose-p:text-lg prose-h1:font-medium prose-h1:text-3xl justify-self-stretch'>
          <div id='about-me' className='flex min-h-screen my-10'>
            <div className='my-auto py-8'>
              <h1>About me.</h1>
              <p><span className='text-green-200 text-xl mr-2'>Hello there!</span> I am Sait. A developer based in Berlin, Germany.</p>
              <p>Over the duration of my <span className='text-green-300'>3 years</span> of studies <span className='text-green-300'>I have been working as a web developer</span> <span className='text-gray-400'>(20h/week)</span>.</p>
              <p>I switched to working full time as a frontend developer in <span className='text-cyan-300'>07.2022</span> and collected <u className='text-cyan-300'>17 months of frontend development experience</u> with a great team of seasoned developers and engineers.</p>
            </div>
          </div>
          <div id="experience" className='flex min-h-screen my-10'>
            <div className='my-auto py-8'>
              <h1>Experience</h1>
              <p>I have worked on several websites and projects. Here are the ones that I can publicly list:</p>
              <ul className='text-2xl'>
                <li><a className='text-amber-200 hover:text-amber-400 transition-all decoration-white/30 hover:decoration-white/90 underline-offset-8 decoration-1' href="https://www.tonhalle.de/">Tonhalle Düsseldorf</a></li>
                <li><a className='text-yellow-200 hover:text-yellow-400 transition-all hover:decoration-white/90 decoration-white/30 underline-offset-8 decoration-1' href="https://beemedic.com/de">Beemedic</a></li>
                <li><a className='text-red-200 hover:text-red-300 hover:decoration-white/90 decoration-white/30 transition-all underline-offset-8 decoration-1' href="https://beefbusters.de/">Beef Busters</a></li>
                <li><a className='text-blue-200 hover:text-blue-400 decoration-white/30 hover:decoration-white/90 transition-all underline-offset-8 decoration-1' href="https://kh-zahnarztpraxis.de/">KH Zahnarztpraxis</a></li>
                <li><a className='text-cyan-200 hover:text-blue-400 decoration-white/30 transition-all underline-offset-8 decoration-1 hover:decoration-white/90' href="https://can-facilityservices.de/">Can Facility Services</a></li>
              </ul>
              <p>In my latest projects I have been using <span className='text-cyan-200'>React + Typescript.</span> I implemented API integrations to the frontend with <span className='text-white'>Tanstack Query</span>, created a graphical application with <span className='text-cyan-200'>konva.js</span>, and solved several problems using different combinations of libraries.</p>
              <p>In my early career I built websites for small companies. I implemented designs and ideas in plain HTML, CSS, JS with Wordpress as the CMS.</p>
            </div>
          </div>
          <div id='side-projects' className='flex min-h-screen my-10'>
            <div className='my-auto py-8'>
              <h1>Side Projects</h1>
              <p>I am creating projects in my free time and showcase them here, since it&apos;s hard for me to show all the things that I built for other companies.</p>
              <p>Here is a list with links:</p>
              <ul className='-mt-3'>
                <li>
                  <Link className='text-xl' href={'/notes'}>
                    <Button className='bg-blue-800 hover:bg-blue-700 text-md w-40'>Notes</Button>
                  </Link>
                  <span> - uses TipTap (Editor)</span>
                </li>
                <li>
                  <Link className='text-xl opacity-80' href={'/tictactoe'}>
                    <Button className='bg-blue-900 hover:bg-blue-700 text-md w-40'>Tic-Tac-Toe </Button>
                  </Link>
                  <span className='!no-underline'> - uses React only</span>

                </li>
              </ul>
              <p>My main frontend framework I use is <span className='text-cyan-300'>React</span>.</p>
            </div>
          </div>
          <div id="tech-i-use" className='flex min-h-screen mb-10 pt-32'>
            <div className='my-auto py-8'>
              <h1 className='!font-bold'>Tech I use</h1>
              <h2 className='!font-normal opacity-90 mb-3 mt-8'>Frontend Frameworks</h2>
              <ul>
                <li className='!text-xl'>Main framework: <strong className='text-cyan-300'>React</strong></li>
                <li className='!text-xl'>Other frameworks I used: <strong><span className='text-green-400'>Vue 2</span>, <span className='text-blue-400'>Alpine.js</span></strong></li>
              </ul>
              <h2 className='!font-normal opacity-90 mb-3 mt-8'>Amazing Libraries</h2>
              <ul>
                <li className='!text-xl'><strong className='opacity-80'>Tanstack Query</strong> - improves everything revolving data fetching</li>
                <li className='!text-xl'><strong className='opacity-80'>shadcn/ui</strong> - component library</li>
                <li className='!text-xl'><strong className='opacity-80'>konva.js</strong> - 2d canvas app library</li>
              </ul>
              <h2 className='!font-normal opacity-90 mb-3 mt-8'>Graphics Applications</h2>
              <a className='text-white/70 hover:text-white/90 transition-all decoration-white/40 underline-offset-4 hover:decoration-white/100 py-3 text-lg' target='_blank' href='https://www.behance.net/Sait1?locale=de_DE'>I started with only Adobe Products and transitioned to Affinity Apps. I also use Figma. For 3D I use blender.</a>
              <h2 className='!font-normal opacity-90'>For Coding</h2>
              <ul>
                <li className='!text-xl'><strong className='opacity-80'>IntelliJ IDEA, VSCode, Neovim</strong> - Any IDE will do</li>
                <li className='!text-xl'><strong className='opacity-80'>Git + Lazygit</strong> - Version Control + TUI App</li>
              </ul>
              <h2 className='!font-normal opacity-90 mb-3 mt-8'>Backend Frameworks</h2>
              <ul>
                <li className='!text-xl'><strong className='opacity-80'>Next.js, Node.js + Express.js</strong> - will probably build my first full backend with Node.js + Express.js</li>
                <li className='!text-xl'><strong className='opacity-80'>Java Spring Boot</strong> - will probably rebuild what I will have built in Node.js + Express.js in this tech stack.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main >
  );
}
