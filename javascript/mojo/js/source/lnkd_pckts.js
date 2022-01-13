/* eslint-disable no-undef */
(function () {
    if (!mstrmojo.plugins.lnkd_pckts) {
        mstrmojo.plugins.lnkd_pckts = {};
    }

    mstrmojo.requiresCls(
        'mstrmojo.CustomVisBase',
        'mstrmojo.models.template.DataInterface',
        'mstrmojo.vi.models.editors.CustomVisEditorModel'
    );

    mstrmojo.plugins.lnkd_pckts.lnkd_pckts = mstrmojo.declare(
        mstrmojo.CustomVisBase,
        null,
        {
            scriptClass: 'mstrmojo.plugins.lnkd_pckts.lnkd_pckts',
            cssClass: 'lnkd_pckts',
            errorMessage: 'Недостатньо даних для формування візуалізації або під час виконання скрипта сталася помилка ',
            errorDetails: 'Для роботи необхідно додати принаймні 1 атрибут та 1 метрику  ',
            externalLibraries: [{ url: 'file://../plugins/lnkd_pckts/javascript/mojo/js/source/3rdParty/go.js', forceReload: false },
            { url: 'file://../plugins/lnkd_pckts/javascript/mojo/js/source/3rdParty/searchbox.js' },
            { url: 'file://../plugins/lnkd_pckts/javascript/mojo/js/source/3rdParty/day.js' },
            { url: 'file://../plugins/lnkd_pckts/javascript/mojo/js/source/3rdParty/custom_parse_format.min.js' },
            { url: 'file://../plugins/lnkd_pckts/javascript/mojo/js/source/3rdParty/day_locale_uk.js' },
            { url: 'file://../plugins/lnkd_pckts/javascript/mojo/js/source/3rdParty/swal.js' },
            { url: 'file://../plugins/lnkd_pckts/javascript/mojo/js/source/images.js' },
            { url: 'file://../plugins/lnkd_pckts/javascript/mojo/js/source/commandsManager.js' },
            { url: 'file://../plugins/lnkd_pckts/javascript/mojo/js/source/dataProcessor.js' },
            { url: 'file://../plugins/lnkd_pckts/javascript/mojo/js/source/facade.js' }, { url: 'file://../plugins/lnkd_pckts/javascript/mojo/js/source/main.js' }, { url: 'file://../plugins/lnkd_pckts/javascript/mojo/js/source/graph.js' }, { url: 'file://../plugins/lnkd_pckts/javascript/mojo/js/source/attributes.js' }, { url: 'file://../plugins/lnkd_pckts/javascript/mojo/js/source/scenario.js' }, { url: 'file://../plugins/lnkd_pckts/javascript/mojo/js/source/renderer.js' }],
            useRichTooltip: false,
            reuseDOMNode: false,
            supportNEE: true,
            plot: function () {
                dayjs.extend(window.dayjs_plugin_customParseFormat);
                try {
                    this.addThresholdMenuItem();
                    g_mstr_api = this;
                    entryPoint(this);
                } catch (error) {
                    this.domNode.innerHTML = '';
                    this.domNode.parentNode.style.userSelect = '';
                    this.domNode.style.userSelect = 'all';
                    let err = document.createElement('p');
                    err.innerHTML = 'Помилка: ' + error;
                    let stack = document.createElement('p');
                    stack.innerHTML = error.stack;
                    this.domNode.appendChild(err);
                    this.domNode.appendChild(stack);
                }
            }
        });
}());
//@ sourceURL=lnkd_pckts.js