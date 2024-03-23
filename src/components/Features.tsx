import Card from "./Card";
import Feature1 from "../assets/features_3.webp";
import Feature2 from "../assets/features_1.webp";
import Feature3 from "../assets/features_2.webp";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation("global");

  return (
    <section id="features" className="darkerBg">
      <div className="p-8 sm:flex sm:items-center sm:justify-evenly">
        <Card title={`${t("features.1.title")} 🖥️`} image={Feature1}>
          <>
            <ul className="text-2xl list-disc list-inside">
              {t("features.1.description")}
              <li>BCV</li>
              <li>Paralelo</li>
              <li>Binance</li>
              <li>CriptoDolar</li>
              <li>DolarToday</li>
            </ul>
          </>
        </Card>
        <Card title={`${t("features.2.title")} 💱`} image={Feature2}>
          <p className="text-2xl text-center">{t("features.2.description")}</p>
        </Card>
        <Card title={`${t("features.3.title")} 💶`} image={Feature3}>
          <>
            <ul className="text-2xl list-disc list-inside">
              {t("features.3.description")}
              <li>{t("features.3.extras.euro")}</li>
              <li>{t("features.3.extras.russian-ruble")}</li>
              <li>{t("features.3.extras.turkish-lira")}</li>
              <li>{t("features.3.extras.chinese-yuan")}</li>
            </ul>
          </>
        </Card>
      </div>
    </section>
  );
};

export default Features;
