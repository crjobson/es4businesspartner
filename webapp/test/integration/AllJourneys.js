jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 BusinessPartnerSet in the list
// * All 3 BusinessPartnerSet have at least one ToSalesOrders

sap.ui.require([
	"sap/ui/test/Opa5",
	"c2g/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"c2g/test/integration/pages/App",
	"c2g/test/integration/pages/Browser",
	"c2g/test/integration/pages/Master",
	"c2g/test/integration/pages/Detail",
	"c2g/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "c2g.view."
	});

	sap.ui.require([
		"c2g/test/integration/MasterJourney",
		"c2g/test/integration/NavigationJourney",
		"c2g/test/integration/NotFoundJourney",
		"c2g/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});