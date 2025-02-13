let frutas = "Uvas";

switch (frutas) {
    case "Naranjas":
        console.log("Las naranjas cuestan $20 el Kg");
        break;
    case "Manzanas":
        console.log("Las manzanas cuestan $ 40 el Kg");
        break;
    case "Mangos":
        console.log("Los mangos cuestan $ 25 el Kg");
        break;
    case "Papayas":
        console.log("las papayas cuestan $ 15 el Kg");
        break;
    default:
        console.log(`Lo siento no contamos con  ${frutas}`);
}

console.log("Hay algo mas que desees?");