import { includes } from "@acdh-oeaw/lib";
import type { LocaleObject } from "vue-i18n-routing";

import type en from "~/i18n/messages/en/common.json";
import type projectEn from "~/i18n/messages/en/project.json";

import { project } from "./project.config";

export const locales = ["en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = project.defaultLocale;

export const files = [
	{
		code: "en" as const,
		language: "en",
		files: ["en/common.json", "en/project.json", "en/crm.json"],
	},
] satisfies Array<LocaleObject>;

export type Messages = typeof en & typeof projectEn;

export interface Schema {
	message: Messages;
}

export function isValidLocale(value: string): value is Locale {
	return includes(locales, value);
}

export interface Translations extends Record<Locale, Messages> {
	en: typeof en & typeof projectEn;
}
