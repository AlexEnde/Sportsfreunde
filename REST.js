function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5) {
    router.get("/",function(req,res){
		connection.query('SELECT * from user LIMIT 2', function(err, rows, fields) {
			connection.release();
			if (!err) {
				console.log('The solution is: ', rows);
                                res.json(rows); }
			else {
				console.log('Error while performing Query.');
}
		});
	});
}

module.exports = REST_ROUTER;
