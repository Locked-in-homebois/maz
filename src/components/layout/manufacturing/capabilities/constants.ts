import { ManufacturingContent } from "./types";

export const MANUFACTURING_CONTENT: ManufacturingContent = {
	eyebrow: "Capabilities.eyebrow",
	title: "Capabilities.title",
	subtitle: "Capabilities.subtitle",
	capabilities: [
		{ id: 1, translationKey: "Capabilities.colA.items.1" },
		{ id: 2, translationKey: "Capabilities.colA.items.2" },
		{ id: 3, translationKey: "Capabilities.colA.items.3" },
		{ id: 4, translationKey: "Capabilities.colA.items.4" },
		{ id: 5, translationKey: "Capabilities.colA.items.5" },
		{ id: 6, translationKey: "Capabilities.colA.items.6" },
	],
	useCasesTitle: "Capabilities.colA.useCasesTitle",
	useCases: [
		{ id: 1, translationKey: "Capabilities.colA.useCases.1" },
		{ id: 2, translationKey: "Capabilities.colA.useCases.2" },
		{ id: 3, translationKey: "Capabilities.colA.useCases.3" },
		{ id: 4, translationKey: "Capabilities.colA.useCases.4" },
	],
	specsTitle: "Capabilities.specs.title",
	specs: [
		{
			labelKey: "Capabilities.specs.labels.maxSize",
			valueKey: "Capabilities.specs.values.maxSize",
		},
		{
			labelKey: "Capabilities.specs.labels.thickness",
			valueKey: "Capabilities.specs.values.thickness",
		},
		{
			labelKey: "Capabilities.specs.labels.tolerance",
			valueKey: "Capabilities.specs.values.tolerance",
		},
		{
			labelKey: "Capabilities.specs.labels.finish",
			valueKey: "Capabilities.specs.values.finish",
		},
		{
			labelKey: "Capabilities.specs.labels.leadTime",
			valueKey: "Capabilities.specs.values.leadTime",
		},
		{
			labelKey: "Capabilities.specs.labels.delivery",
			valueKey: "Capabilities.specs.values.delivery",
		},
	],
	specNote: "Capabilities.specs.note",
	cta: {
		title: "Capabilities.cta.title",
		text: "Capabilities.cta.text",
		primaryBtn: "Capabilities.cta.primaryBtn",
		secondaryBtn: "Capabilities.cta.secondaryBtn",
		whatsapp: "Capabilities.cta.whatsapp",
	},
	trust: [
		{
			id: 1,
			titleKey: "Capabilities.trust.1.title",
			descKey: "Capabilities.trust.1.desc",
		},
		{
			id: 2,
			titleKey: "Capabilities.trust.2.title",
			descKey: "Capabilities.trust.2.desc",
		},
		{
			id: 3,
			titleKey: "Capabilities.trust.3.title",
			descKey: "Capabilities.trust.3.desc",
		},
	],
};
