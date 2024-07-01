# KN05

## A) Roles and Rights

![fail](https://github.com/Shortsighted-Sniper/m165_Yan_P/assets/112621366/42b008ed-9fd9-4813-8dd1-e897952d2370)

```js
use game_publishing

db.createUser({
    user: 'user_1',
    pwd: '1234',
    roles: [
        {role: "read", db: "game_publishing"}
    ]
})

use admin

db.createUser({
    user: 'user_2',
    pwd: '1234',
    roles: [
        {role: 'readWrite', db: 'game_publishing'}
    ]
})
```
![user_1](https://github.com/Shortsighted-Sniper/m165_Yan_P/assets/112621366/1219a502-f098-4111-8300-88eeeb263357)

![user_2](https://github.com/Shortsighted-Sniper/m165_Yan_P/assets/112621366/8ce60052-7d57-4718-9a36-c1d6d87309a6)

## B) Backup and Restore
![before](https://github.com/Shortsighted-Sniper/m165_Yan_P/assets/112621366/8a68075c-f999-40f9-9535-c095e1fbf3a9)

![drop](https://github.com/Shortsighted-Sniper/m165_Yan_P/assets/112621366/f7aebfc5-e473-4cb1-acae-9094b50b4290)

![after](https://github.com/Shortsighted-Sniper/m165_Yan_P/assets/112621366/24fe2c2d-24b7-4542-ad70-eaa2d3fc2702)

![dump](https://github.com/Shortsighted-Sniper/m165_Yan_P/assets/112621366/b9944af4-6252-43aa-b58b-c981fbdd43b4)

![restore](https://github.com/Shortsighted-Sniper/m165_Yan_P/assets/112621366/f100d49c-d868-4f2c-9ae7-ce920ef1e39c)

## C) Scaling

[Bildquelle](https://www.mongodb.com/resources/basics/scaling)

### Replication

Replication it duplication of DBs. It is relativly easy to do and allows the data to stay available and secure. Some problems may arrize with a large amount of requests, since that can cause the DB to slow down substentually.

![replication](https://github.com/Shortsighted-Sniper/m165_Yan_P/assets/112621366/b1687d66-dacf-407c-addd-7a4239d670a8)

### Partitioning

Partitioning takes one table / collection and devides it in mutliple smaller ones. The advantage of this is that the DB can handle a lot more requests at once. The disadvantage is that it you need to set up a router which finds the data that is requested.

![partitioning](https://github.com/Shortsighted-Sniper/m165_Yan_P/assets/112621366/a4eb59fc-924a-421f-aa99-0b132eb2eb99)

### Recomendation for my Company

For my company I would recommend "Replication" since it's easie to do than Partitioning and I wouldn't expect a large amount of requests all at once.
