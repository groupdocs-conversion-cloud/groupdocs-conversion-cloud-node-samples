"use strict";
class ConvertSpreadsheetByShowingGridLines {
	static async Run() {
		
		let settings = new conversion_cloud.ConvertSettings();
		settings.filePath = "Spreadsheet/sample.xlsx";
		settings.format = "pdf";

		let loadOptions = new conversion_cloud.SpreadsheetLoadOptions();
		loadOptions.showGridLines = true;
		loadOptions.onePagePerSheet = true;

		settings.loadOptions = loadOptions;
		settings.outputPath = "converted";

		let result = await convertApi.convertDocument(new conversion_cloud.ConvertDocumentRequest(settings));

		console.log("Document converted: " + result[0].url);
	}
}
module.exports = ConvertSpreadsheetByShowingGridLines;
