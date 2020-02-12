"use strict";
class ConvertCsvByConvertingDateTimeAndNumericData {
	static async Run() {
		
		let settings = new conversion_cloud.ConvertSettings();
		settings.filePath = "Spreadsheet/sample.csv";
		settings.format = "pdf";

		let loadOptions = new conversion_cloud.CsvLoadOptions();
		loadOptions.convertDateTimeData = true;
		loadOptions.convertNumericData = true

		settings.loadOptions = loadOptions;
		settings.outputPath = "converted";

		let result = await convertApi.convertDocument(new conversion_cloud.ConvertDocumentRequest(settings));

		console.log("Document converted: " + result[0].url);
	}
}
module.exports = ConvertCsvByConvertingDateTimeAndNumericData;
