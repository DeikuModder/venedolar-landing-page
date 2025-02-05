import Card from "./Card";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation("global");

  return (
    <section
      id="features"
      className="p-2 md:p-12 flex flex-col justify-center items-center gap-2 md:flex-row md:justify-normal"
    >
      <article className="border-2 border-[#15d63f] w-full md:w-[40%] bg-neutral-900 rounded-lg flex flex-col items-center justify-center gap-2 text-center text-white p-4 md:p-8">
        <h2 className="text-2xl font-bold text-[#15d63f]">
          {t("features.article.title")} 🤔
        </h2>

        <p className="text-xl">{t("features.article.text")}</p>
      </article>
      <ul className="w-full md:h-screen overflow-y-auto flex flex-col gap-4 p-4 md:justify-center">
        <Card title={`${t("features.1.title")} 🖥️`}>
          <>
            <ul className="md:text-2xl text-center md:text-start">
              {t("features.1.description")}
              <li className="font-light">BCV</li>
              <li className="font-light">Paralelo</li>
            </ul>
          </>
        </Card>
        <Card title={`${t("features.2.title")} 💱`}>
          <p className="text-center md:text-start md:text-2xl">
            {t("features.2.description")}
          </p>
        </Card>
        <Card title={`${t("features.3.title")} 💶`}>
          <>
            <ul className="md:text-2xl text-center md:text-start">
              {t("features.3.description")}
              <div className="flex flex-col items-center gap-2 md:flex-row md:gap-8">
                <li className="font-light">{t("features.3.extras.euro")}</li>
                <li className="font-light">
                  {t("features.3.extras.russian-ruble")}
                </li>
                <li className="font-light">
                  {t("features.3.extras.turkish-lira")}
                </li>
                <li className="font-light">
                  {t("features.3.extras.chinese-yuan")}
                </li>
              </div>
            </ul>
          </>
        </Card>
        <Card title={`${t("features.4.title")} 🛒`}>
          <p className="md:text-2xl text-center md:text-start">
            {t("features.4.description")}
          </p>
        </Card>
        <Card title={`${t("features.5.title")} 🔃`}>
          <p className="md:text-2xl text-center md:text-start">
            {t("features.5.description")}
          </p>
        </Card>
      </ul>
    </section>
  );
};

export default Features;
