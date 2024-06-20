var elems = document.getElementById('aheight');
var modelviewer = document.getElementById('aSide');

function generatecode() {
    var link = document.getElementById('link').value;

    if(link != '') {
    var copy = document.getElementById('copy');
    var generatedcode = document.getElementById('generatedcode');
    var modelviewer = document.getElementById('aSide');

    var code = `<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<script nomodule src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"></script>
<script src='https://kit.fontawesome.com/a076d05399.js'></script>
    
<div id="aSide">
    <!-- 3D objsect -->
    <!-- This inserts the 3D object inside the aside container -->
    <model-viewer src="${link}" alt="meal-box-rotation" auto-rotate ar ios-src="${link}" shadow-intensity="1" camera-controls touch-action="pan-y"></model-viewer>
</div>
        
        
<style>

    #aSide model-viewer{
        height: 100%;
        width: 100%;
        border: none;
    }

    @media (min-width: 1200px)  { /* PC */
        #aSide {
            height: ${pcheight()}; 
            width: ${pcwidth()}; 
        }
    }

    @media (min-width: 320px) and (max-width: 480px)  { /* mobile */
        #aSide {
            height: ${mobileheight()}; 
            width: ${mobilewidth()};
        }
    }
    
    
    @media (min-width: 480px) and (max-width: 640px)  { /* mobile rotated*/
        #aSide {
            height: ${mobilerheight()};
            width: ${mobilerwidth()};
        }
    }
    
    @media (min-width: 640px) and (max-width: 960px)  { /* tablet */
        #aSide {
            height: ${tabletheight()};
            width: ${tabletwidth()};
        }
    }
    
    @media (min-width: 960px) and (max-width: 1200px)  { /* tablet rotated */
        #aSide {
            height: ${tabletrheight()};
            width: ${tabletrwidth()};
        }
    }

</style>`;

    generatedcode.innerHTML = code;
    copy.classList.remove('inactive');
    modelviewer.innerHTML = `<model-viewer src="${link}" alt="meal-box-rotation" auto-rotate ar ios-src="${link}" shadow-intensity="1" camera-controls touch-action="pan-y"></model-viewer>`;
} else {
    var error = document.getElementById('generatebutton');
    error.classList.add('error');
    error.innerHTML = 'Укажите ссылку!';

    setTimeout(() => {
        error.classList.remove('error');
        error.innerHTML = 'Получить код';
    }, 2000);
}

}

function copycode() {
    var generatedcode = document.getElementById('generatedcode').textContent;
    navigator.clipboard.writeText(generatedcode);
    var copy = document.getElementById('copy');
    copy.classList.add('success');
    copy.innerHTML = 'Скопировано!';

    setTimeout(() => {
        copy.classList.remove('success');
        copy.innerHTML = 'Скопировать код';
    }, 2000);
}

function adaptives() {
    var adaptives = document.getElementById('adaptives');
    var adaptives = document.getElementById('adaptives');
    var main = document.getElementById('main');
    adaptives.style.display = 'block';
    main.style.display = 'none';
    // adaptive.setAttribute('onclick', 'adaptivesclose()');
}

function back() {
    var adaptives = document.getElementById('adaptives');
    var adaptives = document.getElementById('adaptives');
    var main = document.getElementById('main');
    adaptives.style.display = 'none';
    main.style.display = 'block';
    // adaptive.setAttribute('onclick', 'adaptivesclose()');
    modelviewer.classList.remove('selected-hg');
    modelviewer.classList.remove('selected-wd');
}

function adaptivesclose() {
    var adaptives = document.getElementById('adaptives');
    var adaptive = document.getElementById('adaptive');
    adaptives.style.display = 'none';
    adaptive.setAttribute('onclick', 'adaptives()');
}

function aheight() {
    modelviewer.classList.add('selected-hg');
    modelviewer.classList.remove('selected-wd');
}

function awidth() {
    modelviewer.classList.add('selected-wd');
    modelviewer.classList.remove('selected-hg');
}

function hw() {
    if(document.getElementById('pc-height').value != '' ) {
        modelviewer.style.height = `${document.getElementById('pc-height').value}px`;
    } 
}

function hw2() {
    if(document.getElementById('pc-width').value != '' ) {
        modelviewer.style.width = `${document.getElementById('pc-width').value}px`;
    } 
}

function hw3() {
    if(document.getElementById('mobile-width').value != '' ) {
        modelviewer.style.width = `${document.getElementById('mobile-width').value}px`;
    } 
}

function hw4() {
    if(document.getElementById('mobile-height').value != '' ) {
        modelviewer.style.height = `${document.getElementById('mobile-height').value}px`;
    } 
}

function hw5() {
    if(document.getElementById('mobiler-height').value != '' ) {
        modelviewer.style.height = `${document.getElementById('mobiler-height').value}px`;
    } 
}

function hw6() {
    if(document.getElementById('mobiler-width').value != '' ) {
        modelviewer.style.width = `${document.getElementById('mobiler-width').value}px`;
    } 
}

function hw7() {
    if(document.getElementById('tablet-height').value != '' ) {
        modelviewer.style.height = `${document.getElementById('tablet-height').value}px`;
    } 
}

function hw8() {
    if(document.getElementById('tablet-width').value != '' ) {
        modelviewer.style.width = `${document.getElementById('tablet-width').value}px`;
    } 
}

function hw9() {
    if(document.getElementById('tabletr-height').value != '' ) {
        modelviewer.style.height = `${document.getElementById('tabletr-height').value}px`;
    } 
}

function hw10() {
    if(document.getElementById('tabletr-width').value != '' ) {
        modelviewer.style.width = `${document.getElementById('tabletr-width').value}px`;
    } 
}

setInterval(() => {
    hw(); hw2(); hw3(); hw4(); hw5(); hw6(); hw7(); hw8(); hw9(); hw10();
}, 0);

function pcheight() {

    if (document.getElementById('pc-height').value != '') { 
        return document.getElementById('pc-height').value + 'px'; 
    } else { 
        return '400px'; 
    }
}

function pcwidth() {

    if (document.getElementById('pc-width').value != '') { 
        return document.getElementById('pc-width').value + 'px'; 
    } else { 
        return '400px'; 
    }
}

function mobilewidth() {

    if (document.getElementById('mobile-width').value != '') { 
        return document.getElementById('mobile-width').value + 'px'; 
    } else { 
        return '400px'; 
    }
}

function mobileheight() {

    if (document.getElementById('mobile-height').value != '') { 
        return document.getElementById('mobile-height').value + 'px'; 
    } else { 
        return '400px'; 
    }
}

function mobilerheight() {

    if (document.getElementById('mobiler-height').value != '') { 
        return document.getElementById('mobiler-height').value + 'px'; 
    } else { 
        return '400px'; 
    }
}

function mobilerwidth() {

    if (document.getElementById('mobiler-width').value != '') { 
        return document.getElementById('mobiler-width').value + 'px'; 
    } else { 
        return '400px'; 
    }
}

function tabletheight() {

    if (document.getElementById('tablet-height').value != '') { 
        return document.getElementById('tablet-height').value + 'px'; 
    } else { 
        return '400px'; 
    }
}

function tabletwidth() {

    if (document.getElementById('tablet-width').value != '') { 
        return document.getElementById('tablet-width').value + 'px'; 
    } else { 
        return '400px'; 
    }
}

function tabletrwidth() {

    if (document.getElementById('tabletr-width').value != '') { 
        return document.getElementById('tabletr-width').value + 'px'; 
    } else { 
        return '400px'; 
    }
}

function tabletrheight() {

    if (document.getElementById('tabletr-height').value != '') { 
        return document.getElementById('tabletr-height').value + 'px'; 
    } else { 
        return '400px'; 
    }
}

function loadtextures() {
    var modelviewer = document.getElementById('aSide');
    var link = document.getElementById('link').value;
    modelviewer.innerHTML = `<model-viewer src="${link}" alt="meal-box-rotation" auto-rotate ar ios-src="${link}" shadow-intensity="1" camera-controls touch-action="pan-y"></model-viewer>`;
}