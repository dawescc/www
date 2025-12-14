import "./index.css";
import logo from "./logo.svg";
import Section, { SectionHeader } from "./components/section";
import { MailIcon, TwitterIcon, GitHubIcon } from "./components/icons";
import Chip from "./components/chip";
import RunYTD from "./components/strava";
import Card from "./components/card";

const LINKS = [
  { name: "GitHub", url: "https://github.com/dawescc", Icon: GitHubIcon },
  { name: "Twitter", url: "https://x.com/dawescc", Icon: TwitterIcon },
  { name: "Mail", url: "mailto:hello@dawes.cc", Icon: MailIcon },
];

const FEATURED_PROJECTS = [
  { name: "oklch.fyi", description: "oklch color generator & converter.", url: "https://www.oklch.fyi/", Icon: GitHubIcon },
  { name: "Less", description: "Budgeting turned upside down.", url: "https://www.lessless.app/", Icon: GitHubIcon },
];

function App() {
  return (
    <div className='antialiased'>
      <main className='mx-auto max-w-[692px] px-6 py-12 leading-relaxed sm:py-16'>
        <div className='mt-8 mb-6 flex items-center gap-4'>
          <div className='size-11 select-none flex items-center justify-center'>
            <img
              src={logo}
              alt='Logo'
            />
          </div>
          <div className='flex flex-col items-start justify-center'>
            <span className='font-medium leading-snug'>Ryan Dawes</span>
            <span className='whitespace-nowrap leading-snug'>Application Developer for the Web</span>
          </div>
        </div>

        <Section
          id='about'
          marginless>
          <p className='mb-6'>
            I'm a Senior engineer with{" "}
            <a
              aria-label='Sanametrix'
              className='link-outline article-underline font-medium'
              href='https://sanametrix.com'
              rel='noreferrer'
              target='_blank'>
              Sanametrix
            </a>
            . I build effective, dependable apps that are easy to use and love. I focus on the details that matter to keep things lightweight. I've
            run <RunYTD />
            km this year.
          </p>
        </Section>

        <Section
          id='links'
          marginless
          className='mt-6 flex w-full flex-wrap justify-start gap-3'>
          {LINKS.map((link) => (
            <Chip key={link.name}>
              <a
                className='flex items-center gap-1.5 h-9'
                aria-label={link.name}
                href={link.url}
                rel='noreferrer'
                target='_blank'>
                <link.Icon />
                {link.name}
              </a>
            </Chip>
          ))}
        </Section>

        {/* <Section id="projects" className='sm:mt-32'>
          <SectionHeader>Projects</SectionHeader>
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
            {FEATURED_PROJECTS.map((project) => (
              <Card key={project.name} isLink href={project.url} title={project.name} subtitle={project.description}>
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl shadow-warm bg-surface-1">
                  <project.Icon />
                </div>
              </Card>
            ))}
          </div>
        </Section> */}

        <Section id='footer'>
          <p className='select-none text-xs'>© Ryan Dawes 2025</p>
        </Section>
      </main>
    </div>
  );
}

export default App;
