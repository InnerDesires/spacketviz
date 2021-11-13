/* eslint-disable no-unused-vars */
const DECOMPOSED_ATTRIBUTES = {
    NODE1: {
        ID: 'id1',
        NAME: 'name1',
        RELATION: 'relation1',
        RELATION_EXPLANATION: 'relationExplanataion1',
        COLOR: 'nodeColor1',
        CATEGORY: 'nodeCategory1',
        BEGIN: 'nodeStartDate1',
        END: 'nodeEndDate1'
    },
    NODE2: {
        ID: 'id2',
        NAME: 'name2',
        RELATION: 'relation2',
        RELATION_EXPLANATION: 'relationExplanataion2',
        COLOR: 'nodeColor2',
        CATEGORY: 'nodeCategory2',
    },
    LINK: {
        TYPE: 'linkType',
        TYPE_EXPLANATION: 'linkExplanation',
        SHARE: 'linkShare',
        BEGIN: 'linkBegin',
        END: 'linkEnd',
        CATEGORY: 'linkCategory',
        COLOR: 'linkColor'
    },
    BANK: {
        TXT: 'rootBankName',
        NKB: 'rootBankID'
    }
};
function processData(me, data) {
    /**
     * @typedef {Object<string>} DataType
     * @property {string} name The name of the data type
     */
    const TYPES = {
        /**  @type {DataType} */
        METRIC: {
            name: 'Metric',
        },
        /** @type {DataType} */
        ATTRIBUTE: {
            name: 'Attribute',
        },
        /**  @type {DataType} */
        COMPLEX_ATTRIBUTE: {
            name: 'ComplexAttribute',
        }
    };

    const DROP_ZONES = {
        names: [
            /* 
                TODO: Check the position == priority of the "trasitionTo" array elements 
            */
            {
                name: 'Код першої сутності',
                expectedType: TYPES.COMPLEX_ATTRIBUTE,
                transitionTo: [DECOMPOSED_ATTRIBUTES.NODE1.ID],
            }, //0
            {
                name: 'Назва першої сутності',
                expectedType: TYPES.COMPLEX_ATTRIBUTE,
                transitionTo: [DECOMPOSED_ATTRIBUTES.NODE1.NAME]
            },//1
            {
                name: 'Дата початку першої сутності',
                expectedType: TYPES.COMPLEX_ATTRIBUTE,
                transitionTo: [DECOMPOSED_ATTRIBUTES.NODE1.BEGIN]
            }, // 2
            {
                name: 'Дата закінчення першої сутності',
                expectedType: TYPES.COMPLEX_ATTRIBUTE,
                transitionTo: [DECOMPOSED_ATTRIBUTES.NODE1.END]
            },//3
            {
                name: 'Категорія першої сутності',
                expectedType: TYPES.METRIC,
                transitionTo: [DECOMPOSED_ATTRIBUTES.NODE1.CATEGORY]
            },//4
            {
                name: 'Код другої сутності',
                expectedType: TYPES.COMPLEX_ATTRIBUTE,
                transitionTo: [DECOMPOSED_ATTRIBUTES.NODE2.ID]
            },//4
            {
                name: 'Назва другої сутності',
                expectedType: TYPES.COMPLEX_ATTRIBUTE,
                transitionTo: [DECOMPOSED_ATTRIBUTES.NODE2.NAME]
            },//6
            {
                name: 'Категорія другої сутності',
                expectedType: TYPES.METRIC,
                transitionTo: [DECOMPOSED_ATTRIBUTES.NODE2.CATEGORY]
            },//7
            {
                name: 'Дата початку',
                expectedType: TYPES.COMPLEX_ATTRIBUTE,
                transitionTo: [DECOMPOSED_ATTRIBUTES.LINK.BEGIN]
            },//8
            {
                name: 'Частка прямої участі',
                expectedType: TYPES.METRIC,
                transitionTo: [DECOMPOSED_ATTRIBUTES.LINK.SHARE]
            },//9
            {
                name: 'Дата закінчення',
                expectedType: TYPES.COMPLEX_ATTRIBUTE,
                transitionTo: [DECOMPOSED_ATTRIBUTES.LINK.END]
            },//10
            {
                name: 'Категорія зв\'язку',
                expectedType: TYPES.METRIC,
                parseThreshold: DECOMPOSED_ATTRIBUTES.LINK.COLOR,
                transitionTo: [DECOMPOSED_ATTRIBUTES.LINK.CATEGORY]
            },//11
            {
                name: 'PARENT_TYPE',
                expectedType: TYPES.COMPLEX_ATTRIBUTE,
                transitionTo: [DECOMPOSED_ATTRIBUTES.NODE2.CATEGORY]
            }//12
        ],
        byNameDynamic: {
            /* 
                TODO: Check the prosition == priority of the "trasitionTo" array elements 
            */
            'Код першої сутності': {
                expectedType: TYPES.COMPLEX_ATTRIBUTE,
                transitionTo: [DECOMPOSED_ATTRIBUTES.NODE1.ID],
            }, //0

            'Назва першої сутності': {
                expectedType: TYPES.COMPLEX_ATTRIBUTE,
                transitionTo: [DECOMPOSED_ATTRIBUTES.NODE1.NAME]
            },//1

            'Дата початку першої сутності': {
                expectedType: TYPES.COMPLEX_ATTRIBUTE,
                transitionTo: [DECOMPOSED_ATTRIBUTES.NODE1.BEGIN]
            },//2

            'Дата закінчення першої сутності': {
                expectedType: TYPES.COMPLEX_ATTRIBUTE,
                transitionTo: [DECOMPOSED_ATTRIBUTES.NODE1.END]
            },//2

            'Категорія першої сутності': {
                expectedType: TYPES.METRIC,
                transitionTo: [DECOMPOSED_ATTRIBUTES.NODE1.CATEGORY]
            },//3

            'Код другої сутності': {
                expectedType: TYPES.COMPLEX_ATTRIBUTE,
                transitionTo: [DECOMPOSED_ATTRIBUTES.NODE2.ID]
            },//4

            'Назва другої сутності': {
                expectedType: TYPES.COMPLEX_ATTRIBUTE,
                transitionTo: [DECOMPOSED_ATTRIBUTES.NODE2.NAME]
            },//5
            'Категорія другої сутності': {
                expectedType: TYPES.METRIC,
                transitionTo: [DECOMPOSED_ATTRIBUTES.NODE2.CATEGORY]
            },//7

            'Дата початку': {
                expectedType: TYPES.COMPLEX_ATTRIBUTE,
                transitionTo: [DECOMPOSED_ATTRIBUTES.LINK.BEGIN]
            },//8

            'Частка прямої участі': {
                expectedType: TYPES.METRIC,
                transitionTo: [DECOMPOSED_ATTRIBUTES.LINK.SHARE]
            },//9

            'Дата закінчення': {
                expectedType: TYPES.COMPLEX_ATTRIBUTE,
                transitionTo: [DECOMPOSED_ATTRIBUTES.LINK.END]
            },//10

            'Категорія зв\'язку': {
                expectedType: TYPES.METRIC,
                transitionTo: [DECOMPOSED_ATTRIBUTES.LINK.CATEGORY]
            },//11

            'PARENT_TYPE': {
                expectedType: TYPES.COMPLEX_ATTRIBUTE,
                transitionTo: [DECOMPOSED_ATTRIBUTES.NODE2.CATEGORY]
            }//12
        }
    };
    function clone(obj) {
        var copy;

        // Handle the 3 simple types, and null or undefined
        if (null == obj || 'object' != typeof obj) return obj;

        // Handle Date
        if (obj instanceof Date) {
            copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }

        // Handle Array
        if (obj instanceof Array) {
            copy = [];
            for (var i = 0, len = obj.length; i < len; i++) {
                copy[i] = clone(obj[i]);
            }
            return copy;
        }

        // Handle Object
        if (obj instanceof Object) {
            copy = {};
            for (var attr in obj) {
                // eslint-disable-next-line no-prototype-builtins
                if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
            }
            return copy;
        }

        throw new Error('Unable to copy obj! Its type isn\'t supported.');
    }
    function getZones() {
        return me.zonesModel.getDropZones().zones;
    }
    function parseZones(zones) {
        let resObj = {
            idDict: {}
        };

        DROP_ZONES.names.forEach(zoneName => {
            resObj[zoneName.name] = null;
        });

        if (zones.length !== DROP_ZONES.names.length) {
            throw new Error('Error, zones count incorrect');
        }

        for (let i = 0; i < DROP_ZONES.names.length; i++) {
            let zoneType = getZoneType(zones[i]);
            resObj[DROP_ZONES.names[i].name] = zoneType;
            if (zoneType) {
                resObj.idDict[zoneType.id] = zoneType;
                resObj.idDict[zoneType.id].zoneName = DROP_ZONES.names[i].name;
            }
        }
        return resObj;
    }
    /**
     * @typedef {Object} ZoneType 
     * @property {DataType} type DataType zone contains
     * @property {string} id Zone's ID
     * @property {string} propertyName Name of the property zone includes
     * @property {number} itemsCount 1 or in case of Complex Attribute - count of included attributes
     * 
     * @return { ZoneType }  Object<ZoneType> that contains information what data to expect in the zone 
     */
    function getZoneType(zone) {
        if (zone.items && zone.items.length == 1) {
            if (zone.items[0] && zone.items[0].fs) {
                if (zone.items[0].fs.length == 1) {
                    return {
                        type: TYPES.ATTRIBUTE,
                        id: zone.items[0].id,
                        propertyName: zone.items[0].n,
                        itemsCount: 1
                    };
                } else if (zone.items[0].fs.length > 1) {
                    return {
                        type: TYPES.COMPLEX_ATTRIBUTE,
                        id: zone.items[0].id,
                        propertyName: zone.items[0].n,
                        itemsCount: zone.items[0].fs.length
                    };
                }
            } else {
                return {
                    type: TYPES.METRIC,
                    id: zone.items[0].n,
                    propertyName: zone.items[0].n,
                    itemsCount: 1
                };
            }
        }
        // if zone is empty
        return null;
    }
    function checkConformity(zoneNamesArr, resObj) {
        let attributes = Object.keys(resObj).sort((a, b) => {
            return a > b;
        });
        zoneNamesArr.sort((a, b) => {
            return a > b;
        });

        if (attributes.length !== zoneNamesArr.length) {
            return false;
        }

        for (let i = 0; i < attributes.length; i++) {
            if (attributes[i] !== zoneNamesArr[i]) {
                return false;
            }
        }
        return true;
    }


    function processMstrData(mstrData, zones) {
        let resArr = [];
        mstrData.forEach((el) => {
            let templateObj = {};
            let byNameCopy = clone(DROP_ZONES.byNameDynamic);
            el.headers.forEach(header => {
                let currentZone = byNameCopy[zones.idDict[header.attributeSelector.tid].zoneName];
                let workingQueque = currentZone.transitionTo;
                if (workingQueque && workingQueque.length > 0) {
                    let attributeName = workingQueque.shift();
                    templateObj[attributeName] = header.name;
                }
            });
            el.values.forEach(value => {
                let currentZone = byNameCopy[zones.idDict[value.name].zoneName];
                let workingQueque = currentZone.transitionTo;
                if (workingQueque && workingQueque.length > 0) {
                    let attributeName = workingQueque.shift();
                    templateObj[attributeName] = value.rv;
                }

                if (typeof currentZone.parseThreshold === 'string' && value.threshold && value.threshold.fillColor) {

                    templateObj[currentZone.parseThreshold] = value.threshold.fillColor;
                }
            });
            resArr.push(templateObj);
        });
        return resArr;
    }


    let mstrZones = getZones();
    let zones = parseZones(mstrZones);


    return processMstrData(data, zones);
}