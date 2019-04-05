"use strict";
class Conversion_Node_Get_Disc_Usage {
	static Run() {
		
		var request = new groupdocs_conversion_cloud_1.GetDiscUsageRequest(myStorage);
		storageApi.getDiscUsage(request)
			.then(function (response) {
				console.log("Expected response type is DiscUsage: " + response.usedSize);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Conversion_Node_Get_Disc_Usage;