jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"c2g/test/integration/NavigationJourneyPhone",
		"c2g/test/integration/NotFoundJourneyPhone",
		"c2g/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});