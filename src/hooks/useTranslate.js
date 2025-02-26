import { useLocale } from "../contexts/LocaleContext";

const dict = {
  ko: {
    "delete button": "삭제",
  },
  en: {
    "delete button": "Delete",
  },
};

export const useTranslate = () => {
  const { locale } = useLocale();
  const translate = (key) => dict[locale][key] || "";

  return translate;
};
