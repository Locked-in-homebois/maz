import { Ruler, ShieldCheck, LightbulbIcon } from "lucide-react";
import MaxWidthWrapper from "../../ui/MaxWidthWrapper";
import SectionHeader from "../../ui/SectionHeader";

const gridAtrb = "bg-gray-200 border border-gray-600 rounded-2xl";

const phy = () => {
  return (
    <main>
      <MaxWidthWrapper>
        <div className="bg-white rounded-4xl flex flex-col gap-10 items-center ">
          <h1 className="font-black text-5xl">My Philosophy</h1>
          <p className="text-gray-600 text-xl text-center max-w-225  ">
            I am driven by a personal commitment to safety, quality, and
            accountability. When you hire me, you get my full attention on every
            beam designed and every stone laid.
          </p>
          <div className="grid md:grid-cols-3 gap-10 bg-red-700">
            <div className={gridAtrb}>
              <div className="bg-white rounded-lg shadow-sm"></div>
            </div>
            <div className={gridAtrb}>
              <div className="bg-white rounded-lg shadow-sm"></div>
            </div>
            <div className={gridAtrb}>
              <div className="bg-white rounded-lg shadow-sm"></div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
};

export default phy;
