function parseDate_ddmmyyyy(str) {
    if (!str) return null;
    const parts = str.trim().split('/');
    if (parts.length !== 3) return null;
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; 
    const year = parseInt(parts[2], 10);
    if (Number.isNaN(day) || Number.isNaN(month) || Number.isNaN(year)) return null;
    return new Date(year, month, day);
}

function parseDate_yyyy_mm_dd(str) {
    if (!str) return null;
    const parts = str.trim().split('-');
    if (parts.length !== 3) return null;
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    if (Number.isNaN(day) || Number.isNaN(month) || Number.isNaN(year)) return null;
    return new Date(year, month, day);
}

function sameDate(d1, d2) {
    if (!d1 || !d2) return false;
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate();
}

document.getElementById("btnFiltrar").onclick = () => {
    const obra = document.getElementById("filtroObra").value.trim().toLowerCase();
    const horas = document.getElementById("filtroHoras").value.trim().toLowerCase();
    const status = document.getElementById("filtroStatus").value.trim().toLowerCase();
    const dataInput = document.getElementById("filtroData").value;
    
    const dataFilter = parseDate_yyyy_mm_dd(dataInput);

    document.querySelectorAll("#tabelaCorpo tr").forEach((linha) => {
        
        const tObra = (linha.children[0]?.textContent || "").trim().toLowerCase();
        
        const tDataStr = (linha.children[1]?.textContent || "").trim();
        
        const tHoras = (linha.children[2]?.textContent || "").trim().toLowerCase();
        
        const tStatus = (linha.children[3]?.textContent || "").trim().toLowerCase();

        const tData = parseDate_ddmmyyyy(tDataStr);

        const matchObra = (obra === "" || tObra.includes(obra));
        const matchHoras = (horas === "" || tHoras.includes(horas));
        const matchStatus = (status === "" || tStatus.includes(status));
        const matchData = (dataFilter === null || (tData !== null && sameDate(tData, dataFilter)));

        const match = matchObra && matchHoras && matchStatus && matchData;
        linha.style.display = match ? "" : "none";
    });
};

document.getElementById("btnLimpar").onclick = () => {
    document.getElementById("filtroObra").value = "";
    document.getElementById("filtroHoras").value = "";
    document.getElementById("filtroStatus").value = "";
    document.getElementById("filtroData").value = "";

    document.querySelectorAll("#tabelaCorpo tr").forEach((linha) => {
        linha.style.display = "";
    });
};