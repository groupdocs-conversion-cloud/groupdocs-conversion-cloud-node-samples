"use strict";
class ConvertToPdfAsync {
	static async Run() {
		
		let settings = new conversion_cloud.ConvertSettings();
		settings.filePath = "WordProcessing/password-protected.docx";
		settings.format = "pdf";

		let loadOptions = new conversion_cloud.WordProcessingLoadOptions();
		loadOptions.password = "password";

		settings.loadOptions = loadOptions;
		let convertOptions = new conversion_cloud.PdfConvertOptions();
		convertOptions.bookmarksOutlineLevel = 1;
		convertOptions.centerWindow = true;
		convertOptions.compressImages = false;
		convertOptions.displayDocTitle = true;
		convertOptions.dpi = 1024;
		convertOptions.expandedOutlineLevels = 1;
		convertOptions.fitWindow = false;
		convertOptions.fromPage = 1;
		convertOptions.grayscale = false;
		convertOptions.headingsOutlineLevels = 1;
		convertOptions.imageQuality = 100;
		convertOptions.linearize = false;
		convertOptions.marginTop = 5;
		convertOptions.marginLeft = 5;
		convertOptions.password = "password";
		convertOptions.unembedFonts = true;
		convertOptions.removeUnusedStreams = true;
		convertOptions.removeUnusedObjects = true;
		convertOptions.removePdfaCompliance = false;
		settings.convertOptions = convertOptions
		settings.outputPath = "converted";

		let operationId = await asyncApi.startConvertAndSave(new conversion_cloud.StartConvertAndSaveRequest(settings));

		console.log("Operaion ID: " + operationId);

		while (true) {
			await (async function() {
				const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
				await sleep(1000)				
				})()
			let result = await asyncApi.getOperationStatus(new conversion_cloud.GetOperationStatusRequest(operationId));
			if (result.status == conversion_cloud.OperationResult.StatusEnum.Finished)
			{
				console.log("Document converted successfully: " + result.result[0].url);
				break;
			}
			else if (result.status == conversion_cloud.OperationResult.StatusEnum.Failed) {
				console.log("Document converted failed: " + result.error);
				break;
			}
			else
			{
				console.log("Operation status: " + result.status);
			}
		}
	}
}
module.exports = ConvertToPdfAsync;
