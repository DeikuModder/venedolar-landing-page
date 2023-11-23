import screenshot from '../assets/app_screenshot.webp'

const DownloadSection = () => {
  return (
    <section id="downloadSection">
      <h2 id='lastH2'>Que estas esperando?</h2>

      <p>Toda la información del dolar en Venezuela a tu alcance desde tu computadora!</p>
      <img src={screenshot} loading='lazy' alt='venedolar-screenshot' id='app_screenshot' className='images'/>
 
      <a 
      href='https://download1325.mediafire.com/5sj6okyq38dgL97ZZtMugI0SyNZVWDNvO8cJcKkyo-CkYbgCzBG8MIVYdYKdCcdz6S71khYc8FD80gT-5hbCzwT5wf1fGeBmIs2IefUH-mkOzWZpqyGdU7qiq3CsIdWp6FQXnMgLqJI_T9DbYoqEL_CJLclRXG-4YKDaM4JSYQse/64boral7ljmi6me/Venedolar_1.0.0.rar'
      className='button download'
      >
          Descarga Venedolar!
      </a>
      <p>*Disponible solo en Windows*</p>
    </section>
  )
}

export default DownloadSection
