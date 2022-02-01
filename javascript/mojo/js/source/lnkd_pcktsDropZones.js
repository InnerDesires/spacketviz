/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
(function () {
    if (!mstrmojo.plugins.lnkd_pckts) {
        mstrmojo.plugins.lnkd_pckts = {};
    }

    mstrmojo.requiresCls(
        'mstrmojo.vi.models.CustomVisDropZones',
        'mstrmojo.array'
    );

    mstrmojo.plugins.lnkd_pckts.lnkd_pcktsDropZones = mstrmojo.declare(
        mstrmojo.vi.models.CustomVisDropZones,
        null,
        {
            scriptClass: 'mstrmojo.plugins.lnkd_pckts.lnkd_pcktsDropZones',
            cssClass: 'lnkd_pcktsdropzones',
            getCustomDropZones: function getCustomDropZones() {
                return [
                    { //0
                        name: 'Код першої сутності',
                        maxCapacity: 1,
                        title: 'IDPS',
                        allowObjectType: 1
                    }, { //1
                        name: 'Назва першої сутності',
                        maxCapacity: 1,
                        title: 'IDPS NAME',
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
                        name: 'Счет колонки',
                        maxCapacity: 1,
                        title: 'K021_1_NodeCategory',
                        allowObjectType: 2
                    }, { //5
                        name: 'Код другої сутності',
                        maxCapacity: 1,
                        title: 'CHLD',
                        allowObjectType: 1
                    }, { //6
                        name: 'Назва другої сутності',
                        maxCapacity: 1,
                        title: 'CHLD NAME',
                        allowObjectType: 1
                    }, {
                        name: 'Дата початку другої сутності',
                        maxCapacity: 1,
                        title: 'F_DATE_B',
                        allowObjectType: 1
                    }, {
                        name: 'Дата закінчення другої сутності',
                        maxCapacity: 1,
                        title: 'F_DATE_E',
                        allowObjectType: 1
                    }, {
                        name: 'Тип другої сутності',
                        maxCapacity: 1,
                        title: 'CHLD TYPE',
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
//@ sourceURL=lnkd_pcktsDropZones.js