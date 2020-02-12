"use strict";
class ConvertTxtByControllingTrailingSpacesBehavior {
	static async Run() {
		
		let settings = new conversion_cloud.ConvertSettings();
		settings.filePath = "Text/sample.txt";
		settings.format = "pdf";

		let loadOptions = new conversion_cloud.TxtLoadOptions();
		loadOptions.trailingSpacesOptions = conversion_cloud.TxtLoadOptions.TrailingSpacesOptionsEnum.Trim;

		settings.loadOptions = loadOptions;
		settings.outputPath = "converted";

		let result = await convertApi.convertDocument(new conversion_cloud.ConvertDocumentRequest(settings));

		console.log("Document converted: " + result[0].url);
	}
}
module.exports = ConvertTxtByControllingTrailingSpacesBehavior;
