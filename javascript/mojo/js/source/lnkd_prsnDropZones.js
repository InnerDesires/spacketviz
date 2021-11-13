/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
(function () {
    if (!mstrmojo.plugins.lnkd_prsn) {
        mstrmojo.plugins.lnkd_prsn = {};
    }

    mstrmojo.requiresCls(
        'mstrmojo.vi.models.CustomVisDropZones',
        'mstrmojo.array'
    );

    mstrmojo.plugins.lnkd_prsn.lnkd_prsnDropZones = mstrmojo.declare(
        mstrmojo.vi.models.CustomVisDropZones,
        null,
        {
            scriptClass: 'mstrmojo.plugins.lnkd_prsn.lnkd_prsnDropZones',
            cssClass: 'lnkd_prsndropzones',
            getCustomDropZones: function getCustomDropZones() {
                return [
                    { //0
                        name: 'Код першої сутності',
                        maxCapacity: 1,
                        title: 'TRELP16_K021 Код Особи 1 + SHORTNAME1',
                        allowObjectType: 1
                    }, { //1
                        name: 'Назва першої сутності',
                        maxCapacity: 1,
                        title: 'K060_1 Тип пов\'язаних з банком осіб (alias1) + STATUS1',
                        allowObjectType: 1
                    }, { //2
                        name: 'Дата початку першої сутності',
                        maxCapacity: 1,
                        title: 'DATE_B',
                        allowObjectType: 1
                    }, { //3
                        name: 'Дата закінчення першої сутності',
                        maxCapacity: 1,
                        title: 'DATE_E',
                        allowObjectType: 1
                    }, { //4
                        name: 'Категорія першої сутності',
                        maxCapacity: 1,
                        title: 'K021_1_NodeCategory',
                        allowObjectType: 2
                    }, { //5
                        name: 'Код другої сутності',
                        maxCapacity: 1,
                        title: 'TRELP16_K021 Код Особи 2 + SHORTNAME1',
                        allowObjectType: 1
                    }, { //6
                        name: 'Назва другої сутності',
                        maxCapacity: 1,
                        title: 'K060_2 Тип пов\'язаних з банком осіб (alias2) + STATUS2',
                        allowObjectType: 1
                    },
                    {
                        name: 'Категорія другої сутності',
                        maxCapacity: 1,
                        title: 'K021_2_NodeCategory',
                        allowObjectType: 2
                    }, {
                        name: 'Дата початку',
                        maxCapacity: 1,
                        title: 'F_DATE_B',
                        allowObjectType: 1
                    }, {
                        name: 'Частка прямої участі',
                        maxCapacity: 1,
                        title: 'T0901',
                        allowObjectType: 2
                    }, {
                        name: 'Дата закінчення',
                        maxCapacity: 1,
                        title: 'F_DATE_E',
                        allowObjectType: 1
                    }, {
                        name: 'Категорія зв\'язку',
                        maxCapacity: 1,
                        title: 'F069_LinkCategory',
                        allowObjectType: 2
                    }, {
                        name: 'PARENT_TYPE',
                        maxCapacity: 1,
                        title: 'PARENT_TYPE',
                        allowObjectType: 1
                    }
                ];
            },
            shouldAllowObjectsInDropZone: function shouldAllowObjectsInDropZone(zone, dragObjects, idx, edge, context) {














            },
            getActionsForObjectsDropped: function getActionsForObjectsDropped(zone, droppedObjects, idx, replaceObject, extras) {














            },
            getActionsForObjectsRemoved: function getActionsForObjectsRemoved(zone, objects) {














            },
            getDropZoneContextMenuItems: function getDropZoneContextMenuItems(cfg, zone, object, el) {














            }
        });
}());
//@ sourceURL=lnkd_prsnDropZones.js