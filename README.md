# KN01

## A:

![./A/mongo.png]()

Mit authpass sage ich, welche collection für authentication benutzt wird. By default ist es das 'admin' collection

Das sed Befehl sucht ein Textabschnitt und überschreibt es mit einem neuen Wert.

Mit 0.0.0.0 sage ich mongodb, dass es allen Netzwerken sichtbar sein sollte. Mit 127.0.0.1 ist es nur für den localhost.

Mit authSource=admin wird security aktiviert.

## B:

![](./B/json_before.png)

![](./B/json_after.png)

Date ist als string und timestamp format gespeichert, _id habe ich selber generieren lassen, sonst müsste ich `new ObjectId()` aufrufen.

## C) Erste Schritte Shell

![](./C/compass.png)

![](./C/shell.png)

- 1 und 2 zeigen alle Datenbanken im MongoDB
- 3 setz die Verbindung zu einer Datenbank
- 4 und 5 zeigen alle Collections im Datenbank

