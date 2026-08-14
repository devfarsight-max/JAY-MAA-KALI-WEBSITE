import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t hairline bg-[#0d1812] py-14">
      <div className="content-width grid gap-12 md:grid-cols-[1.5fr_1fr_1fr] md:gap-8">
        <div>
          <Link to="/" aria-label="Jay Maa Kali home" className="inline-flex">
            <img
              src="/logo.png"
              alt="Jay Maa Kali"
              className="h-24 w-auto rounded-sm object-contain"
            />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
            Collecting, cleaning, preparing and supplying reusable glass bottles
            for business.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-5 text-[10px] text-[#86efac]">Explore</p>
          <div className="flex flex-col gap-3 text-sm text-slate-300">
            {["About", "Bottles", "Process", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="hover:text-white"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow mb-5 text-[10px] text-[#86efac]">Connect</p>
          <p className="text-sm leading-7 text-slate-400">
            7898095588
            <br />
            gabhi5588@gmail.com
            <br />
            Khasra No. 327/1, 327/5, Village Limtara, Post Limtara, Block Dhamdha, Opposite Dhan Society, Kumhari, District Durg, Chhattisgarh – 490042.
          </p>
          <a
            href="#top"
            className="mt-5 inline-flex items-center gap-2 text-sm text-white"
          >
            Back to top <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
      <div className="content-width mt-14 border-t hairline pt-5 text-xs text-slate-500">
        © {new Date().getFullYear()} [Company Name]. All rights reserved.
      </div>
    </footer>
  );
}
