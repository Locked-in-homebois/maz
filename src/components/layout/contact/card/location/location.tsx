import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";

const Maplocation = () => {
    return (
        <MaxWidthWrapper>
            <main className="w-full rounded-2xl">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463877.31242483313!2d46.492886205368556!3d24.725455373700168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2str!4v1766437131415!5m2!1sen!2str"
                    width="600"
                    height="450"
                    loading="lazy"
                    title="under contact card map"
                    className="rounded-2xl w-full md:h-150 h-100  invert-92 hue-rotate-180 brightness-90 saturate-90 contrast-150"
                ></iframe>
            </main>
        </MaxWidthWrapper>
    );
};

export default Maplocation;
