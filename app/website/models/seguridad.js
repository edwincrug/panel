var   sql = require('mssql'),
    config = {};

var Seguridad = function(config){
  //Inicializamos el objeto config
	this.config = config || {};
  //Inicializamos la conexión
  connectionString = {
    user: this.config.parameters.SQL_user,
    password: this.config.parameters.SQL_password,
    server: this.config.parameters.SQL_server, // You can use 'localhost\\instance' to connect to named instance 
    database: this.config.parameters.SQL_database,
    connectionTimeout: this.config.parameters.SQL_connectionTimeout
  };
  
  this.connection = new sql.Connection(connectionString);

};


//Funciones
Seguridad.prototype.get = function(params,callback){
    var self = this.connection;
    this.connection.connect(function(err) {
      // Stored Procedure 
      var request = new sql.Request(self);
      request.input('idUsuario', sql.Int, params);
      // request.output('output_parameter', sql.VarChar(50));
      request.execute('SEL_APLICACIONES_USERID_SP', function(err, recordsets, returnValue) {
        if(recordsets != null){
          callback(err, recordsets[0]);
        }
        else{
          console.log('Error al obtener datos para el usuario: ' + params + ' mensaje: ' + err);
        }
      });

    });
};

module.exports = Seguridad; 