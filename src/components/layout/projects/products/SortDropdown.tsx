"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Check } from "lucide-react";
import { SortOption } from "./types";

interface SortDropdownProps {
	currentSort: SortOption;
	onSortChange: (option: SortOption) => void;
}

const SortDropdown = ({ currentSort, onSortChange }: SortDropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleSelect = (option: SortOption) => {
		onSortChange(option);
		setIsOpen(false);
	};

	return (
		<div className="flex items-center gap-3 relative z-50">
			<span className="text-sm font-medium text-neutral-500">
				Sort by:
			</span>

			<div className="relative">
				{/* Trigger Button */}
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="flex items-center gap-2 bg-white border border-neutral-200 text-neutral-700 text-sm font-medium rounded-full px-5 py-2.5 hover:border-lime-900 hover:text-lime-900 transition-all shadow-sm active:scale-95"
				>
					{currentSort === "name-asc" ? "Name (A-Z)" : "Name (Z-A)"}
					<motion.div
						animate={{ rotate: isOpen ? 180 : 0 }}
						transition={{ duration: 0.2 }}
					>
						<ChevronDown size={16} />
					</motion.div>
				</button>

				{/* Dropdown Menu */}
				<AnimatePresence>
					{isOpen && (
						<>
							<div
								className="fixed inset-0 z-10"
								onClick={() => setIsOpen(false)}
							/>
							<motion.div
								initial={{ opacity: 0, y: 10, scale: 0.95 }}
								animate={{ opacity: 1, y: 0, scale: 1 }}
								exit={{ opacity: 0, y: 10, scale: 0.95 }}
								transition={{ duration: 0.2 }}
								className="absolute right-0 top-full mt-2 w-48 bg-white border border-neutral-100 rounded-2xl shadow-xl overflow-hidden z-20"
							>
								<div className="p-1 flex flex-col gap-1">
									<SortOptionButton
										label="Name (A-Z)"
										isActive={currentSort === "name-asc"}
										onClick={() => handleSelect("name-asc")}
									/>
									<SortOptionButton
										label="Name (Z-A)"
										isActive={currentSort === "name-desc"}
										onClick={() =>
											handleSelect("name-desc")
										}
									/>
								</div>
							</motion.div>
						</>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

const SortOptionButton = ({
	label,
	isActive,
	onClick,
}: {
	label: string;
	isActive: boolean;
	onClick: () => void;
}) => (
	<button
		onClick={onClick}
		className={`w-full text-left px-4 py-2.5 text-sm rounded-xl flex items-center justify-between transition-colors ${
			isActive
				? "bg-lime-50 text-lime-900 font-bold"
				: "text-neutral-600 hover:bg-neutral-50"
		}`}
	>
		{label}
		{isActive && <Check size={14} />}
	</button>
);

export default SortDropdown;
