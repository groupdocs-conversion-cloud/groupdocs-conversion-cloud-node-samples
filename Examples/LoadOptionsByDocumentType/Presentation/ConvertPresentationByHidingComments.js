"use strict";
class ConvertPresentationByHidingComments {
	static async Run() {
		
		let settings = new conversion_cloud.ConvertSettings();
		settings.filePath = "Presentation/with_notes.pptx";
		settings.format = "pdf";

		let loadOptions = new conversion_cloud.PresentationLoadOptions();
		loadOptions.commentsPosition = conversion_cloud.PresentationLoadOptions.CommentsPositionEnum.None;

		settings.loadOptions = loadOptions;
		settings.outputPath = "converted";

		let result = await convertApi.convertDocument(new conversion_cloud.ConvertDocumentRequest(settings));

		console.log("Document converted: " + result[0].url);
	}
}
module.exports = ConvertPresentationByHidingComments;
