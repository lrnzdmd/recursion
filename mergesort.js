

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const index = Math.floor(array.length / 2);

    const firsthalf = mergeSort(array.slice(0, index));
    const secondhalf = mergeSort(array.slice(index));

    return merge(firsthalf, secondhalf);
}

function merge(array1, array2) {
    const mergedarr = [];

    while (array1.length > 0 && array2.length) {

        lowerarr = array1[0] < array2[0] ? array1 : array2;
        lowernumb = lowerarr.shift();

        mergedarr.push(lowernumb)
    }

    return mergedarr.concat(array1,array2);
}