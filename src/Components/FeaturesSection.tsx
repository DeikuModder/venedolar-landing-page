import featureImg_1 from "../assets/features_1.webp";
import featureImg_2 from "../assets/features_2.webp";
import featureImg_3 from "../assets/features_3.webp";

const FeaturesSection = () => {
  return (
    <>
      <section className="featuresSubSection" id="featuresSection">
        <h3>Selecciona el monitor que necesites!</h3>

        <p>
          Elige cualquiera de los 5 monitores de dólar que ofrece la aplicación,
          todos actualizados en tiempo real.
        </p>
        <img
          src={featureImg_3}
          loading="lazy"
          alt="monitores"
          id="featureImg_3"
          className="images"
        />
      </section>

      <section className="featuresSubSection">
        <h3>Realiza conversiones sin salir de la app!</h3>

        <p>
          La aplicación te ofrece una ventana para poder convertir la cantidad
          que necesites de dolares a bolivares, y viceversa, además te indica
          que monitor estas usando para la conversión.
        </p>
        <img
          src={featureImg_1}
          loading="lazy"
          alt="conversor-dolar"
          id="featureImg_1"
          className="images"
        />
      </section>

      <section className="featuresSubSection">
        <h3>Consulta otras monedas del BCV!</h3>

        <p>
          El BCV no solo tiene la equivalencia del dólar, si necesitas saber el
          precio del Euro, el Yen, la Lira Turca o el Rublo Ruso, todas estan a
          tu alcance con un solo botón!
        </p>
        <img
          src={featureImg_2}
          loading="lazy"
          alt="otras-monedas-bcv"
          id="featureImg_2"
          className="images"
        />
      </section>
    </>
  );
};

export default FeaturesSection;
