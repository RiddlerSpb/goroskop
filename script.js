const horoscopes = {
  aries: "Сегодня для Овна наступит удачный день для торговли криптовалютами. Будьте внимательны к деталям и не забывайте о безопасности данных.",
  taurus: "Тельцам рекомендуется не спешить с инвестициями в новые проекты. Лучше пересмотрите текущий портфель.",
  gemini: "Близнецы, сегодняшний день подходит для обновления торговых стратегий. Будьте готовы к переменам.",
  cancer: "Ракам сегодня стоит быть осторожнее в финансовых вопросах. Прислушивайтесь к интуиции.",
  leo: "Львам день подходит для долгосрочных инвестиций. Подумайте о пересмотре текущих инвестиционных стратегий.",
  virgo: "Для Девы сегодняшний день предоставляет возможность для экспериментов с криптовалютами. Будьте готовы к новым знакомствам.",
  libra: "Весы, обратите внимание на стабильные активы. Сегодняшний день подходит для укрепления инвестиционного портфеля.",
  scorpio: "Скорпионам стоит оценить риски перед новыми инвестициями. Будьте готовы к финансовым изменениям.",
  sagittarius: "Стрельцам сегодня предстоит непредсказуемый день на рынке. Оставайтесь гибкими и адаптивными.",
  capricorn: "Козерогам рекомендуется сконцентрироваться на долгосрочных целях. Оцените свои возможности и ресурсы.",
  aquarius: "Водолеям сегодня стоит оценить возможности на рынке. Подумайте о диверсификации инвестиционного портфеля.",
  pisces: "Рыбам сегодня предстоит день для отдыха и переосмысления текущих финансовых стратегий."
};

function generateHoroscope() {
  const zodiacSign = document.getElementById('zodiacSigns').value;
  const horoscopeText = horoscopes[zodiacSign];
  
  if (horoscopeText) {
      const horoscopeElement = document.getElementById('horoscopeResult');
      horoscopeElement.textContent = horoscopeText;
  } else {
      alert("Выберите знак Зодиака");
  }
}

function shareHoroscope() {
  const horoscopeText = document.getElementById('horoscopeResult').textContent;
  const shareUrl = `https://example.com/share?horoscope=${encodeURIComponent(horoscopeText)}`;
  // Replace example.com with your actual sharing endpoint
  alert(`Гороскоп готов к публикации: ${shareUrl}`);
}
