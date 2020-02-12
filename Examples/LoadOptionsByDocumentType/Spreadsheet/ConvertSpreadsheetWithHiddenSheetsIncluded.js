"use strict";
class ConvertSpreadsheetWithHiddenSheetsIncluded {
	static async Run() {
		
		let settings = new conversion_cloud.ConvertSettings();
		settings.filePath = "Spreadsheet/with_hidden_sheet.xlsx";
		settings.format = "pdf";

		let loadOptions = new conversion_cloud.SpreadsheetLoadOptions();
		loadOptions.showHiddenSheets = true;
		loadOptions.onePagePerSheet = true;

		settings.loadOptions = loadOptions;
		settings.outputPath = "converted";

		let result = await convertApi.convertDocument(new conversion_cloud.ConvertDocumentRequest(settings));

		console.log("Document converted: " + result[0].url);
	}
}
module.exports = ConvertSpreadsheetWithHiddenSheetsIncluded;
