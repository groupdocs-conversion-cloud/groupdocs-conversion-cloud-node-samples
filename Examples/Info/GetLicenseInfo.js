"use strict";
class GetLicenseInfo {
	static async Run() {

		let response = await licenseApi.getLicenseInfo();
		console.log("IsLicensed = " + response.isLicensed);
	}
}
module.exports = GetLicenseInfo;
