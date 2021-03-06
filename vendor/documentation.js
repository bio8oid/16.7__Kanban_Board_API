GET /board
-----------------------------
Response:
{
   id: int,
   name: string,
   columns: [{
       id: int,
       name: string,
       cards: [{
           id: int,
           bootcamp_kanban_column_id: int,
           name: string
       }]
   }]
}



DELETE /column/{id}
------------------------------
Request:
{id}: int - id column, we want to delete
------------------------------
Response:
{
   id: int
}




POST /card
------------------------------
Request:
name: string - the name of the card we create
bootcamp_kanban_column_id: int - the id of the column to which the card belongs
------------------------------
Response:
{
   id: int
}


DELETE /card/{id}
------------------------------
Request:
{id}: int - id card we want to remove
------------------------------
Response:
{
   id: int
}




==============================
POST /column
------------------------------
Request:
name: string - name of the column to create
------------------------------
Response:
{
   id: int
}



X-Client-Id: 3930
X-Auth-Token: b9b608d3c12a8940b61a0308302094e1


PUT /card/{id}
------------------------------
Request:
{id}: int - id card we want to edit
name: string - new name card
bootcamp_kanban_column_id: int - the column id to which we want to move the post
------------------------------
Response:
{
   id: int
}



PUT /column/{id}
------------------------------
Request:
{id}: int - the column id we want to edit
name: string - new column name
------------------------------
Response:
{
   id: int
}