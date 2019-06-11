"use strict";
class Conversion_Node_Storage_Exist {
	static Run() {
		// retrieve supported file-formats
		var request = new groupdocs_conversion_cloud_1.StorageExistsRequest(myStorage);
		storageApi.storageExists(request)
			.then(function (response) {
				console.log("Expected response type is StorageExist: " + response.exists);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Conversion_Node_Storage_Exist;