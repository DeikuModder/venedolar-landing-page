import screenshot from "../assets/app_screenshot.webp";

const DownloadSection = () => {
  return (
    <section id="downloadSection">
      <h2 id="lastH2">Qué estas esperando!?</h2>

      <p>
        Toda la información del dólar en Venezuela al alcance de tu escritorio!
      </p>
      <img
        src={screenshot}
        loading="lazy"
        alt="venedolar-screenshot"
        id="app_screenshot"
        className="images"
      />

      <a
        href="https://download847.mediafire.com/ch4uvsa6ah3gjjSMO5uCi9YD1_VhRclj5vgykASAJXfK8hp8P3IRP5BWOaAKD6yLT-WhLGuFKiN2AA7svHauvpmPC1vofTKq9tmWFa2KAuHzwbktsLV1wDJcM8VCm2C8nAUtfjFRYAGzC-wH_1yky80kyKVb4otgdHusy7bcO6su/8c0jvgkky6qn5p9/Venedolar_v1.0.0.rar"
        className="button download"
      >
        Descarga Venedolar!
      </a>
      <p>*Disponible solo en Windows*</p>
    </section>
  );
};

export default DownloadSection;
