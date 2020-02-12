"use strict";
class ConvertNoteBySpecifyingFontSubstitution {
	static async Run() {
		
		let settings = new conversion_cloud.ConvertSettings();
		settings.filePath = "Note/sample.one";
		settings.format = "pdf";

		let loadOptions = new conversion_cloud.OneLoadOptions();
		loadOptions.fontSubstitutes = {};
		loadOptions.fontSubstitutes["Tahoma"] = "Arial";
		loadOptions.fontSubstitutes["Times New Roman"] = "Arial";

		settings.loadOptions = loadOptions;
		settings.outputPath = "converted";

		let result = await convertApi.convertDocument(new conversion_cloud.ConvertDocumentRequest(settings));

		console.log("Document converted: " + result[0].url);
	}
}
module.exports = ConvertNoteBySpecifyingFontSubstitution;
