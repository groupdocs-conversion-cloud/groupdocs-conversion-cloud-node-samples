"use strict";
class Conversion_Node_Convert_To_Words {
	static Run() {

		var settings = new groupdocs_conversion_cloud_1.ConvertSettings();
		settings.storageName = myStorage;
		settings.filePath = "converted/topdf/password-protected.pdf";
		settings.format = "docx";

		var loadOptions = new groupdocs_conversion_cloud_1.PdfLoadOptions();
		loadOptions.password = "password";
		loadOptions.hidePdfAnnotations = true;
		loadOptions.removeEmbeddedFiles = false;
		loadOptions.flattenAllFields = true;

		settings.loadOptions = loadOptions;

		var convertOptions = new groupdocs_conversion_cloud_1.DocxConvertOptions();
		convertOptions.fromPage = 1;
		convertOptions.pagesCount = 1;

		settings.convertOptions = convertOptions;
		settings.outputPath = "converted/todocx";

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
module.exports = Conversion_Node_Convert_To_Words;