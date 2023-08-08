// farbrad.js

const Farben = [
    {name: "Rot", hex: "#FF0000"},
    {name: "Orange", hex: "#FF7F00"},
    {name: "Gelb", hex: "#FFFF00"},
    {name: "Hellgrün", hex: "#7FFF00"},
    {name: "Grün", hex: "#00FF00"},
    {name: "Türkis", hex: "#00FF7F"},
    {name: "Cyan", hex: "#00FFFF"},
    {name: "Himmelblau", hex: "#007FFF"},
    {name: "Blau", hex: "#0000FF"},
    {name: "Violett", hex: "#7F00FF"},
    {name: "Magenta", hex: "#FF00FF"},
    {name: "Rosa", hex: "#FF007F"}
];

module.exports = {
    getFarben: function() {
        return Farben;
    },
    getBeziehung: function(farbeName) {
        let index = Farben.findIndex(f => f.name === farbeName);
        if (index === -1) return null;

        let komplementaerIndex = (index + (Farben.length / 2)) % Farben.length;
        return {
            aktuelleFarbe: Farben[index],
            komplementaerFarbe: Farben[komplementaerIndex]
        };
    }
};
