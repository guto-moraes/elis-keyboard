// const grades = [10.0, 5.0, 9.0]

// const media = grades.reduce( ( total, val ) => {
//     total = total + val
//     return total
// })

// console.log( `A nota média do discente foi ${( media / grades.length).toFixed(2)}` )

function setTextToCurrentPos() {
    const editorContent = document.querySelector(".main-content__box-editor")
    const cursorPointer = editorContent.selectionStart
    const button = document.querySelector('button').innerText
    editorContent.value = editorContent.value.slice(0, cursorPointer) + button + editorContent.value.slice(cursorPointer)
    console.log(editorContent.value.slice(cursorPointer))
}


//console.log( "Guto Moraes".charCodeAt(0) )

function range(start, end){
    end = end === undefined ? start : end 
    start = end === start ? 1 : start

    let length = end - start + 1

    const mapFn = (_, i) => start + i
    const array = Array.from( { length }, mapFn )

    return array
}

// const azList = range(65,90)

// const result = azList.map( num => String.fromCharCode(num) )

// console.log(result)


// const month = range(0,11).map( num => {
//     const date = new Date(0, num).toLocaleString('pt-BR', {month: 'long'}) 
//     return date
// })

// const raio = 15
// const area = Math.PI * Math.pow(raio, 2)
// console.log(area.toFixed(2))