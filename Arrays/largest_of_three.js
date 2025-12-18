function largestAmongThree(a, b, c) {
    let largest;

    if (a >= b && a >= c) {
        largest = a;
    } else if (b >= a && b >= c) {
        largest = b;
    } else {
        largest = c;
    }

    console.log("Largest number is:", largest);
}

largestAmongThree(10, 25, 15);
