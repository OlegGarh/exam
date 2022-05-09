let toggle = document.getElementById('toggle')
let toggleAct = document.getElementById('toggleAct');

toggleAct.style.display = 'none';



toggle.addEventListener('click', function funk(){
    toggleAct.style.display = 'block';
    toggle.addEventListener('click', function (){
        toggleAct.style.display = 'none';
        toggle.addEventListener('click', funk);
    });
});





