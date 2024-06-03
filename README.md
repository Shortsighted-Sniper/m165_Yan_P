# KN01

## A:

![mongo](https://github.com/Shortsighted-Sniper/m165_Yan_P/assets/112621366/1b9fb1d2-340f-4855-90f6-938fe2745bc4)

Mit authpass sage ich, welche collection für authentication benutzt wird. By default ist es das 'admin' collection

Das sed Befehl sucht ein Textabschnitt und überschreibt es mit einem neuen Wert.

Mit 0.0.0.0 sage ich mongodb, dass es allen Netzwerken sichtbar sein sollte. Mit 127.0.0.1 ist es nur für den localhost.

Mit authSource=admin wird security aktiviert.

## B:

![json_after](https://github.com/Shortsighted-Sniper/m165_Yan_P/assets/112621366/48c72915-0ee2-4aab-ac2e-a2fec319debd)

![json_before](https://github.com/Shortsighted-Sniper/m165_Yan_P/assets/112621366/17056a9d-69be-473c-a2f6-9da95e3f477f)

Date ist als string und timestamp format gespeichert, _id habe ich selber generieren lassen, sonst müsste ich `new ObjectId()` aufrufen.

## C) Erste Schritte Shell

![compass](https://github.com/Shortsighted-Sniper/m165_Yan_P/assets/112621366/57eefcf7-e633-4565-843f-8eb5b080e403)

![shell](https://github.com/Shortsighted-Sniper/m165_Yan_P/assets/112621366/eaccdeaa-4011-4500-94dd-e3c9953a7240)

- 1 und 2 zeigen alle Datenbanken im MongoDB
- 3 setz die Verbindung zu einer Datenbank
- 4 und 5 zeigen alle Collections im Datenbank

