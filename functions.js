var images = [];
window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
    if (this.files && this.files[0]) {
        var imgDiv = document.createElement("div");
        var imgDOM = document.createElement("img");
        imgDOM.src = URL.createObjectURL(this.files[0]);
        imgDOM.style.width = '75px';
        imgDOM.style.height = '75px';
        images.push(imgDOM.src);
        imgDiv.append(imgDOM);
        document.getElementById('untieredItems').append(imgDiv);
    }
    });
});

function saveList() {
    //var fileName = prompt("File name") + ".txt";
    var text = [];
    for (var tier of document.getElementById('tiers').children) {
    text.push(tier.innerText);
    for (var tierPics of tier.children[1].children) {
        text.push(tierPics.src);
    }
    }
    words = text.join(" ");
    var blob = new Blob([words], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "asd.txt");
}

/* Decides which letter for new tiers is next */
alphabetParse = 3;
/* Decides which placeholder new tier is next */
newTierParse = 3;
/* Decides which tier label color is next */
colorsParse = 3;

/** Initializes S tier sortable */
var sortPlace = document.getElementById('newTier-2Items');
new Sortable(sortPlace, {
    group: 'shared',
    animation: 75,
});
var labelPlace = document.getElementById('newTier-2Label');
labelPlace.style.width = '50px';
labelPlace.style.height = '50px';
labelPlace.style.padding = '.5em';
labelPlace.style.backgroundColor = '#DC143C';

/** Initializes A tier sortable */
sortPlace = document.getElementById('newTier-1Items');
new Sortable(sortPlace, {
    group: 'shared',
    animation: 75
});
labelPlace = document.getElementById('newTier-1Label');
labelPlace.style.width = '50px';
labelPlace.style.height = '50px';
labelPlace.style.padding = '.5em';
labelPlace.style.backgroundColor = '#2AFF22';

/** Initializes B tier sortable */
sortPlace = document.getElementById('newTier0Items');
new Sortable(sortPlace, {
    group: 'shared',
    animation: 75
});
labelPlace = document.getElementById('newTier0Label');
labelPlace.style.width = '50px';
labelPlace.style.height = '50px';
labelPlace.style.padding = '.5em';
labelPlace.style.backgroundColor = '#333BFF';


/** Initializes untiered items sortable */
sortPlace = document.getElementById('untieredItems');
var sortable2 = new Sortable(sortPlace, {
    group: 'shared',
    animation: 75
})

/**
 * Adds an item to the untiered items list
 */
function addItem() {
    var itemX = document.createElement("div");
    var itemText = prompt("Text to add");
    itemX.innerHTML = itemText;
    itemX.style.width = '75px';
    itemX.style.height = '75px';
    itemX.style.padding = '.5em';
    document.getElementById("untieredItems").append(itemX);
}

/**
 * Adds a new tier
 */
function addTier() {
    var tierX = document.getElementById(newTiers[newTierParse]);
    var tierXItems = document.getElementById(newTierItems[newTierParse]);
    tierXItems.style.width = '1000px';
    tierXItems.style.height = '75px';
    tierXItems.style.padding = '0.5em';
    var tierLabel = document.getElementById("newTier" + (newTierParse - 2) + "Label");
    newTierParse++;
    tierLabel.innerHTML = alphabet[alphabetParse] + " TIER";
    alphabetParse++;
    tierLabel.style.width = '50px';
    tierLabel.style.height = '50px';
    tierLabel.style.padding = '.5em';
    tierLabel.style.backgroundColor = labelColors[colorsParse];
    colorsParse++;
    var sortedTierX = new Sortable(tierXItems, {
    group: 'shared',
    animation: 75,
    });
}

function removeTier() {
    let tierX = document.getElementById(newTiers[newTierParse - 1]);
    tierX.children[0].innerHTML = "";
    var tierLabel = document.getElementById("newTier" + (newTierParse - 3) + "Label");
    removeStyles(tierLabel);
    newTierParse--;
    colorsParse--;
    alphabetParse--;
}

function removeStyles(el) {
el.removeAttribute('style');
    if(el.childNodes.length > 0) {
    for(var child in el.childNodes) {
        /* filter element nodes only */
        if(el.childNodes[child].nodeType == 1)
            removeStyles(el.childNodes[child]);
    }
    }
}

function changeTitle() {
    var newTitle = prompt("New title name");
    if (newTitle != null) {
    document.getElementById('tierTitle').innerHTML = "<h2>" + newTitle + "</h2>";
    }
}