"use strict";
class ConvertHtmlWithPageNumbering {
	static async Run() {
		
		let settings = new conversion_cloud.ConvertSettings();
		settings.filePath = "Html/sample.html";
		settings.format = "pdf";

		let loadOptions = new conversion_cloud.WebLoadOptions();
		loadOptions.pageNumbering = true;

		settings.loadOptions = loadOptions;
		settings.outputPath = "converted";

		let result = await convertApi.convertDocument(new conversion_cloud.ConvertDocumentRequest(settings));

		console.log("Document converted: " + result[0].url);
	}
}
module.exports = ConvertHtmlWithPageNumbering;
