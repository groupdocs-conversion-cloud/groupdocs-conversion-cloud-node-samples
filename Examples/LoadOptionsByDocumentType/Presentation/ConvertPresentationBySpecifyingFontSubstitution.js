"use strict";
class ConvertPresentationBySpecifyingFontSubstitution {
	static async Run() {
		
		let settings = new conversion_cloud.ConvertSettings();
		settings.filePath = "Presentation/with_notes.pptx";
		settings.format = "pdf";

		let loadOptions = new conversion_cloud.PresentationLoadOptions();
		loadOptions.defaultFont = "Helvetica";
		loadOptions.fontSubstitutes = {};
		loadOptions.fontSubstitutes["Tahoma"] = "Arial";
		loadOptions.fontSubstitutes["Times New Roman"] = "Arial";

		settings.loadOptions = loadOptions;
		settings.outputPath = "converted";

		let result = await convertApi.convertDocument(new conversion_cloud.ConvertDocumentRequest(settings));

		console.log("Document converted: " + result[0].url);
	}
}
module.exports = ConvertPresentationBySpecifyingFontSubstitution;
