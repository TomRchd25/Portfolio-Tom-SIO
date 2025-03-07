function zoomDocument(type) {
    const modal = new bootstrap.Modal(document.getElementById('documentModal'));
    const imgElement = document.getElementById('fullDocument');
    
    if(type === 'cv') {
        imgElement.src = 'assets/img/cv-full.jpg';
    } else if(type === 'ldm') {
        imgElement.src = 'assets/img/ldm-full.jpg';
    }
    
    modal.show();
}

// Gestionnaire d'événement pour la fermeture du modal
document.getElementById('documentModal').addEventListener('hidden.bs.modal', function () {
    document.getElementById('fullDocument').src = '';
});
