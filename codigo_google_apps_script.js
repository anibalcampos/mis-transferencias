/**
 * Mis Transferencias — Google Apps Script
 *
 * CÓMO INSTALAR:
 * 1. Ir a https://sheets.google.com y crear una hoja nueva
 * 2. Extensiones → Apps Script
 * 3. Pegar este código
 * 4. Implementar → Nueva implementación → Aplicación web
 * 5. Acceso: "Cualquier usuario"
 * 6. Copiar la URL generada y pegarla en Mis Transferencias → "Probar conexión"
 */

const NOMBRE_HOJA = 'Transferencias';

function doGet(e) {
  if (e && e.parameter && e.parameter.action === 'ping') {
    return ContentService.createTextOutput(JSON.stringify({ ok: true }));
  }
  return ContentService.createTextOutput(JSON.stringify({ ok: false, error: 'Acción no válida' }));
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.action === 'save' && Array.isArray(data.gastos)) {
      guardarGastos(data.gastos);
      return ContentService.createTextOutput(JSON.stringify({ ok: true }));
    }
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: 'formato inválido' })
    );
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: err.message })
    );
  }
}

function guardarGastos(gastos) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(NOMBRE_HOJA);
  if (!sheet) {
    sheet = ss.insertSheet(NOMBRE_HOJA);
  }

  // Encabezados
  const headers = ['ID', 'Descripción', 'Categoría', 'Monto Total', 'Cuotas', 'Inicio'];

  // Armar filas
  const rows = gastos.map(g => [
    g.id,
    g.desc,
    g.cat,
    g.monto,
    g.cuotas,
    g.inicio
  ]);

  sheet.clear();
  const data = [headers, ...rows];
  sheet.getRange(1, 1, data.length, headers.length).setValues(data);

  // Formato encabezados
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#f3f3f3');

  // Auto-ajustar columnas
  for (let col = 1; col <= headers.length; col++) {
    sheet.autoResizeColumn(col);
  }
}
