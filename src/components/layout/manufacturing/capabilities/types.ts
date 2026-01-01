export interface CapabilityItem {
	id: number;
	translationKey: string;
}

export interface UseCaseItem {
	id: number;
	translationKey: string;
}

export interface SpecItem {
	labelKey: string;
	valueKey: string;
}

export interface TrustItem {
	id: number;
	titleKey: string;
	descKey: string;
}

export interface ManufacturingContent {
	eyebrow: string;
	title: string;
	subtitle: string;
	capabilities: CapabilityItem[];
	useCasesTitle: string;
	useCases: UseCaseItem[];
	specsTitle: string;
	specs: SpecItem[];
	specNote: string;
	cta: {
		title: string;
		text: string;
		primaryBtn: string;
		secondaryBtn: string;
		whatsapp: string;
	};
	trust: TrustItem[];
}
