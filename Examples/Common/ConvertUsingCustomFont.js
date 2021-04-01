"use strict";
class ConvertUsingCustomFont {
	static async Run() {
		
		let settings = new conversion_cloud.ConvertSettings();
		settings.filePath = "Presentation/uses-custom-font.pptx";
		settings.format = "pdf";
		settings.outputPath = "converted";
		settings.fontsPath = "font/ttf";

		let result = await convertApi.convertDocument(new conversion_cloud.ConvertDocumentRequest(settings));

		console.log("Document converted: " + result[0].url);
	}
}
module.exports = ConvertUsingCustomFont;
