sap.ui.define([
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.m.sample.ComboBoxSearchBoth.controller.ComboBoxSearchBoth", {

		onInit: function () {

			// set explored app's demo model on this sample
			// var oModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock/countriesExtendedCollection.json"));
			var oModel = new JSONModel();
			var data = {"CountriesCollection": [
						    {
						      "key": "DZ",
						      "text": "Algeria"
						    },
						    {
						      "key": "AR",
						      "text": "Argentina"
						    },
						    {
						      "key": "AU",
						      "text": "Australia"
						    },
						    {
						      "key": "AT",
						      "text": "Austria"
						    },
						    {
						      "key": "BH",
						      "text": "Bahrain"
						    },
						    {
						      "key": "BE",
						      "text": "Belgium"
						    }
			]};
			oModel.setData(data);
			oModel.setProperty("/comboBoxValue", "");
			oModel.setProperty("/comboBoxKey", "");
			this.getView().setModel(oModel);
		},

		fnFormatter: function(text, key) {
			var sText = "";

			if (text && key) {
				sText += (text + " (" + key + ")");
			} else if (text) {
				sText += text;
			} else if (key) {
				sText += key;
			}

			return sText;
		}
	});
});