"use strict";
class Conversion_Node_Convert_To_Text {
	static Run() {

		var settings = new groupdocs_conversion_cloud_1.ConvertSettings();
		settings.storageName = myStorage;
		settings.filePath = "conversions/sample.docx";
		settings.format = "txt";

		var loadOptions = new groupdocs_conversion_cloud_1.DocxLoadOptions();
		loadOptions.hideWordTrackedChanges = true;
		loadOptions.defaultFont = "Arial";

		settings.loadOptions = loadOptions;

		var convertOptions = new groupdocs_conversion_cloud_1.TxtConvertOptions();
		convertOptions.fromPage = 1;
		convertOptions.pagesCount = 1;

		settings.convertOptions = convertOptions;
		settings.outputPath = "converted/totext";

		var request = new groupdocs_conversion_cloud_1.ConvertDocumentRequest(settings);
		convertApi.convertDocument(request)
			.then(function (response) {
				console.log("Document converted successfully: " + response[0].url);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Conversion_Node_Convert_To_Text;