# calorie-mobile-apps-ionic--firebase

##### Calorie apps is HTML5 Hybrid Mobile App Framework With [Ionic](http://ionicframework.com), [Firebase](https://www.firebase.com/), [Nutritionix API](http://www.nutritionix.com/business/api), and [SASS](http://sass-lang.com) based applications.

Ionic is a framework for building cross-platform mobile apps with HTML, CSS and JavaScript. Not only does Ionic come with numerous mobile-optimized UI components, but it is also built on top of AngularJS for powerful templating and easy two-way data binding.

Firebase is a perfect complement to Ionic. While Ionic is a great tool for building the front-end, Firebase can power the back-end. With Firebase, we don't need to worry about provisioning servers or building REST APIs - with a little bit of configuration, we can let Firebase do the work.

## Description

In this school project, I'm building a diet tracker app and blog called `Calorie Counter` that has three main menu:

- Home or `Hem`
- Blog or `Blogg`        
- Food Tracker or `Livsmedel`

## Blog 

Using Firebase with [AngularFire](https://www.firebase.com/docs/web/libraries/angular/quickstart.html).


## Food Tracker 

Using Get metod with [Nutritionix API](http://www.nutritionix.com/business/api)


## Function and url 

Menu           | Function        | url                                        |
-------------- | --------------- | ------------------------------------------ | 
Hem            | Read            | http://localhost:8100/#/meny/hem           |
Blogg          | Read            | http://localhost:8100/#/meny/blogg         |
Blogg-add      | Add             | http://localhost:8100/#/meny/add           | 
Bolgg          | Delete          | http://localhost:8100/#/meny/blogg         | 
Blogg-edit     | Update/Replace  | http://localhost:8100/#/meny//edit/:id     | 
Livsmedel      | Search          | http://localhost:8100/#/meny/livsmedel     |
Livsmedel-item | Read            | http://localhost:8100/#/meny/livsmedel/:id |

## Installation

```shell
 npm install
```

## Run the app

For iOS and Android testing

```shell
 ionic serve --lab    
```


