import Slider from "react-slick"

const SliderComp = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  }

  return (
    <Slider {...settings}>
      <div className="flex items-center bg-gray-100 px-6 py-16 my-4">
        <div className="max-w-2xl mx-auto text-center text-white">
          <div className="text-5xl font-bold mb-4 text-gray-900">
            En Kaliteli Ayakkabılar Burada
          </div>
          <div className="text-lg mb-8 text-gray-700">
            Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların
            büyük bir çoğunluğu mizah katılarak veya rastgele sözcükler
            eklenerek değiştirilmişlerdir. Eğer bir Lorem Ipsum pasajı
            kullanacaksanız, metin aralarına utandırıcı sözcükler
            gizlenmediğinden emin olmanız gerekir.
          </div>
          <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-400 mx-auto">
            İncele
          </div>
        </div>
        <img
          className="mx-auto h-[300px] rounded-md"
          src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/759d4164-b25b-4508-988a-b0f57993bfcb/dunk-low-ayakkab%C4%B1s%C4%B1-rmvXxX.png"
          alt="Slider 1"
        />
      </div>

      <div className="flex items-center bg-gray-100 px-6 py-16 my-4 ">
        <div className="max-w-2xl mx-auto text-center text-white">
          <div className="text-5xl font-bold mb-4 text-gray-900">
            Yeni Ayakkabı Modeli!
          </div>
          <div className="text-lg mb-8 text-gray-700">
            Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların
            büyük bir çoğunluğu mizah katılarak veya rastgele sözcükler
            eklenerek değiştirilmişlerdir. Eğer bir Lorem Ipsum pasajı
            kullanacaksanız, metin aralarına utandırıcı sözcükler
            gizlenmediğinden emin olmanız gerekir.
          </div>
          <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-400 mx-auto">
            İncele
          </div>
        </div>
        <img
          className="mx-auto h-[300px]  rounded-md"
          src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0fda0cce-c7d8-4fb3-a3c3-9759be465878/blazer-mid-77-ayakkab%C4%B1-fXC3tG.png"
          alt="Slider 2"
        />
      </div>
    </Slider>
  )
}

export default SliderComp
