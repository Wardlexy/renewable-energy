import {
  ArrowRight,
  BatteryCharging,
  Building2,
  Check,
  CircleCheck,
  Factory,
  Gauge,
  Globe,
  Handshake,
  House,
  Leaf,
  LineChart,
  Mail,
  MapPin,
  Play,
  ShieldCheck,
  SunMedium,
  Wind,
  Zap,
} from 'lucide-react';
import { BoomerangVideoBg } from './components/BoomerangVideoBg';
import { FadeDown } from './components/FadeDown';
import { StaggeredFade } from './components/StaggeredFade';

const navItems = [
  { label: 'Renewables', href: '#renewables' },
  { label: 'Strategies', href: '#strategies' },
  { label: 'Photovoltaic', href: '#photovoltaic' },
  { label: 'Wind Systems', href: '#wind-systems' },
  { label: 'Packages', href: '#packages' },
];

const metrics = [
  { value: '420 MW', label: 'development pipeline' },
  { value: '18%', label: 'average bill reduction target' },
  { value: '24/7', label: 'monitoring and field response' },
  { value: '36 mo', label: 'typical payback window' },
];

const services = [
  {
    id: 'photovoltaic',
    title: 'Solar arrays for every roofline',
    copy: 'Engineering-grade photovoltaic systems for homes, factories, warehouses, campuses, and distributed commercial portfolios.',
    Icon: SunMedium,
  },
  {
    id: 'wind-systems',
    title: 'Wind and hybrid generation',
    copy: 'Site studies, turbine selection, grid integration, and hybrid design for regions where wind improves generation continuity.',
    Icon: Wind,
  },
  {
    id: 'renewables',
    title: 'Storage-backed reliability',
    copy: 'Battery architecture and load planning that keeps essential operations running when grid prices spike or outages hit.',
    Icon: BatteryCharging,
  },
  {
    id: 'strategies',
    title: 'Energy strategy office',
    copy: 'Consumption modelling, incentive mapping, procurement scenarios, and board-ready planning for a staged energy transition.',
    Icon: LineChart,
  },
];

const projectCases = [
  {
    name: 'Industrial Rooftop Program',
    type: 'Manufacturing estate',
    impact: '31% peak load offset',
    detail: 'Phased solar rollout across five warehouses with a single monitoring layer for operations.',
    Icon: Factory,
  },
  {
    name: 'Commercial Storage Retrofit',
    type: 'Retail network',
    impact: '6.4 MWh storage plan',
    detail: 'Battery-backed demand control for stores that need stable cold chain and lighting loads.',
    Icon: Building2,
  },
  {
    name: 'Residential Clean Power Bundle',
    type: 'Premium housing cluster',
    impact: '148 homes mapped',
    detail: 'Packaged home solar, maintenance, and shared procurement for faster neighborhood adoption.',
    Icon: House,
  },
];

const process = [
  'Audit the site load profile and tariff exposure',
  'Model generation, storage, incentives, and payback',
  'Engineer the system and coordinate permits',
  'Deploy, monitor, maintain, and report performance',
];

const packages = [
  {
    name: 'Home Ready',
    copy: 'A simple residential package for homeowners who want lower monthly energy cost and basic outage resilience.',
    points: ['Solar roof design', 'Smart inverter setup', 'Annual health check'],
  },
  {
    name: 'Business Core',
    copy: 'A commercial package for offices, retail sites, and mid-size facilities with predictable daytime load.',
    points: ['Load profile study', 'PV and storage model', 'Monitoring dashboard'],
  },
  {
    name: 'Enterprise Grid',
    copy: 'A portfolio plan for factories, campuses, estates, and large operations that need staged capex control.',
    points: ['Multi-site roadmap', 'Hybrid system design', 'Executive performance reports'],
  },
];

function SectionIntro({
  label,
  title,
  copy,
}: {
  label: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center text-center md:mb-14">
      <p className="mb-3 text-sm font-medium text-[#4A7144]">{label}</p>
      <h2 className="text-balance text-3xl font-medium leading-tight text-[#31463B] md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-600 md:text-base">{copy}</p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] text-gray-950">
      <section className="relative flex min-h-[100dvh] flex-col overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 top-[200px] z-0">
          <BoomerangVideoBg />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F7F7F7] via-[#f7f7f7]/10 to-[#1b2b20]/10" />
        </div>

        <nav className="relative z-20 mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 py-4 md:px-8 md:py-5">
          <div className="flex items-center gap-3 md:gap-5">
            <img src="/image.png" alt="LGPSM" className="h-6 w-auto md:h-7" />
            <button
              type="button"
              className="flex items-center gap-1.5 text-sm text-black transition-opacity hover:opacity-70"
              aria-label="Language selector"
            >
              <Globe className="h-4 w-4" strokeWidth={1.8} />
              <span>En</span>
            </button>
          </div>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                href={item.href}
                key={item.label}
                className="text-sm text-gray-700 transition-colors hover:text-gray-900"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <a
              href="#network"
              className="hidden rounded-full border border-black/20 px-4 py-2 text-sm text-gray-700 transition-colors hover:text-gray-900 sm:block md:px-6 md:py-2.5"
            >
              Project Brief
            </a>
            <a
              href="#clean-energy"
              className="rounded-full bg-black px-4 py-2 text-sm text-white transition-colors hover:bg-gray-900 md:px-6 md:py-2.5"
            >
              Clean Energy
            </a>
          </div>
        </nav>

        <main className="relative flex flex-1 flex-col items-center px-4 pt-4 md:px-8 md:pt-8">
          <div className="relative z-10 flex flex-col items-center">
            <FadeDown>
              <div className="liquid-glass mb-3 flex items-center gap-1.5 rounded-full border border-black/20 px-3 py-1.5 text-xs text-[#31463B] md:gap-2 md:px-4 md:py-2 md:text-sm">
                <SunMedium className="h-3.5 w-3.5" strokeWidth={1.8} />
                <ArrowRight className="h-3 w-3 md:h-3.5 md:w-3.5" strokeWidth={1.8} />
                <Globe className="h-3.5 w-3.5" strokeWidth={1.8} />
                <span className="hidden sm:inline">Delivering practical clean power</span>
                <span className="sm:hidden">Clean power</span>
                <ArrowRight className="h-3 w-3 md:h-3.5 md:w-3.5" strokeWidth={1.8} />
                <Leaf className="h-3.5 w-3.5" strokeWidth={1.8} />
              </div>
            </FadeDown>

            <StaggeredFade
              text="Renewable Power For Tomorrow, Infinite Clean Solutions"
              className="mb-3 max-w-5xl px-4 text-center text-3xl font-normal leading-tight sm:text-4xl md:mb-4 md:text-5xl lg:text-6xl"
              style={{ color: '#31463B' }}
            />

            <FadeDown delay={0.5}>
              <p className="mb-4 max-w-3xl px-4 text-center text-sm text-gray-600 md:mb-5 md:text-base lg:text-lg">
                Sustainable Energy Platform. Engineering, deploying, and servicing solar arrays
                for homes, businesses, and large-scale operations worldwide.
              </p>
            </FadeDown>

            <FadeDown delay={0.7}>
              <div className="flex flex-col items-center gap-3 px-4 sm:flex-row md:gap-4">
                <a
                  href="#packages"
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3C684D] to-[#4A7144] py-2 pl-4 pr-2 text-sm text-white transition-opacity hover:opacity-90 active:scale-[0.98] md:pl-6 md:text-base"
                >
                  <Leaf className="h-4 w-4" strokeWidth={1.8} />
                  <span className="whitespace-nowrap">Explore Options</span>
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-full md:h-8 md:w-8"
                    style={{ background: 'linear-gradient(59deg, #567A5E 0%, #78A873 100%)' }}
                  >
                    <Play className="h-3 w-3 fill-white text-white md:h-4 md:w-4" />
                  </span>
                </a>

                <a
                  href="#network"
                  className="flex items-center gap-2 rounded-full bg-white py-2 pl-4 pr-2 text-sm text-gray-700 shadow-[0_18px_45px_rgba(49,70,59,0.08)] transition-colors hover:bg-gray-50 active:scale-[0.98] md:pl-6 md:text-base"
                >
                  <span className="whitespace-nowrap">Start Network</span>
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-full md:h-8 md:w-8"
                    style={{ background: 'linear-gradient(59deg, #EEEEEE 0%, #CBCBCB 100%)' }}
                  >
                    <ArrowRight className="h-3 w-3 text-black md:h-4 md:w-4" strokeWidth={1.8} />
                  </span>
                </a>
              </div>
            </FadeDown>
          </div>
        </main>
      </section>

      <section className="relative z-10 border-y border-[#31463B]/10 bg-[#F7F7F7] px-4 py-8 md:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-[8px] bg-white/70 p-5 shadow-[0_18px_55px_rgba(49,70,59,0.06)]">
              <p className="text-2xl font-semibold text-[#31463B] md:text-4xl">{metric.value}</p>
              <p className="mt-2 text-sm leading-5 text-gray-600">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="renewables" className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            label="What it solves"
            title="Energy systems that lower cost, reduce exposure, and keep operations moving."
            copy="Every engagement starts with the same commercial question: how much energy can be shifted to cleaner generation without disrupting daily operations."
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ id, title, copy, Icon }) => (
              <a
                key={title}
                id={id}
                href="#network"
                className="group rounded-[8px] border border-[#31463B]/10 bg-white p-6 shadow-[0_18px_55px_rgba(49,70,59,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(49,70,59,0.1)]"
              >
                <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-[#E8F0E8] text-[#3C684D]">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-medium leading-6 text-[#31463B]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{copy}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#3C684D]">
                  Plan this
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="strategies" className="bg-white px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-medium text-[#4A7144]">Strategy layer</p>
            <h2 className="text-balance text-3xl font-medium leading-tight text-[#31463B] md:text-5xl">
              A renewable plan that the finance team can actually approve.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-6 text-gray-600 md:text-base">
              We turn energy ambition into a staged investment case: site data, production
              forecast, incentive strategy, operating model, and maintenance risk in one view.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {['Tariff exposure', 'Payback model', 'Permit readiness', 'Maintenance plan'].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CircleCheck className="h-5 w-5 text-[#3C684D]" strokeWidth={1.8} />
                    <span>{item}</span>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="rounded-[8px] border border-[#31463B]/10 bg-[#F7F7F7] p-4 shadow-[0_24px_80px_rgba(49,70,59,0.08)]">
            <div className="rounded-[8px] bg-[#31463B] p-5 text-white md:p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-white/65">Energy review</p>
                  <p className="mt-2 text-2xl font-medium">Site Portfolio A</p>
                </div>
                <Gauge className="h-8 w-8 text-[#A8C8A3]" strokeWidth={1.6} />
              </div>

              <div className="mt-8 grid gap-3">
                {[
                  ['Solar yield', '78% fit', 'w-[78%]'],
                  ['Storage priority', '62% fit', 'w-[62%]'],
                  ['Grid savings', '84% fit', 'w-[84%]'],
                ].map(([label, value, width]) => (
                  <div key={label}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-white/75">{label}</span>
                      <span>{value}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div className={`h-full rounded-full bg-[#A8C8A3] ${width}`} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ['CAPEX', 'staged'],
                  ['OPEX', 'lower'],
                  ['Carbon', 'tracked'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[8px] bg-white/8 p-4">
                    <p className="text-xs text-white/55">{label}</p>
                    <p className="mt-2 text-lg font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="photovoltaic" className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            label="Project portfolio"
            title="Three clear buying paths for the audiences that matter most."
            copy="Each path is designed around a different adoption pattern: industrial load reduction, commercial reliability, and residential clean-power rollout."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {projectCases.map(({ name, type, impact, detail, Icon }) => (
              <article
                key={name}
                className="overflow-hidden rounded-[8px] border border-[#31463B]/10 bg-white shadow-[0_18px_55px_rgba(49,70,59,0.06)]"
              >
                <div className="h-44 bg-[linear-gradient(135deg,#31463B_0%,#4A7144_52%,#A8C8A3_100%)] p-5 text-white">
                  <div className="flex h-full flex-col justify-between">
                    <Icon className="h-9 w-9" strokeWidth={1.6} />
                    <p className="max-w-[14rem] text-2xl font-medium leading-tight">{impact}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm font-medium text-[#4A7144]">{type}</p>
                  <h3 className="mt-2 text-xl font-medium text-[#31463B]">{name}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">{detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="wind-systems" className="bg-[#EDF3ED] px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-medium text-[#4A7144]">Delivery model</p>
            <h2 className="text-balance text-3xl font-medium leading-tight text-[#31463B] md:text-5xl">
              From first audit to live performance reporting.
            </h2>
          </div>
          <div className="grid gap-3">
            {process.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-[8px] bg-white p-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#31463B] text-sm font-medium text-white">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-medium text-[#31463B]">{item}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {index === 0 &&
                      'We start with bills, interval data, equipment, roof conditions, and operational constraints.'}
                    {index === 1 &&
                      'The decision model compares solar, wind, storage, grid tariffs, and incentive timing.'}
                    {index === 2 &&
                      'Engineering, procurement, contractor coordination, and safety controls move in one plan.'}
                    {index === 3 &&
                      'After go-live, stakeholders receive performance data, maintenance actions, and savings reports.'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            label="Packages"
            title="A clearer offer means the visitor knows where to start."
            copy="Choose a starting point based on site size, operational risk, and how much of the energy transition should be managed in-house."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.name}
                className="flex flex-col rounded-[8px] border border-[#31463B]/10 bg-white p-6 shadow-[0_18px_55px_rgba(49,70,59,0.06)]"
              >
                <div className="mb-8 flex items-center justify-between">
                  <h3 className="text-2xl font-medium text-[#31463B]">{pkg.name}</h3>
                  <ShieldCheck className="h-7 w-7 text-[#3C684D]" strokeWidth={1.7} />
                </div>
                <p className="text-sm leading-6 text-gray-600">{pkg.copy}</p>
                <div className="mt-8 grid gap-3">
                  {pkg.points.map((point) => (
                    <div key={point} className="flex items-center gap-3 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-[#3C684D]" strokeWidth={2} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#network"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-[#31463B]/15 px-5 py-3 text-sm font-medium text-[#31463B] transition hover:bg-[#31463B] hover:text-white"
                >
                  Request scope
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="network" className="bg-white px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[8px] bg-[#31463B] p-6 text-white md:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-medium text-[#A8C8A3]">Next action</p>
            <h2 className="text-balance text-3xl font-medium leading-tight md:text-5xl">
              Start with a practical energy review.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/70 md:text-base">
              Share the site location, monthly load, and preferred investment model. We will
              identify which renewable option should be modelled first.
            </p>
          </div>

          <div id="clean-energy" className="rounded-[8px] bg-white p-5 text-gray-900 md:p-6">
            <div className="grid gap-4">
              <div className="flex items-center gap-3 rounded-[8px] bg-[#F7F7F7] p-4">
                <MapPin className="h-5 w-5 text-[#3C684D]" strokeWidth={1.8} />
                <span className="text-sm">Site location and roof area</span>
              </div>
              <div className="flex items-center gap-3 rounded-[8px] bg-[#F7F7F7] p-4">
                <Zap className="h-5 w-5 text-[#3C684D]" strokeWidth={1.8} />
                <span className="text-sm">Monthly load and tariff profile</span>
              </div>
              <div className="flex items-center gap-3 rounded-[8px] bg-[#F7F7F7] p-4">
                <Handshake className="h-5 w-5 text-[#3C684D]" strokeWidth={1.8} />
                <span className="text-sm">Capex, lease, or power purchase path</span>
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=lexdwardo%40gmail.com&su=Clean%20energy%20project%20review"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#31463B] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#26372f]"
              >
                <Mail className="h-4 w-4" strokeWidth={1.8} />
                Open Gmail Brief
              </a>
              <a
                href="mailto:lexdwardo@gmail.com?subject=Clean%20energy%20project%20review"
                className="text-center text-sm font-medium text-[#31463B] underline decoration-[#31463B]/25 underline-offset-4 transition hover:decoration-[#31463B]"
              >
                lexdwardo@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#31463B]/10 px-4 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src="/image.png" alt="LGPSM" className="h-6 w-auto" />
            <span>Renewable energy planning, deployment, and service.</span>
          </div>
          <div className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-[#31463B]">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
