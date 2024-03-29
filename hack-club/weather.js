const weatherCodes = {
        0: {
          day: {
            description: "Sunny",
            image: "http://openweathermap.org/img/wn/01d@2x.png",
            icon: "light_mode",
            backgroundGradient: ["#00aaff", "#0077ff"],
            textColor: "#fff",
          },
          night: {
            description: "Clear",
            image: "http://openweathermap.org/img/wn/01n@2x.png",
            icon: "light_mode",
            backgroundGradient: ["#001133", "#002266"],
            textColor: "#fff",
          },
        },
        1: {
          day: {
            description: "Mainly Sunny",
            image: "http://openweathermap.org/img/wn/01d@2x.png",
            icon: "light_mode",
            backgroundGradient: ["#00aaff", "#0077ff"],
            textColor: "#fff",
          },
          night: {
            description: "Mainly Clear",
            image: "http://openweathermap.org/img/wn/01n@2x.png",
            icon: "light_mode",
            backgroundGradient: ["#001133", "#002266"],
            textColor: "#fff",
          },
        },
        2: {
          day: {
            description: "Partly Cloudy",
            image: "http://openweathermap.org/img/wn/02d@2x.png",
            icon: "partly_cloudy_day",
            backgroundGradient: ["#66ccff", "#3399ff"],
            textColor: "#fff",
          },
          night: {
            description: "Partly Cloudy",
            image: "http://openweathermap.org/img/wn/02n@2x.png",
            icon: "partly_cloudy_night",
            backgroundGradient: ["#001133", "#002266"],
            textColor: "#fff",
          },
        },
        3: {
          day: {
            description: "Cloudy",
            image: "http://openweathermap.org/img/wn/03d@2x.png",
            icon: "cloud",
            backgroundGradient: ["#d0d0d0", "#b0b0b0"],
            textColor: "#000",
          },
          night: {
            description: "Cloudy",
            image: "http://openweathermap.org/img/wn/03n@2x.png",
            icon: "cloud",
            backgroundGradient: ["#333333", "#555555"],
            textColor: "#fff",
          },
        },
        45: {
          day: {
            description: "Foggy",
            image: "http://openweathermap.org/img/wn/50d@2x.png",
            icon: "foggy",
            backgroundGradient: ["#c0c0c0", "#a0a0a0"],
            textColor: "#000",
          },
          night: {
            description: "Foggy",
            image: "http://openweathermap.org/img/wn/50n@2x.png",
            icon: "foggy",
            backgroundGradient: ["#555555", "#777777"],
            textColor: "#fff",
          },
        },
        48: {
          day: {
            description: "Rime Fog",
            image: "http://openweathermap.org/img/wn/50d@2x.png",
            icon: "mist",
            backgroundGradient: ["#c0c0c0", "#a0a0a0"],
            textColor: "#000",
          },
          night: {
            description: "Rime Fog",
            image: "http://openweathermap.org/img/wn/50n@2x.png",
            icon: "mist",
            backgroundGradient: ["#555555", "#777777"],
            textColor: "#fff",
          },
        },
        51: {
          day: {
            description: "Light Drizzle",
            image: "http://openweathermap.org/img/wn/09d@2x.png",
            icon: "rainy_light",
            backgroundGradient: ["#99ccff", "#66aaff"],
            textColor: "#000",
          },
          night: {
            description: "Light Drizzle",
            image: "http://openweathermap.org/img/wn/09n@2x.png",
            icon: "rainy_light",
            backgroundGradient: ["#555555", "#777777"],
            textColor: "#fff",
          },
        },
        53: {
          day: {
            description: "Drizzle",
            image: "http://openweathermap.org/img/wn/09d@2x.png",
            icon: "rainy_light",
            backgroundGradient: ["#99ccff", "#66aaff"],
            textColor: "#000",
          },
          night: {
            description: "Drizzle",
            image: "http://openweathermap.org/img/wn/09n@2x.png",
            icon: "rainy_light",
            backgroundGradient: ["#555555", "#777777"],
            textColor: "#fff",
          },
        },
        55: {
          day: {
            description: "Heavy Drizzle",
            image: "http://openweathermap.org/img/wn/09d@2x.png",
            icon: "rainy_light",
            backgroundGradient: ["#99ccff", "#66aaff"],
            textColor: "#000",
          },
          night: {
            description: "Heavy Drizzle",
            image: "http://openweathermap.org/img/wn/09n@2x.png",
            icon: "rainy_light",
            backgroundGradient: ["#555555", "#777777"],
            textColor: "#fff",
          },
        },
        56: {
          day: {
            description: "Light Freezing Drizzle",
            image: "http://openweathermap.org/img/wn/09d@2x.png",
            icon: "rainy_light",
            backgroundGradient: ["#99ccff", "#66aaff"],
            textColor: "#000",
          },
          night: {
            description: "Light Freezing Drizzle",
            image: "http://openweathermap.org/img/wn/09n@2x.png",
            icon: "rainy_light",
            backgroundGradient: ["#555555", "#777777"],
            textColor: "#fff",
          },
        },
        57: {
          day: {
            description: "Freezing Drizzle",
            image: "http://openweathermap.org/img/wn/09d@2x.png",
            icon: "rainy_light",
            backgroundGradient: ["#99ccff", "#66aaff"],
            textColor: "#000",
          },
          night: {
            description: "Freezing Drizzle",
            image: "http://openweathermap.org/img/wn/09n@2x.png",
            icon: "rainy_light",
            backgroundGradient: ["#555555", "#777777"],
            textColor: "#fff",
          },
        },
        61: {
          day: {
            description: "Light Rain",
            image: "http://openweathermap.org/img/wn/10d@2x.png",
            icon: "rainy_light",
            backgroundGradient: ["#6699ff", "#3366ff"],
            textColor: "#fff",
          },
          night: {
            description: "Light Rain",
            image: "http://openweathermap.org/img/wn/10n@2x.png",
            icon: "rainy_light",
            backgroundGradient: ["#003366", "#004499"],
            textColor: "#fff",
          },
        },
        63: {
          day: {
            description: "Rain",
            image: "http://openweathermap.org/img/wn/10d@2x.png",
            icon: "rainy",
            backgroundGradient: ["#6699ff", "#3366ff"],
            textColor: "#fff",
          },
          night: {
            description: "Rain",
            image: "http://openweathermap.org/img/wn/10n@2x.png",
            icon: "rainy",
            backgroundGradient: ["#003366", "#004499"],
            textColor: "#fff",
          },
        },
        65: {
          day: {
            description: "Heavy Rain",
            image: "http://openweathermap.org/img/wn/10d@2x.png",
            icon: "rainy_heavy",
            backgroundGradient: ["#6699ff", "#3366ff"],
            textColor: "#fff",
          },
          night: {
            description: "Heavy Rain",
            image: "http://openweathermap.org/img/wn/10n@2x.png",
            icon: "rainy_heavy",
            backgroundGradient: ["#003366", "#004499"],
            textColor: "#fff",
          },
        },
        66: {
          day: {
            description: "Freezing Rain",
            image: "http://openweathermap.org/img/wn/10d@2x.png",
            icon: "rainy_heavy",
            backgroundGradient: ["#6699ff", "#3366ff"],
            textColor: "#fff",
          },
          night: {
            description: "Freezing Rain",
            image: "http://openweathermap.org/img/wn/10n@2x.png",
            icon: "rainy_heavy",
            backgroundGradient: ["#003366", "#004499"],
            textColor: "#fff",
          },
        },
        67: {
          day: {
            description: "Freezing Rain",
            image: "http://openweathermap.org/img/wn/10d@2x.png",
            icon: "rainy_heavy",
            backgroundGradient: ["#6699ff", "#3366ff"],
            textColor: "#fff",
          },
          night: {
            description: "Freezing Rain",
            image: "http://openweathermap.org/img/wn/10n@2x.png",
            icon: "rainy_heavy",
            backgroundGradient: ["#003366", "#004499"],
            textColor: "#fff",
          },
        },
        71: {
          day: {
            description: "Light Snow",
            image: "http://openweathermap.org/img/wn/13d@2x.png",
            icon: "weather_snowy",
            backgroundGradient: ["#ffffff", "#e0e0e0"],
            textColor: "#000",
          },
          night: {
            description: "Light Snow",
            image: "http://openweathermap.org/img/wn/13n@2x.png",
            icon: "weather_snowy",
            backgroundGradient: ["#e0e0e0", "#cccccc"],
            textColor: "#000",
          },
        },
        73: {
          day: {
            description: "Snow",
            image: "http://openweathermap.org/img/wn/13d@2x.png",
            icon: "snowing",
            backgroundGradient: ["#ffffff", "#e0e0e0"],
            textColor: "#000",
          },
          night: {
            description: "Snow",
            image: "http://openweathermap.org/img/wn/13n@2x.png",
            icon: "snowing",
            backgroundGradient: ["#e0e0e0", "#cccccc"],
            textColor: "#000",
          },
        },
        75: {
          day: {
            description: "Heavy Snow",
            image: "http://openweathermap.org/img/wn/13d@2x.png",
            icon: "snowing_heavy",
            backgroundGradient: ["#ffffff", "#e0e0e0"],
            textColor: "#000",
          },
          night: {
            description: "Heavy Snow",
            image: "http://openweathermap.org/img/wn/13n@2x.png",
            icon: "snowing_heavy",
            backgroundGradient: ["#e0e0e0", "#cccccc"],
            textColor: "#000",
          },
        },
        77: {
          day: {
            description: "Snow Grains",
            image: "http://openweathermap.org/img/wn/13d@2x.png",
            icon: "weather_mix",
            backgroundGradient: ["#ffffff", "#e0e0e0"],
            textColor: "#000",
          },
          night: {
            description: "Snow Grains",
            image: "http://openweathermap.org/img/wn/13n@2x.png",
            icon: "weather_mix",
            backgroundGradient: ["#e0e0e0", "#cccccc"],
            textColor: "#000",
          },
        },
        80: {
          day: {
            description: "Light Showers",
            image: "http://openweathermap.org/img/wn/09d@2x.png",
            icon: "rainy",
            backgroundGradient: ["#99ccff", "#66aaff"],
            textColor: "#000",
          },
          night: {
            description: "Light Showers",
            image: "http://openweathermap.org/img/wn/09n@2x.png",
            icon: "rainy",
            backgroundGradient: ["#555555", "#777777"],
            textColor: "#fff",
          },
        },
        81: {
          day: {
            description: "Showers",
            image: "http://openweathermap.org/img/wn/09d@2x.png",
            icon: "rainy",
            backgroundGradient: ["#99ccff", "#66aaff"],
            textColor: "#000",
          },
          night: {
            description: "Showers",
            image: "http://openweathermap.org/img/wn/09n@2x.png",
            icon: "rainy",
            backgroundGradient: ["#555555", "#777777"],
            textColor: "#fff",
          },
        },
        82: {
          day: {
            description: "Heavy Showers",
            image: "http://openweathermap.org/img/wn/09d@2x.png",
            icon: "rainy_heavy",
            backgroundGradient: ["#99ccff", "#66aaff"],
            textColor: "#000",
          },
          night: {
            description: "Heavy Showers",
            image: "http://openweathermap.org/img/wn/09n@2x.png",
            icon: "rainy_heavy",
            backgroundGradient: ["#555555", "#777777"],
            textColor: "#fff",
          },
        },
        85: {
          day: {
            description: "Snow Showers",
            image: "http://openweathermap.org/img/wn/13d@2x.png",
            icon: "rainy_snow",
            backgroundGradient: ["#ffffff", "#e0e0e0"],
            textColor: "#000",
          },
          night: {
            description: "Snow Showers",
            image: "http://openweathermap.org/img/wn/13n@2x.png",
            icon: "rainy_snow",
            backgroundGradient: ["#e0e0e0", "#cccccc"],
            textColor: "#000",
          },
        },
        86: {
          day: {
            description: "Snow Showers",
            image: "http://openweathermap.org/img/wn/13d@2x.png",
            icon: "rainy_snow",
            backgroundGradient: ["#ffffff", "#e0e0e0"],
            textColor: "#000",
          },
          night: {
            description: "Snow Showers",
            image: "http://openweathermap.org/img/wn/13n@2x.png",
            icon: "rainy_snow",
            backgroundGradient: ["#e0e0e0", "#cccccc"],
            textColor: "#000",
          },
        },
        95: {
          day: {
            description: "Thunderstorm",
            image: "http://openweathermap.org/img/wn/11d@2x.png",
            icon: "thunderstorm",
            backgroundGradient: ["#4d4d4d", "#333333"],
            textColor: "#fff",
          },
          night: {
            description: "Thunderstorm",
            image: "http://openweathermap.org/img/wn/11n@2x.png",
            icon: "thunderstorm",
            backgroundGradient: ["#000000", "#1a1a1a"],
            textColor: "#fff",
          },
        },
        96: {
          day: {
            description: "Thunderstorm With Hail",
            image: "http://openweathermap.org/img/wn/11d@2x.png",
            icon: "weather_hail",
            backgroundGradient: ["#4d4d4d", "#333333"],
            textColor: "#fff",
          },
          night: {
            description: "Thunderstorm With Hail",
            image: "http://openweathermap.org/img/wn/11n@2x.png",
            icon: "weather_hail",
            backgroundGradient: ["#000000", "#1a1a1a"],
            textColor: "#fff",
          },
        },
        99: {
          day: {
            description: "Thunderstorm With Hail",
            image: "http://openweathermap.org/img/wn/11d@2x.png",
            icon: "weather_hail",
            backgroundGradient: ["#4d4d4d", "#333333"],
            textColor: "#fff",
          },
          night: {
            description: "Thunderstorm With Hail",
            image: "http://openweathermap.org/img/wn/11n@2x.png",
            icon: "weather_hail",
            backgroundGradient: ["#000000", "#1a1a1a"],
            textColor: "#fff",
          },
        },
      };

      const x = document.getElementById("demo");

      class Weather {
        setText(obj) {
          Object.keys(obj).forEach((key) => {
            const el = document.getElementById(key);
            if (el) {
              el.innerHTML = obj[key];
            }
          });
        }
        createGradient([start, end]) {
          return `linear-gradient(to bottom, ${start}, ${end})`;
        }
        setBackground([start, end]) {
          document.body.style.background = this.createGradient([start, end]);
        }
        setColor(color) {
          document.body.style.color = color;
        }
        async getLocation() {
          return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition((position) =>
                resolve({
                  lat: position.coords.latitude,
                  long: position.coords.longitude,
                })
              );
            } else {
              reject({
                error: "Geolocation is not supported by this browser.",
              });
            }
          });
        }

        async load({ lat, long }) {
          return new Promise((resolve, reject) => {
            const data = fetch(
              `https://api.dysperse.com/weather?lat=${lat}&long=${long}`
            )
              .then((res) => res.json())
              .then((res) => {
                const data = {
                  weather: {
                    ...res.current,
                    humidity: res.current.relative_humidity_2m,
                    wind: res.current.wind_speed_10m,
                  },
                  text: weatherCodes[res.current.weather_code][
                    res.current.is_day ? "day" : "night"
                  ],
                };
                resolve(data);
              })
              .catch((e) => {
                console.error(e);
                reject({ error: "Error fetching weather data" });
              });
          });
        }
      }
