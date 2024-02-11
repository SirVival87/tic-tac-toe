let fields = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
]

    function init() {
        render();
    }

    // Funktion zum Rendern des Spielfelds
    function render() {
        const contentDiv = document.getElementById('content');
        let tableHTML = '<table>';

        for (let i = 0; i < 3; i++) {
            tableHTML += '<tr>';
            for (let j = 0; j < 3; j++) {
                const index = i * 3 + j;
                tableHTML += `<td onclick="cellClicked(${index})">${getSymbol(fields[index])}</td>`;
            }
            tableHTML += '</tr>';
        }

        tableHTML += '</table>';
        contentDiv.innerHTML = tableHTML;
    }

    // Funktion, um das Symbol (X, O oder leer) für ein bestimmtes Spielfeld zu erhalten
    function getSymbol(value) {
        if (value === 'circle') {
            return 'O';
        } else if (value === 'cross') {
            return 'X';
        } else {
            return '';
        }
    }

    // Funktion, die aufgerufen wird, wenn ein Zelle geklickt wird
    function cellClicked(index) {
        // Hier kannst du die Logik für den Spielzug implementieren
        // Zum Beispiel, setze 'circle' oder 'cross' im `fields` Array für den ausgewählten Index
        // und rufe dann die `render()` Funktion auf, um das aktualisierte Spielfeld zu zeigen
        if (fields[index] === null) {
            fields[index] = 'circle'; // Beispiel für 'O', du kannst dies anpassen
            render();
        }
    }

    // Initialaufruf von render() nach dem Laden der Seite
    render();

