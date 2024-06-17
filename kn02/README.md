# KN02

## A)

![drawio](https://github.com/Shortsighted-Sniper/m165_Yan_P/assets/112621366/5a922d94-0d16-4eff-894e-4c0e918de9e2)

```
Publisher <-one-to-many->  Game
Game      <-many-to-many-> Developer
Franchise <-many-to-one->  Studio
Developer <-many-to-one->  Studio
```

## B)

![drawio](https://github.com/Shortsighted-Sniper/m165_Yan_P/assets/112621366/f43705ef-71de-414f-8fdf-c73f6ba38529)

bei der 1 zu 1 beziehung habe ich das Invoice im Orders verschachtelt, da es nur dort referenziert wird und das invoice wird immer mit einem Order verknüpft.

## C)

![console](https://github.com/Shortsighted-Sniper/m165_Yan_P/assets/112621366/622f5dad-db61-47ab-807c-f5bd56a2e5fa)

```js
use game_publishing
```

```js
db.createCollection("Publisher");
db.createCollection("Studio");
db.createCollection("Developer");
```

