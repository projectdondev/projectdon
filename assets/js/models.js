// MODEL DETALS BOX ---------------------------------------------------------------------
var modal;
var modelTarget;
var getModelName;
var getModelName_title;
var id;

function triggerModalDetails(id) {
    getModelName = id;
    switch (getModelName) {
        case "amir":
            modelTarget = "modals/amir.html";
            $('#modal').iziModal('open');
            return 0;
        case "azfar":
            modelTarget = "modals/azfar.html";
            $('#modal').iziModal('open');
            return 0;
        case "bernard":
            modelTarget = "modals/bernard.html";
            $('#modal').iziModal('open');
            return 0;
        case "jeslinda-paul":
            modelTarget = "modals/jeslinda-paul.html";
            $('#modal').iziModal('open');
            return 0;
        case "marsya":
            modelTarget = "modals/marsya.html";
            $('#modal').iziModal('open');
            return 0;
        case "nadeera":
            modelTarget = "modals/nadeera.html";
            $('#modal').iziModal('open');
            return 0;
    }
}

$("#modal").iziModal({
    title: 'Model',
    subtitle: '',
    headerColor: 'green',
    background: null,
    theme: '', // light
    icon: null,
    iconText: null,
    iconColor: '',
    rtl: false,
    width: 1000,
    top: 20,
    bottom: null,
    borderBottom: true,
    padding: 0,
    radius: 3,
    zindex: 999,
    iframe: false,
    iframeHeight: 400,
    iframeURL: null,
    focusInput: true,
    group: '',
    loop: false,
    arrowKeys: true,
    navigateCaption: true,
    navigateArrows: true, // Boolean, 'closeToModal', 'closeScreenEdge'
    history: false,
    restoreDefaultContent: false,
    autoOpen: 0, // Boolean, Number
    bodyOverflow: false,
    fullscreen: false,
    openFullscreen: false,
    closeOnEscape: true,
    closeButton: true,
    appendTo: 'body', // or false
    appendToOverlay: 'body', // or false
    overlay: true,
    overlayClose: true,
    overlayColor: 'rgba(0, 0, 0, 0.4)',
    timeout: false,
    timeoutProgressbar: false,
    pauseOnHover: false,
    timeoutProgressbarColor: 'rgba(255,255,255,0.5)',
    transitionIn: 'comingIn',
    transitionOut: 'comingOut',
    transitionInOverlay: 'fadeIn',
    transitionOutOverlay: 'fadeOut',
    onFullscreen: function() {},
    onResize: function() {},
    onOpened: function() {},
    onClosing: function() {},
    onClosed: function() {},
    afterRender: function() {},
    onOpening: function(modal) {
        modal.startLoading();
        $.get(modelTarget, function(data) {
            $("#modal .iziModal-content").html(data);
            modal.stopLoading();
        });
    }

});

// MODEL DETALS BOX END---------------------------------------------------------------------