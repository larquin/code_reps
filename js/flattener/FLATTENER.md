# Flatten A Nested Object

We're both developers on a team that is building a Weather Aggregation service. We scour the internet for weather data, and then we
serve the data back to our customers. While we don't think this is a very realistic business model, we definitely like working with JSON :)

Our engineering manager has given us a task. We're to take data from [Open Weather Map](https://openweathermap.org/current) and flatten the
data in a way that we can serve it back to our customers.

Given this request (you can click the link to see what it returns):

https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22

We get the following data back from the API:

```
{
  "coord": {
    "lon": -0.13,
    "lat": 51.51
  },
  "weather": [
    {
      "id": 300,
      "main": "Drizzle",
      "description": "light intensity drizzle",
      "icon": "09d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 280.32,
    "pressure": 1012,
    "humidity": 81,
    "temp_min": 279.15,
    "temp_max": 281.15
  },
  "visibility": 10000,
  "wind": {
    "speed": 4.1,
    "deg": 80
  },
  "clouds": {
    "all": 90
  },
  "dt": 1485789600,
  "sys": {
    "type": 1,
    "id": 5091,
    "message": 0.0103,
    "country": "GB",
    "sunrise": 1485762037,
    "sunset": 1485794875
  },
  "id": 2643743,
  "name": "London",
  "cod": 200
}
```

Our job is simple. We need to take that data payload, and for every nested object, we need to flatten it. So, for example, let's look at this
particular piece of the JSON we get back from Open Weather Map:

```
"coord": {
    "lon": -0.13,
    "lat": 51.51
  }
```

Our goal is to process this data so it looks like this:

```
{
  "coord/lon": -0.13,
  "coord/lat": 51.51
}
```
