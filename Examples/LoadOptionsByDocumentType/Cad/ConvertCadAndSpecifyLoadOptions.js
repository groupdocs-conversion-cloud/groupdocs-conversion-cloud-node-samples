"use strict";
class ConvertCadAndSpecifyLoadOptions {
	static async Run() {
		
		let settings = new conversion_cloud.ConvertSettings();
		settings.filePath = "Cad/Sample.dwg";
		settings.format = "pdf";

		let loadOptions = new conversion_cloud.CadLoadOptions();
		loadOptions.format = "dwg";

		settings.loadOptions = loadOptions;
		settings.outputPath = "converted";

		let result = await convertApi.convertDocument(new conversion_cloud.ConvertDocumentRequest(settings));

		console.log("Document converted: " + result[0].url);
	}
}
module.exports = ConvertCadAndSpecifyLoadOptions;
