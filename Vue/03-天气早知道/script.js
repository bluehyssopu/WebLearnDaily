var app = new Vue({
  el: "#app",
  data: {
    city: '',
    weatherList: [],
  },
  methods: {
    searchWeather() {
      var that = this;
      axios.get('http://wthrcdn.etouch.cn/weather_mini?city=' + this.city)
        .then(function (response) {
          that.weatherList = response.data.data.forecast
        })
        .catch(function (err) { })
    },
    changeCity(city) {
      this.city = city,
        this.searchWeather();
    }
  },
})