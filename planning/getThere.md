Time2Go:
asteriks * === bullet points
hashes # === app logic for each model

app logic:
* selection of your persona when entering (in a hurry, fancy, etc.)
  * reservation? on a strict timeline
  * fancy-like event?
  * number of people

data points for user:
* current location
  # bronze: enter location, query API
  # gold: find location based on signal location
* where you want to go
  # bronze: enter location, query API
  # gold: pull in calendar items for locations and times?
* time of day
  # (impacts transit, cars for parking costs)
* estimated time at destination?
  # (impacts zipcar, car)
* number of people
  # (1-4 for now; impacts uber pricing and bikes)
* transit: Metro rail
  # users * transit cost
  # option only if metro open
  # costs via google? If not, estimate rate table based on distance
* transit: Metro bus
  # users * transit costs
  # cost = $1.75
* bike share member
  # bronze: google API + bike costs + 5 min time to get to station
  # number of people * price logic:
  # if member, 1-29 min ride free
    # 30::59 range + $1.50; add for each 30 min increment level
  # if not member, $2 fee for day pass + if member pricing
* car2go member
  # bronze: google API + $.41/min travel + 5 min to find and later park car
  # if member, costs per drive time minutes
  # if not member, gray out option. Offer sign up promo text and link
* zipcar member
  # bronze: google API + $10/hr + 5 min to find car
  # if member,
    # cost per drive time to nearest 30 min +
    # costs for duration if time given
  # build car model, then split into segments based on owned versus zipcar?
  # if not member, gray out option. Offer sign up promo text and link
* uber member
  # bronze: google API +
    # if users = 1-2, + pool cost
    # if 3-4 users, +base cost + per mile cost estimates at 1x pricing
  # if member,
    # if 1, uber pool price
    # if 2, uber pool price + $.75
    # if 3-4, uber price
  # if not member, gray out option. Offer sign up promo text and link
* own a car
  # cost = miles * $.50/mile + $5 min to park
  # parking cost = $10/hr daytime, max $20 at night
  # gold: integrate parking panda for parking costs? colonial parking?



data points for user phase 2:
* app learns preferences based on variables and selections (e.g. always uber when it's hot out, never uber when 3x pricing)
* specify preferences on modes

tools:
* google maps API
* add ins: calendar
* uber
* car2go
* zipcar?
* wmata
* circulator + streetcar
* county/city bus routes
* parking panda
* weather underground
* directions API: https://developers.google.com/maps/documentation/directions/
* Start geolocation based on tower data: https://developers.google.com/maps/documentation/geolocation/intro



business logic:
* recommends options for travel based on various factors
  * is timing important? e.g. do you have a reservation?
  * how cost sensitive are you?
  * what's the weather like? and are you fancy dressed? too hot or cold?
* revenue:
  * businesses could provide incentives like 50% off a drink to arrive early
  * partner with spin for discount place?
  * ads for food delivery if choosing pricier options for travel
