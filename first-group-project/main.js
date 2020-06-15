const mainElement = document.querySelector('main')

const kata1heading = document.createElement('h1')
const kata1List = document.createElement('ul')
mainElement.append(kata1heading)
kata1heading.append('Kata 1')
for (let counter = 1; counter <= 20; counter += 1) {
    kata1List.innerHTML += ('<li>' + counter + '</li>')
    mainElement.append(kata1List)
}

const kata2heading = document.createElement('h1')
const kata2List = document.createElement('ul')
kata2heading.append('Kata 2')
mainElement.append(kata2heading)
for (let counter = 2; counter <= 20; counter += 2) {
    kata2List.innerHTML += ('<li>' + counter + '</li>')
    mainElement.append(kata2List)
}

const kata3heading = document.createElement('h1')
const kata3List = document.createElement('ul')
kata3heading.append('Kata 3')
mainElement.append(kata3heading)
for (let counter = 1; counter <= 20; counter += 2) {
    kata3List.innerHTML += ('<li>' + counter + '</li>')
    mainElement.append(kata3List)
}

const kata4heading = document.createElement('h1')
const kata4List = document.createElement('ul')
kata4heading.append('Kata 4')
mainElement.append(kata4heading)
for (let counter = 5; counter <= 20; counter += 5) {
    kata4List.innerHTML += ('<li>' + counter + '</li>')
    mainElement.append(kata4List)
}

const kata5heading = document.createElement('h1')
const kata5List = document.createElement('ul')
kata5heading.append('Kata 5')
mainElement.append(kata5heading)
for (let counter = 1; counter <= 10; counter += 1) {
    result = counter * counter
    kata5List.innerHTML += ('<li>' + result + '</li>')
    mainElement.append(kata5List)
}

const kata6heading = document.createElement('h1')
const kata6List = document.createElement('ul')
kata6heading.append('Kata 6')
mainElement.append(kata6heading)
for (let counter = 20; counter > 0; counter -= 1) {
    kata6List.innerHTML += ('<li>' + counter + '</li>')
    mainElement.append(kata6List)
}

const kata7heading = document.createElement('h1')
const kata7List = document.createElement('ul')
kata7heading.append('Kata 7')
mainElement.append(kata7heading)
for (let counter = 20; counter > 0; counter -= 2) {
    kata7List.innerHTML += ('<li>' + counter + '</li>')
    mainElement.append(kata7List)
}

const kata8heading = document.createElement('h1')
const kata8List = document.createElement('ul')
kata8heading.append('Kata 8')
mainElement.append(kata8heading)
for (let counter = 19; counter > 0; counter -= 2) {
    kata8List.innerHTML += ('<li>' + counter + '</li>')
    mainElement.append(kata8List)
}

const kata9heading = document.createElement('h1')
const kata9List = document.createElement('ul')
kata9heading.append('Kata 9')
mainElement.append(kata9heading)
for (let counter = 100; counter > 0; counter -= 5) {
    kata9List.innerHTML += ('<li>' + counter + '</li>')
    mainElement.append(kata9List)
}

const kata10heading = document.createElement('h1')
const kata10List = document.createElement('ul')
kata10heading.append('Kata 10')
mainElement.append(kata10heading)
for (let counter = 10; counter > 0; counter -= 1) {
    result = counter * counter
    kata10List.innerHTML += ('<li>' + result + '</li>')
    mainElement.append(kata10List)
}

const kata11heading = document.createElement('h1')
const kata11List = document.createElement('ul')
const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];
kata11heading.append('Kata 11')
mainElement.append(kata11heading)
for (let counter = 0; counter < sampleArray.length; counter += 1) {
    kata11List.innerHTML += ('<li>' + sampleArray[counter] + '</li>')
    mainElement.append(kata11List)
}

const kata12heading = document.createElement('h1')
const kata12List = document.createElement('ul')
kata12heading.append('Kata 12')
mainElement.append(kata12heading)
for (let counter = 0; counter < sampleArray.length; counter += 1) {
    if ((sampleArray[counter] % 2) === 0) {

        kata12List.innerHTML += ('<li>' + sampleArray[counter] + '</li>')
        mainElement.append(kata12List)
    }
}

const kata13heading = document.createElement('h1')
const kata13List = document.createElement('ul')
kata13heading.append('Kata 13')
mainElement.append(kata13heading)
for (let counter = 0; counter < sampleArray.length; counter += 1) {
    if ((sampleArray[counter] % 2) !== 0) {

        kata13List.innerHTML += ('<li>' + sampleArray[counter] + '</li>')
        mainElement.append(kata13List)
    }
}

const kata14heading = document.createElement('h1')
const kata14List = document.createElement('ul')
kata14heading.append('Kata 14')
mainElement.append(kata14heading)
for (let counter = 0; counter < sampleArray.length; counter += 1) {
    kata14List.innerHTML += ('<li>' + sampleArray[counter] * sampleArray[counter] + '</li>')
    mainElement.append(kata14List)
}

const kata15heading = document.createElement('h1')
const kata15List = document.createElement('ul')
kata15heading.append('Kata 15')
mainElement.append(kata15heading)
let kata15Result = 0
for (let counter = 0; counter <= 20; counter += 1) {
    kata15Result += counter
}
kata15List.innerHTML = kata15Result
mainElement.append(kata15List)

const kata16heading = document.createElement('h1')
const kata16List = document.createElement('ul')
kata16heading.append('Kata 16')
mainElement.append(kata16heading)
let kata16Result = 0
for (let counter = 0; counter < sampleArray.length; counter += 1) {
    kata16Result += sampleArray[counter]
    //kata16List.innerHTML += ('<li>' + sampleArray[counter] + sampleArray[counter] + '</li>')
}
kata16List.innerHTML = kata16Result
mainElement.append(kata16List)

const kata17heading = document.createElement('h1')
const kata17List = document.createElement('ul')
kata17heading.append('Kata 17')
mainElement.append(kata17heading)
let kata17Result = sampleArray[0]
for (let counter = 0; counter < sampleArray.length; counter += 1) {
    if (kata17Result > sampleArray[counter]) {
        kata17Result = sampleArray[counter]
    }
}
kata17List.innerHTML = kata17Result
mainElement.append(kata17List)

const kata18heading = document.createElement('h1')
const kata18List = document.createElement('ul')
kata18heading.append('Kata 18')
mainElement.append(kata18heading)
let kata18Result = sampleArray[0]
for (let counter = 0; counter < sampleArray.length; counter += 1) {
    if (kata18Result < sampleArray[counter]) {
        kata18Result = sampleArray[counter]
    }
}
kata18List.innerHTML = kata18Result
mainElement.append(kata18List)