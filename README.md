# DAMapp

DB

We will use sqlite to persist data.

$npm install sqlite3

Entities  
* Match
  * Id (PK)
  * Team A (FK)
  * Team B (FK)
  * Date
  * Score A
  * Score B
  * State (Played / Unplayed)

* Team
  * Id (PK)
  * Name

* TeamPlayers
  * Team_Id (FK)
  * Player_Id (FK)

* Player
  * Player_Id (PK)
  * Name
  * LastName
  * Age

* Player_Stats
  * Player_Id (FK)
  * Match_Id (FK)
  * Goals
  * Yellow_Card
  * Red_Card

* Fixture (another release)
* Tournament (another release)  
