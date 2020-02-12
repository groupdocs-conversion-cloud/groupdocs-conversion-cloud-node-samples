"use strict";
class ConvertPresentationWithHiddenSlidesIncluded {
	static async Run() {
		
		let settings = new conversion_cloud.ConvertSettings();
		settings.filePath = "Presentation/with_hidden_page.pptx";
		settings.format = "pdf";

		let loadOptions = new conversion_cloud.PresentationLoadOptions();
		loadOptions.showHiddenSlides = true;		

		settings.loadOptions = loadOptions;
		settings.outputPath = "converted";

		let result = await convertApi.convertDocument(new conversion_cloud.ConvertDocumentRequest(settings));

		console.log("Document converted: " + result[0].url);
	}
}
module.exports = ConvertPresentationWithHiddenSlidesIncluded;
