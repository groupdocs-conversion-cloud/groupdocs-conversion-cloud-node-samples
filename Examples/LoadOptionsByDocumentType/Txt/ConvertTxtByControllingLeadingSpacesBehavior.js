"use strict";
class ConvertTxtByControllingLeadingSpacesBehavior {
	static async Run() {
		
		let settings = new conversion_cloud.ConvertSettings();
		settings.filePath = "Text/sample.txt";
		settings.format = "pdf";

		let loadOptions = new conversion_cloud.TxtLoadOptions();
		loadOptions.leadingSpacesOptions = conversion_cloud.TxtLoadOptions.LeadingSpacesOptionsEnum.ConvertToIndent;
		loadOptions.detectNumberingWithWhitespaces = true;

		settings.loadOptions = loadOptions;
		settings.outputPath = "converted";

		let result = await convertApi.convertDocument(new conversion_cloud.ConvertDocumentRequest(settings));

		console.log("Document converted: " + result[0].url);
	}
}
module.exports = ConvertTxtByControllingLeadingSpacesBehavior;
