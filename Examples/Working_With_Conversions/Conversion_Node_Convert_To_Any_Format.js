"use strict";
class Conversion_Node_Convert_To_Any_Format {
	static Run(convertToFormat, convertOptions) {

		var settings = new groupdocs_conversion_cloud_1.ConvertSettings();
		settings.storageName = myStorage;
		settings.filePath = "conversions/sample.docx";
		settings.format = convertToFormat;
		settings.convertOptions = convertOptions;
		settings.outputPath = "converted/" + convertToFormat;

		var request = new groupdocs_conversion_cloud_1.ConvertDocumentRequest(settings);
		conversionApi.convertDocument(request)
			.then(function (response) {
				console.log("Document converted successfully: " + response[0].url);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Conversion_Node_Convert_To_Any_Format;