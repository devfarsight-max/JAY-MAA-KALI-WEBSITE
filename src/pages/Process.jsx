import { motion } from "framer-motion";
import {
  ArrowDown,
  Check,
  ClipboardCheck,
  Package,
  Sparkles,
  Truck,
} from "lucide-react";
import Button from "../components/common/Button";
import Container from "../components/common/Container";

const steps = [
  [
    "01",
    "Collection",
    "Used and empty wine, whisky and other glass bottles are gathered for the next stage.",
    Truck,
  ],
  [
    "02",
    "Cleaning",
    "Bottles are cleaned and prepared for a closer look.",
    Sparkles,
  ],
  [
    "03",
    "Inspection",
    "Each batch moves through an inspection and quality check.",
    ClipboardCheck,
  ],
  [
    "04",
    "Packing",
    "Prepared bottles are organized into cartons for careful handling.",
    Package,
  ],
  [
    "05",
    "Supply",
    "Ready material is supplied to distilleries and business customers.",
    Check,
  ],
];
const stageNotes = [
  [
    "Collection",
    "Material enters the yard, where incoming loads can be grouped and prepared for sorting.",
    "/images/factory-yard.jpg",
  ],
  [
    "Washing",
    "Brushes, tanks and water turn a rough incoming load into something ready for closer handling.",
    "/images/wash-line.jpg",
  ],
  [
    "Storage",
    "Crates and clear staging areas keep prepared material organized while the next requirement is confirmed.",
    "/images/crate-storage.jpg",
  ],
];

export default function Process() {
  return (
    <main>
      <section className="grain relative isolate overflow-hidden border-b hairline pb-24 pt-40">
        <img
          src="/images/wash-line.jpg"
          alt="JAY MAA KALI washing line"
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 z-0 bg-[#06100b]/80" />
        <Container className="relative z-10">
          <p className="eyebrow mb-8 text-xs text-[#86efac]">Our process</p>
          <h1 className="display display-lg max-w-5xl font-semibold">
            From collection
            <br />
            <span className="text-[#86efac]">to ready supply.</span>
          </h1>
          <p className="mt-9 max-w-xl text-lg leading-8 text-slate-300">
            A visible, sequential workflow built around sorting, washing,
            inspection and careful handling.
          </p>
        </Container>
      </section>
      <section className="section-pad">
        <Container>
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="eyebrow mb-5 text-[10px] text-[#86efac]">
                01 / The workflow
              </p>
              <h2 className="display text-4xl font-semibold md:text-6xl">
                Five considered steps.
              </h2>
            </div>
            <ArrowDown className="hidden text-[#86efac] md:block" />
          </div>
          <div className="relative ml-3 border-l border-[#86efac]/40 md:ml-0 md:border-l-0">
            {steps.map(([number, title, description, Icon], index) => (
              <motion.article
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.06 }}
                key={number}
                className="relative grid gap-x-6 gap-y-3 border-b hairline py-8 pl-8 md:grid-cols-[56px_minmax(0,1fr)_32px] md:items-start md:py-10 md:pl-0 lg:grid-cols-[56px_minmax(220px,300px)_minmax(0,1fr)_40px]"
              >
                <span className="absolute -left-[7px] top-10 h-3 w-3 rounded-full bg-[#86efac] shadow-[0_0_18px_#86efac] md:static md:mt-2 md:h-2 md:w-2" />
                <span className="eyebrow text-[11px] text-[#86efac]">
                  {number}
                </span>
                <h3 className="display text-2xl font-semibold md:col-start-2 md:row-start-1 md:text-3xl lg:col-start-2">
                  {title}
                </h3>
                <p className="max-w-prose text-sm leading-7 text-slate-400 md:col-start-2 md:row-start-2 md:text-base lg:col-start-3 lg:row-start-1">
                  {description}
                </p>
                <Icon
                  className="hidden text-[#86efac] md:col-start-3 md:row-start-1 md:block lg:col-start-4"
                  size={20}
                  strokeWidth={1.5}
                />
              </motion.article>
            ))}
          </div>
        </Container>
      </section>
      <section className="section-pad bg-[#f1f4ed] text-[#06100b]">
        <Container className="grid gap-12 md:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="eyebrow mb-5 text-[10px] text-[#159447]">
              02 / Why it matters
            </p>
            <h2 className="display text-4xl font-semibold md:text-6xl">
              A clearer process feels better at every handoff.
            </h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-slate-600">
              A neutral, visible workflow makes it easier to plan storage,
              schedule transport and make confident purchasing decisions.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <article className="rounded-3xl border border-[#06100b]/10 bg-white p-6 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.7)] text-[#06100b]">
              <h3 className="display text-2xl font-semibold">Fewer surprises</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Clear checks and consistent handling make every stage more
                predictable, reducing risk for buyers and carriers alike.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-slate-600">
                <li>Simple batch notes that explain condition and format.</li>
                <li>Visible sorting and wash steps so buyers understand what they receive.</li>
              </ul>
            </article>
            <article className="rounded-3xl border border-[#06100b]/10 bg-white p-6 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.7)] text-[#06100b]">
              <h3 className="display text-2xl font-semibold">Steady supply</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Organized packing, reliable inspection and clear timing help the
                next buyer plan inventory with confidence.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-slate-600">
                <li>Material is grouped by condition and prepared for easy transport.</li>
                <li>Consistent handoffs mean fewer delays and more dependable arrivals.</li>
              </ul>
            </article>
          </div>
        </Container>
      </section>
      <section className="section-pad border-y hairline bg-[#0d1812]">
        <Container className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(280px,.9fr)] md:gap-12">
          <div>
            <p className="eyebrow mb-5 text-[10px] text-[#86efac]">
              02 / Quality focus
            </p>
            <h2 className="display text-4xl font-semibold md:text-6xl">
              Preparation you can follow.
            </h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-slate-300 md:text-lg">
              Our tanks and washing line make the work visible, from the first
              rinse through organized handling for the next stage.
            </p>
          </div>
          <div className="relative aspect-[4/3] min-h-[240px] overflow-hidden border hairline">
            <img
              src="/images/wash-tanks.jpg"
              alt="Factory washing tanks"
              className="h-full w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
            />
          </div>
        </Container>
      </section>
      <section className="section-pad">
        <Container>
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow mb-5 text-[10px] text-[#86efac]">
              03 / What each stage solves
            </p>
            <h2 className="display text-4xl font-semibold md:text-6xl">
              A process you can see.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {stageNotes.map(([title, description, image], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group border hairline bg-[#0d2115] p-4"
              >
                <div className="aspect-[1.2] overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <p className="eyebrow mt-5 text-[10px] text-[#86efac]">
                  0{index + 1}
                </p>
                <h3 className="display mt-3 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {description}
                </p>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-[#86efac] py-20 text-white">
        <Container className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="display max-w-2xl text-5xl font-semibold leading-[.92] md:text-7xl">
            Good supply starts with a clear process.
          </h2>
          <Button
            to="/contact"
            variant="outline"
            className="w-fit border-[#06100b] text-[#06100b] hover:bg-[#c2d4cb] hover:text-[#9deebb]"
          >
            Start a conversation
          </Button>
        </Container>
      </section>
    </main>
  );
}
