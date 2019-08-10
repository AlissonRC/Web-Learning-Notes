function area(base, altura) {
    const area = base * altura
    if (area > 20) {
        console.log(`valor maior que o permitido: ${area} m2`)
    }
    else
        return area
}
area(10, 10)
console.log(area(2, 2))