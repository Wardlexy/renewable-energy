import { ArrowRight, Globe, Leaf, Play } from 'lucide-react';
import { BoomerangVideoBg } from './components/BoomerangVideoBg';
import { FadeDown } from './components/FadeDown';
import { StaggeredFade } from './components/StaggeredFade';

const navItems = ['Renewables', 'Strategies', 'Photovoltaic', 'Wind Systems', 'Packages'];

function App() {
  return (
    <div className="relative flex h-[100dvh] flex-col overflow-hidden bg-[#F7F7F7]">
      <div className="fixed inset-x-0 bottom-0 top-[200px] z-0">
        <BoomerangVideoBg />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F7F7] via-[#f7f7f7]/10 to-[#1b2b20]/10" />
      </div>

      <nav className="relative z-10 flex items-center justify-between px-4 py-4 md:px-8 md:py-6">
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
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              key={item}
              className="text-sm text-gray-700 transition-colors hover:text-gray-900"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="#sign-in"
            className="hidden rounded-full border border-black/20 px-4 py-2 text-sm text-gray-700 transition-colors hover:text-gray-900 sm:block md:px-6 md:py-2.5"
          >
            Sign In
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
              <span aria-hidden="true">☀️</span>
              <ArrowRight className="h-3 w-3 md:h-3.5 md:w-3.5" strokeWidth={1.8} />
              <span aria-hidden="true">🌍</span>
              <span className="hidden sm:inline">Delivering power innovate</span>
              <span className="sm:hidden">Power innovate</span>
              <ArrowRight className="h-3 w-3 md:h-3.5 md:w-3.5" strokeWidth={1.8} />
              <span aria-hidden="true">🌱</span>
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
                href="#options"
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
    </div>
  );
}

export default App;
