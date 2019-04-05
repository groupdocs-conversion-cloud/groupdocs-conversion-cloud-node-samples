"use strict";
class Conversion_Node_Get_File_Versions {
	static Run() {
		
		var request = new groupdocs_conversion_cloud_1.GetFileVersionsRequest("conversions/one-page.docx", myStorage);
		storageApi.getFileVersions(request)
			.then(function (response) {
				console.log("Expected response type is FileVersions: " + response.value.length);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Conversion_Node_Get_File_Versions;