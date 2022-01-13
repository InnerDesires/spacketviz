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
                        name: 'IDPS',
                        maxCapacity: 1,
                        title: 'TRELP16_K021 Код Особи 1 + SHORTNAME1',
                        allowObjectType: 1
                    }, { //1
                        name: 'IDPS NAME',
                        maxCapacity: 1,
                        title: 'K060_1 Тип пов\'язаних з банком осіб (alias1) + STATUS1',
                        allowObjectType: 1
                    }, { //2
                        name: 'DATE B',
                        maxCapacity: 1,
                        title: 'DATE_B',
                        allowObjectType: 1
                    }, { //3
                        name: 'DATE E',
                        maxCapacity: 1,
                        title: 'DATE_E',
                        allowObjectType: 1
                    }, { //4
                        name: 'Счет колонки',
                        maxCapacity: 1,
                        title: 'K021_1_NodeCategory',
                        allowObjectType: 2
                    }, { //5
                        name: 'CHLD',
                        maxCapacity: 1,
                        title: 'TRELP16_K021 Код Особи 2 + SHORTNAME1',
                        allowObjectType: 1
                    }, { //6
                        name: 'CHLD NAME',
                        maxCapacity: 1,
                        title: 'K060_2 Тип пов\'язаних з банком осіб (alias2) + STATUS2',
                        allowObjectType: 1
                    }, {
                        name: 'DATE BR',
                        maxCapacity: 1,
                        title: 'F_DATE_B',
                        allowObjectType: 1
                    }, {
                        name: 'DATE ER',
                        maxCapacity: 1,
                        title: 'F_DATE_E',
                        allowObjectType: 1
                    }, {
                        name: 'CHLD TYPE',
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