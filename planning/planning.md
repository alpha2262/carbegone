
8/23:
* get map back up w/ toggle info buttons

* fix adp.summary travel div (add uber and bikeshare time)
* add weather and daylight options?
* DRY up code
* convert to angular front end?
* fix directions div to not have scroll bar on mobile


***
Friday:
* map out needed fields
* stack decisions
* fix and deploy:
  * DC dev map
  * profile?
  * moments: scrap sign in and deploy

Monday:
* create rails app
* create database size with needed fields for one of the modules?
  * depends on how google's API interacts
* JSON data for communicating with front end option
* working backend

Tuesday:
* create front end, no styling
* working front end

Wednesday:
* SASS/boxes for selection and view of travel options
* styling of front end, adding icons?
* next API, other features
* hide API key for deployment?
* flexbox
* create testing suites?
* add toggles for routing options
* get directions in view using DirectionsStep and DirectionsRenderer
* change colors for each route
* remove bike map overlay

Thursday:
* add routing directions
* show most recent routing directions
* add directions calcs on time, etc.
* segment out uber and bikeshare


Friday:
* figure out right-side div css
* find distance attribute and modify w/uber and bike share data
* change top of step by step directions panel to name of mode
* add IP detection?
* make site responsive?
* deploy as mobile app?
* fitbit steps count

Bugs/items to update:
* DONE When selecting same google transit mode, (drive versus uber) google will switch colors when clicking between the same mode. Clicking a new mode locks the last color in.
* added time for travel into mode
* continue with directions API
  * if routing won't allow multiple selections without google layout, use directions and have each type of route option rendered?
  * change route options to toggles so a user can deselect the route option
