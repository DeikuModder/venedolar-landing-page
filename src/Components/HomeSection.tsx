import AppLogo from '../assets/logo.webp'

const HomeSection = () => {
  return (
    <section id='homeSection'>
        <div className='venedolarContainer'>
            <h2 id='venedolarTitle'>VENEDOLAR</h2>
            <img src={AppLogo} alt='Venedolar-logo' className='appLogo' loading='eager'/>
        </div>
        
        <a href='#downloadSection' className='button' id='goDownloadBtn'>Descarga ya!</a>
    </section>
  )
}

export default HomeSection
