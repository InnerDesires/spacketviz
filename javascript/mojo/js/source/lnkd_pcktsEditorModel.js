(function () {
    if (!mstrmojo.plugins.lnkd_pckts) {
        mstrmojo.plugins.lnkd_pckts = {};
    }

    mstrmojo.requiresCls(
        "mstrmojo.vi.models.editors.CustomVisEditorModel",
        "mstrmojo.array"
    );

    mstrmojo.plugins.lnkd_pckts.lnkd_pcktsEditorModel = mstrmojo.declare(
        mstrmojo.vi.models.editors.CustomVisEditorModel,
        null,
        {
            scriptClass: "mstrmojo.plugins.lnkd_pckts.lnkd_pcktsEditorModel",
            cssClass: "lnkd_pcktseditormodel",
            getCustomProperty: function getCustomProperty() {
                var $WT = mstrmojo.vi.models.editors.CustomVisEditorModel.WIDGET_TYPE;
                let props = [
                    {
                        name: 'Налаштування візуацізації',
                        value: [
                            {
                                style: $WT.EDITORGROUP,
                                items: [
                                    {
                                        style: $WT.LABEL,
                                        labelText: "Максимальна кількість найкоротших шляхів між сутностями"
                                    },
                                    {
                                        style: $WT.STEPPER,
                                        propertyName: "maxPathesCount",
                                        min: 1,
                                        max: 1000
                                    }
                                ]
                            }
                        ]
                    }
                ];
                return props;
            }
        })
}());
//@ sourceURL=lnkd_pcktsEditorModel.js