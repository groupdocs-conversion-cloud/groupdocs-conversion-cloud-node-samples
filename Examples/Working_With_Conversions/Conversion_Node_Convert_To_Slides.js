"use strict";
class Conversion_Node_Convert_To_Slides {
	static Run() {

		var settings = new groupdocs_conversion_cloud_1.ConvertSettings();
		settings.storageName = myStorage;
		settings.filePath = "conversions/sample.docx";
		settings.format = "pptx";

		var loadOptions = new groupdocs_conversion_cloud_1.DocxLoadOptions();
		loadOptions.hideWordTrackedChanges = true;
		loadOptions.defaultFont = "Arial";

		settings.loadOptions = loadOptions;

		var convertOptions = new groupdocs_conversion_cloud_1.PptxConvertOptions();
		convertOptions.fromPage = 1;
		convertOptions.pagesCount = 1;
		convertOptions.zoom = 1;

		settings.convertOptions = convertOptions;
		settings.outputPath = "converted/topptx";

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
module.exports = Conversion_Node_Convert_To_Slides;