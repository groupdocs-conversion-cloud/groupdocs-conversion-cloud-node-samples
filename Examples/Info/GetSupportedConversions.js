"use strict";
class GetSupportedConversions {
	static async Run() {
		let response = await infoApi.getSupportedConversionTypes(new conversion_cloud.GetSupportedConversionTypesRequest());
		console.log("Formats count: " + response.length);
	}
}
module.exports = GetSupportedConversions;