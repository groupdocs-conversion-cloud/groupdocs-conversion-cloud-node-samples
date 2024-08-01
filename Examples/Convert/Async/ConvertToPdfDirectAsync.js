"use strict";
class ConverToPdfDirectAsync {
	static async Run() {
		
		let file = fs.readFileSync('./Resources/WordProcessing/four-pages.docx');

		let request = new conversion_cloud.StartConvertRequest("pdf", file);

		let operationId = await asyncApi.startConvert(request);

		console.log("Operaion ID: " + operationId);

		while (true) {
			await (async function() {
				const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
				await sleep(1000)				
				})()
			let result = await asyncApi.getOperationStatus(new conversion_cloud.GetOperationStatusRequest(operationId));
			if (result.status == conversion_cloud.OperationResult.StatusEnum.Finished)
			{
				var response = await asyncApi.getOperationResult(new conversion_cloud.GetOperationResultRequest(operationId));
				console.log("Document converted successfully: " + response.length);
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
module.exports = ConverToPdfDirectAsync;
