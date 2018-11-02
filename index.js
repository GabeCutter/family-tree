//family-tree javascript

//family-member objects
var gabe = {
    firstName: "Gabe",
    lastName: "Cutter",
    age: 17,
    favoriteTVShow: "Stranger Things",
    favoriteSong: "I Write Sins Not Tragedies"
};
var john = {
    firstName: "John",
    lastName: "Cutter",
    age: 50,
    favoriteTVShow: "Blackadder",
    favoriteSong: "Escape (The Pina Colada Song)"
};
var alice = {
    firstName: "Alice",
    lastName: "Cutter",
    age: 49,
    favoriteTVShow: "The Flash",
    favoriteSong: "Shallow (A Star is Born)"
};
var ryan = {
    firstName: "Ryan",
    lastName: "Cutter",
    age: 13,
    favoriteTVShow: "Spongebob",
    favoriteSong: "Cake By The Ocean"
};
var olivia = {
    firstName: "Olivia",
    lastName: "Sun",
    age: 11,
    favoriteTVShow: "Henry Danger",
    favoriteSong: "Let It Go"
};

//family array
var family = [gabe, john, alice, ryan, olivia];

document.write("Everyone's favorite songs:<br>")
for(i = 0; i < family.length; i++) {
    document.write(family[i].firstName +" likes " +family[i].favoriteSong +"<br>");
}

//changing tvshows
function changeTVShow (data, newFavoriteTVShow) {
    data.favoriteTVShow = newFavoriteTVShow;
}

function sherlock() {
    for(i = 0; i < family.length; i++) {
        changeTVShow(family[i], "Sherlock");
    }
}

addEventListener("load", sherlock());

//reprint family array
document.write("<br>Everyone likes Sherlock now!<br>")
for(i = 0; i < family.length; i++) {
    document.write(family[i].firstName +" likes " +family[i].favoriteTVShow +"<br>");
}

//BONUS: reorder the family array by age
function reorder(array) {
    var familyCopy = array;
    var sortedFamily = [];
    var lowestAge = familyCopy[0];
    while(familyCopy.length > 0) {
        for(i = 0; i < familyCopy.length; i++) {
            if(familyCopy[i].age < lowestAge.age) {
                lowestAge = familyCopy[i];
            }
        }
        sortedFamily.push(lowestAge);
        familyCopy.splice(familyCopy.indexOf(lowestAge), 1); //splice(indexofstartingelement, #ofelementstoremove)
        lowestAge = familyCopy[0];
    }
    for(i = 0; i < sortedFamily.length; i++) {
        document.write(sortedFamily[i].firstName +"<br>");
    }
}

document.write("<br>Family sorted by age:<br>");
reorder(family);