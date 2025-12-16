interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="w-full px-20 ">
      <h2 className="text-3xl border-b pb-4 mb-8 border-gray-200 font-bold text-gray-900">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
