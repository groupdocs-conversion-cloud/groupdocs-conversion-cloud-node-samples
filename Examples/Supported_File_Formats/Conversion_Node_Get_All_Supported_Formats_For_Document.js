"use strict";
class Conversion_Ruby_Get_All_Supported_Formats_For_Document {
	static Run() {
		// retrieve supported file-formats
		var request = new groupdocs_conversion_cloud_1.GetSupportedConversionTypesRequest("conversions/sample.docx", myStorage, "");
		infoApi.getSupportedConversionTypes(request)
			.then(function (response) {
				console.log("Supported file-formats:");
				response.forEach(function (format) {
					console.log(format.sourceFormat + " - To - " + format.targetFormats + "\n");
				});
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Conversion_Ruby_Get_All_Supported_Formats_For_Document;