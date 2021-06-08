//1. Iniciar una instancia de MongoDB con autentificación.

mongod --auth

//2. Conectarse a la consola mongo con autentificación. 

mongo --port 27017 -u "lucia" -p "1234" --authenticationDatabase "test"

//3. Conectarse a la consola mongo sin seguridad y autentificarse en la BD. 

mongod
mongo
db.auth("lucia", "1234")

//4. Crear un usuario administrador con el rol userAdminAnyDatabase. 

use admin 
db.createUser( 
 { 
 user: "admin", 
 pwd: "admin", 
 roles: [ { role: "userAdminAnyDatabase", db: "admin" }] 
 } 
) 

//5. Crear un usuario de nombre visita con clave 123 con rol read. 

use test
db.createUser( 
 { 
 user: "visita", 
 pwd: "123", 
 roles: [ { role: "read", db: "test" }] 
 } 
) 

//6. Crear un usuario de nombre tester con roles read y readWrite. 

use test
db.createUser( 
 { 
 user: "tester", 
 pwd: "123", 
 roles: [ { role: "read", db: "test" }, { role: "readWrite", db: "test" }]}) 

//7. Agregar el rol readWrite al usuario visita. 

db.grantRolesToUser("visita", [{role: "readWrite", db: "test"}])

//8. Quitar el rol readWrite al usuario tester. 

db.revokeRolesFromUser("tester", [{role: "readWrite", db: "test"}])

//9. Crear un usuario con roles de administrador. 

use test
db.createUser(
	{
		user: "admin",
		pwd: "abc123",
		roles: [{role: "dbAdmin", db: "test"}, {role: "userAdmin", db: "test"}]
	}
)

//10. Obtener un listado de todos los usuarios de la colección.

db.getUsers()


//11. Obtener los datos del usuario tester. 

db.getUser("tester")

//12. Cambiar la clave del usuario visita. 

db.changeUserPassword("visita", "clavenueva") 

//13. Crear un rol de nombre all con los roles read y readWrite. 

db.createRole(
	{
		role: "all",
		privileges: [
			{
				resource: {db: "test", collection: ""},
				actions: ["find"]
			}
		],
		roles: [
			{
				role: "read",
				db: "test"
			},
			{
				role: "readWrite",
				db: "test"
			}
		]
	}
)

//14. Crear el rol leer que sólo permita ejecutar la sentencia find(). 

db.createRole(
	{
		role: "leer",
		privileges: [
			{
				resource: {db: "test", collection: ""},
				actions: ["find"]
			}
		],
		roles: []
	}
)


//15. Obtener un listado de todos los roles de la BD. 

db.getRoles()


//16. Obtener los datos del rol leer. 

db.getRole("leer")


//17. Agregar al rol leer el permiso para ejecutar el método update(). 

db.grantPrivilegesToRole("leer", [{ resource: {db: "test", collection: ""}, actions:["update"]}])

//18. Borrar el rol leer. 

db.revokePrivilegesFromRole("leer", [{ resource: {db: "test", collection: ""},actions : ["update"]}])

//19. Borrar al usuario tester. 

db.dropUser("tester")


