// MODEL DETALS BOX ---------------------------------------------------------------------
var modal;
var modal = new tingle.modal({
    footer: false,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function() {
        console.log('modal open');
    },
    onClose: function() {
        console.log('modal closed');
    },
    beforeClose: function() {
        return true; // close the modal
    }
});
var content = $('.tingle-modal-box__content').load('modals/test2.html');
modal.getContent(content);

$(".openBtn").on("click", function() {
    modal.open();
});
// MODEL DETALS BOX END---------------------------------------------------------------------