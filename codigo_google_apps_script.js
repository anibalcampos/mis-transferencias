const NOMBRE_HOJA = 'Transferencias';
const TOKEN = 'mi_token_secreto'; // CAMBIALO por algo solo tuyo

function autorizado_(token) {
  return token === TOKEN;
}

function doGet(e) {
  if (e && e.parameter && e.parameter.action === 'read') {
    if (!autorizado_(e.parameter.token)) {
      const err = JSON.stringify({ ok: false, error: 'No autorizado' });
      if (e.parameter.callback) {
        return ContentService.createTextOutput(e.parameter.callback + '(' + err + ')')
          .setMimeType(ContentService.MimeType.JAVASCRIPT);
      }
      return ContentService.createTextOutput(err);
    }
    const data = leerGastos();
    const payload = JSON.stringify({ ok: true, gastos: data });
    if (e.parameter.callback) {
      return ContentService.createTextOutput(e.parameter.callback + '(' + payload + ')')
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }
    return ContentService.createTextOutput(payload);
  }
  return ContentService.createTextOutput(JSON.stringify({ ok: false, error: 'Acción no válida' }));
}

function leerGastos() {
  const ss = getSpreadsheet_();
  const sheet = ss.getSheetByName(NOMBRE_HOJA);
  if (!sheet) return [];
  const data = sheet.getDataRange().getValues();
  if (data.length <= 1) return [];
  const headers = data[0];
  const idIdx = headers.indexOf('ID');
  const descIdx = headers.indexOf('Descripción');
  const catIdx = headers.indexOf('Categoría');
  const montoIdx = headers.indexOf('Monto Total');
  const cuotasIdx = headers.indexOf('Cuotas');
  const inicioIdx = headers.indexOf('Inicio');
  if (idIdx === -1) return [];
  const gastos = [];
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    gastos.push({
      id: row[idIdx],
      desc: row[descIdx] || '',
      cat: row[catIdx] || '',
      monto: Number(row[montoIdx]) || 0,
      cuotas: Number(row[cuotasIdx]) || 1,
      inicio: row[inicioIdx] || ''
    });
  }
  return gastos;
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (!autorizado_(data.token)) {
      return ContentService.createTextOutput(JSON.stringify({ ok: false, error: 'No autorizado' }));
    }
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

function getSpreadsheet_() {
  const files = DriveApp.getFilesByName('GastosCMR');
  if (files.hasNext()) {
    return SpreadsheetApp.open(files.next());
  }
  return SpreadsheetApp.create('GastosCMR');
}

function guardarGastos(gastos) {
  const ss = getSpreadsheet_();
  let sheet = ss.getSheetByName(NOMBRE_HOJA);
  if (!sheet) sheet = ss.insertSheet(NOMBRE_HOJA);
  const headers = ['ID', 'Descripción', 'Categoría', 'Monto Total', 'Cuotas', 'Inicio'];
  const rows = gastos.map(g => [g.id, g.desc, g.cat, g.monto, g.cuotas, g.inicio]);
  sheet.clear();
  const data = [headers, ...rows];
  sheet.getRange(1, 1, data.length, headers.length).setValues(data);
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#f3f3f3');
  for (let col = 1; col <= headers.length; col++) sheet.autoResizeColumn(col);
}
