import { motion } from "framer-motion";
import {
  ArrowDownRight,
  Boxes,
  Check,
  MoveUpRight,
  Recycle,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import Container from "../components/common/Container";

const bottles = [
  [
    "01",
    "Collection yard",
    "Recovered material arrives at the facility before sorting and preparation.",
    "/images/sorting-yard.jpg",
  ],
  [
    "02",
    "Sorting area",
    "Collected material is separated and organized for the cleaning workflow.",
    "/images/crate-storage.jpg",
  ],
  [
    "03",
    "Washing system",
    "The wash line prepares material through a visible, sequential process.",
    "/images/wash-line.jpg",
  ],
];
const steps = ["Collection", "Cleaning", "Inspection", "Packing", "Supply"];
const facilityScenes = [
  ["01", "Sort with intention", "/images/sorting-yard.jpg"],
  ["02", "Wash with care", "/images/wash-tanks.jpg"],
  ["03", "Store for the next move", "/images/crate-storage.jpg"],
];
const capabilities = [
  [
    "Reliable sourcing",
    "A steady collection network for used bottles across the region.",
    Recycle,
  ],
  [
    "Quality checked",
    "Every batch is cleaned, inspected and organized before it leaves us.",
    ShieldCheck,
  ],
  [
    "Ready to move",
    "Packed with care so your team can plan handling and transport clearly.",
    Truck,
  ],
];

export default function Home() {
  return (
    <main>
      <section className="grain relative isolate min-h-190 overflow-hidden border-b hairline pt-32">
        <img
          src="/images/factory-yard.jpg"
          alt="JAY MAA KALI facility collection yard"
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-35"
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(90deg, rgba(6,16,11,.98) 0%, rgba(6,16,11,.83) 43%, rgba(6,16,11,.2) 100%)",
          }}
        />
        <Container className="relative z-10 flex min-h-157.5 flex-col justify-between pb-16">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="eyebrow mb-8 text-xs text-[#86efac]"
            >
              Glass reuse / business supply
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="display display-xl max-w-5xl font-semibold"
            >
              REUSING GLASS.
              <br />
              <span className="text-[#86efac]">REBUILDING VALUE.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-9 max-w-md text-base leading-7 text-slate-300"
            >
              We collect used wine and whisky bottles, clean and inspect them,
              pack them with care, and supply them to distilleries, bottlers and
              beverage businesses.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-5 max-w-md text-base leading-7 text-slate-300"
            >
              Every shipment is prepared to help buyers plan inventory, reduce
              handling risk, and keep material moving smoothly from collection to
              reuse.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button to="/bottles">Explore bottle supply</Button>
              <Button to="/process" variant="outline">
                See our process
              </Button>
            </motion.div>
          </div>
          <div className="mt-10 flex items-end justify-between border-t hairline pt-5">
            <p className="eyebrow text-[10px] text-slate-500">
              Chhattisgarh / Distillery supply
            </p>
            <ArrowDownRight className="text-[#86efac]" />
          </div>
        </Container>
      </section>
      <section className="section-pad border-b hairline bg-[#0d1812]">
        <Container className="grid items-center gap-12 md:grid-cols-[1.05fr_.95fr]">
          <div className="relative aspect-[1.15] overflow-hidden border hairline">
            <img
              src="/images/wash-line.jpg"
              alt="Brush washing line inside the facility"
              className="h-full w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
            />
            <div className="absolute bottom-4 left-4 border border-white/20 bg-[#07150d]/80 px-3 py-2 backdrop-blur-sm">
              <p className="eyebrow text-[10px] text-[#86efac]">Inside the facility</p>
            </div>
          </div>
          <div>
            <p className="eyebrow mb-5 text-[10px] text-[#86efac]">01 / The work behind the supply</p>
            <h2 className="display max-w-xl text-4xl font-semibold md:text-6xl">Real work. Visible progress.</h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-slate-300">From the first collection yard to the washing line, every stage gives recovered material a clearer path forward. The facility is built around practical handling, careful movement and repeatable quality.</p>
            <div className="mt-10 grid max-w-lg grid-cols-3 border-t hairline pt-5">
              <div><p className="display text-3xl font-semibold text-[#86efac]">05</p><p className="mt-2 text-xs text-slate-500">workflow stages</p></div>
              <div><p className="display text-3xl font-semibold text-[#86efac]">1:1</p><p className="mt-2 text-xs text-slate-500">clear contact</p></div>
              <div><p className="display text-3xl font-semibold text-[#86efac]">B2B</p><p className="mt-2 text-xs text-slate-500">supply focus</p></div>
            </div>
          </div>
        </Container>
      </section>
      <section className="border-b hairline bg-[#86efac] py-7 text-white">
        <Container className="grid gap-6 text-sm font-semibold md:grid-cols-3">
          <p className="max-w-2xl text-sm leading-7 text-slate-100 md:col-span-3">
            Practical supply starts with dependable collection, detailed checks,
            and packaging that makes pickup efficient for every business.
          </p>
          {capabilities.map(([title, description, Icon], index) => (
            <div
              key={title}
              className="flex gap-4 border-l border-[#06100b]/25 pl-4"
            >
              <Icon size={21} strokeWidth={1.5} />
              <div>
                <p className="eyebrow mb-2 text-[10px] opacity-60">
                  0{index + 1} / {title}
                </p>
                <p className="max-w-xs font-medium leading-6">{description}</p>
              </div>
            </div>
          ))}
        </Container>
      </section>
      <section className="section-pad bg-[#f1f4ed] text-[#06100b]">
        <Container className="grid gap-12 md:grid-cols-[.8fr_1.2fr]">
          <p className="eyebrow text-[10px] text-[#159447]">01 / The premise</p>
          <div>
            <h2 className="display max-w-3xl text-4xl font-semibold leading-[.98] md:text-6xl">
              The bottle you need may already exist.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-8 text-slate-600">
              JAY MAA KALI creates a practical link between recovered glass and
              the businesses ready to use it again. We make the next step easier
              with organized supply, visible quality checks and straightforward
              communication.
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              We work with buyers to understand bottle formats, timing and
              handling needs so each load arrives ready for the next commercial
              stage.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 border-b border-[#06100b] pb-2 text-sm font-semibold"
            >
              About our approach <MoveUpRight size={16} />
            </Link>
          </div>
        </Container>
      </section>
      <section className="section-pad">
        <Container>
          <div className="mb-14 flex items-end justify-between">
            <div>
              <p className="eyebrow mb-5 text-[10px] text-[#86efac]">
                02 / Bottle supply
              </p>
              <h2 className="display text-4xl font-semibold md:text-6xl">
                Built for reuse.
              </h2>
            </div>
            <Link
              to="/bottles"
              className="hidden text-sm text-slate-400 hover:text-white md:block"
            >
              View all bottles <MoveUpRight className="ml-1 inline" size={15} />
            </Link>
          </div>
          <div className="grid gap-px bg-[rgba(196,224,202,.14)] md:grid-cols-3">
            {bottles.map(([number, title, description, image], index) => (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                key={title}
                className="group bg-[#06100b] p-6 transition-colors hover:bg-[#0d1812]"
              >
                <div className="relative mb-8 aspect-[1.2] overflow-hidden border hairline bg-[#0d1812]">
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover opacity-80 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-[#06100b]/25" />
                </div>
                <p className="eyebrow text-[10px] text-[#86efac]">{number}</p>
                <h3 className="display mt-3 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {description}
                </p>
                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold"
                >
                  Enquire <MoveUpRight size={15} />
                </Link>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>
      <section className="section-pad border-y hairline bg-[#0d1812]">
        <Container>
          <p className="eyebrow mb-5 text-[10px] text-[#86efac]">
            03 / One clear workflow
          </p>
          <h2 className="display max-w-3xl text-4xl font-semibold md:text-6xl">
            Collect. Clean.
            <br />
            <span className="text-[#86efac]">Pack. Supply.</span>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400">
            Each stage is structured so material reaches the next step with
            fewer surprises. From yard arrival to final supply, the workflow is
            built around consistency and clarity.
          </p>
          <div className="mt-16 grid border-l hairline md:grid-cols-5 md:border-l-0">
            {steps.map((step, index) => (
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 18 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                key={step}
                className="relative border-b hairline p-5 pl-8 last:border-b-0 md:border-b-0 md:border-l md:pl-5"
              >
                <span className="eyebrow text-[10px] text-slate-500">
                  0{index + 1}
                </span>
                <h3 className="display mt-10 text-xl">{step}</h3>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      <section className="section-pad">
        <Container>
          <div className="mb-14 flex items-end justify-between">
            <div><p className="eyebrow mb-5 text-[10px] text-[#86efac]">04 / How the facility moves</p><h2 className="display text-4xl font-semibold md:text-6xl">Every stage has a place.</h2></div>
            <Link to="/process" className="hidden text-sm text-slate-400 hover:text-white md:block">See the full process <MoveUpRight className="ml-1 inline" size={15} /></Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {facilityScenes.map(([number, title, image], index) => <motion.article key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} className="group relative overflow-hidden border hairline">
              <div className="aspect-[1.1] overflow-hidden"><img src={image} alt={title} className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" /></div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#06100b] via-[#06100b]/80 to-transparent px-5 pb-5 pt-16"><p className="eyebrow text-[10px] text-[#86efac]">{number}</p><h3 className="display mt-2 text-2xl font-semibold">{title}</h3></div>
            </motion.article>)}
          </div>
        </Container>
      </section>
      <section className="section-pad">
        <Container className="grid gap-12 md:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="eyebrow mb-5 text-[10px] text-[#86efac]">
              04 / Made for business
            </p>
            <h2 className="display text-4xl font-semibold md:text-6xl">
              A simpler way to source reusable glass.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              Whether you are buying for production, storage or quality testing,
              our service is designed to keep reusable glass moving with fewer
              delays.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <article className="surface p-6">
              <Boxes className="mb-14 text-[#86efac]" />
              <h3 className="display text-2xl font-semibold">
                For distilleries
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Build a dependable supply channel for production runs, test
                batches and new product lines.
              </p>
            </article>
            <article className="surface p-6">
              <ShieldCheck className="mb-14 text-[#86efac]" />
              <h3 className="display text-2xl font-semibold">For bottlers</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Discuss bottle formats, quantities and preparation needs with
                one clear point of contact.
              </p>
            </article>
          </div>
        </Container>
      </section>
      <section className="section-pad border-t hairline bg-[#f1f4ed] text-[#06100b]">
        <Container className="grid gap-10 md:grid-cols-[1fr_.7fr]">
          <div>
            <p className="eyebrow mb-5 text-[10px] text-[#159447]">
              05 / A better next step
            </p>
            <h2 className="display max-w-3xl text-4xl font-semibold md:text-6xl">
              Less waste.
              <br />
              More utility.
            </h2>
            <p className="mt-7 max-w-lg text-lg leading-8 text-slate-600">
              Responsible handling means extending the useful lifecycle of glass
              bottles and preparing them for the next business that needs them.
            </p>
          </div>
          <ul className="grid content-end gap-3 text-sm text-slate-600">
            {[
              "Quality focus",
              "Organized packing",
              "Business supply",
              "Sustainability mindset",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 border-b border-[#06100b]/15 pb-3"
              >
                <Check size={15} className="text-[#159447]" /> {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section className="bg-[#86efac] py-20 text-white">
        <Container className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-5 text-[10px] opacity-60">
              Let us talk supply
            </p>
            <h2 className="display max-w-2xl text-5xl font-semibold leading-[.92] md:text-7xl">
              Looking for reusable glass bottles?
            </h2>
          </div>
          <Button
            to="/contact"
            variant="outline"
            className="w-fit border-[#06100b] text-[#06100b] hover:bg-[#eaf5f0] hover:text-[#86efac]"
          >
            Discuss your requirement
          </Button>
        </Container>
      </section>
    </main>
  );
}
