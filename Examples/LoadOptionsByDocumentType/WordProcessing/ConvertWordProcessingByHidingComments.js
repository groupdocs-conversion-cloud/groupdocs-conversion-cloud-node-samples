"use strict";
class ConvertWordProcessingByHidingComments {
	static async Run() {
		
		let settings = new conversion_cloud.ConvertSettings();
		settings.filePath = "WordProcessing/with_tracked_changes.docx";
		settings.format = "pdf";

		let loadOptions = new conversion_cloud.WordProcessingLoadOptions();
		loadOptions.hideComments = true;

		settings.loadOptions = loadOptions;
		settings.outputPath = "converted";

		let result = await convertApi.convertDocument(new conversion_cloud.ConvertDocumentRequest(settings));

		console.log("Document converted: " + result[0].url);
	}
}
module.exports = ConvertWordProcessingByHidingComments;
