const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');

/**
 * Exports a PDF file from JSON data using an EJS template.
 *
 * @param {Object} resumeData - The parsed JSON data.
 * @param {string} templatePath - The path to the EJS template.
 * @param {string} pdfOutputPath - The path for the output PDF file.
 * @param {Object} translations - Labels translation for the resume sections.
 * @param {string} lang - Language code (e.g. 'en-US' or 'pt-BR').
 */
async function exportJsonToPdf(resumeData, templatePath, pdfOutputPath, translations, lang) {
  // Ensure the output directory exists
  const outputDir = path.dirname(pdfOutputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`Created output directory: ${outputDir}`);
  }

  console.log(`Starting PDF export for: ${path.basename(pdfOutputPath)}`);

  let browser;
  try {
    // Read and compile the EJS template
    const templateStr = fs.readFileSync(templatePath, 'utf8');
    const compiledHtml = ejs.render(templateStr, {
      ...resumeData,
      translations,
      lang,
      resumeTitle: `Resume - ${resumeData.basics.name}`
    });

    // Launch a headless browser.
    browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    // Set the HTML content directly
    await page.setContent(compiledHtml, { waitUntil: 'networkidle0' });

    // Generate the PDF
    await page.pdf({
      path: pdfOutputPath,
      format: 'A4',
      printBackground: true, // Crucial for rendering background colors and styles
      margin: {
        top: '20px',
        right: '20px',
        bottom: '20px',
        left: '20px'
      }
    });

    console.log(`✅ Successfully exported PDF to: ${pdfOutputPath}`);
  } catch (error) {
    console.error(`❌ An error occurred during PDF generation for ${pdfOutputPath}:`, error.message);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// --- Main Execution ---
(async () => {
  const baseDir = path.join(__dirname, '..'); // Project root
  const outputDir = path.join(baseDir, 'public');
  const templatePath = path.join(baseDir, 'src', 'templates', 'resume-template.ejs');
  
  const dataEnPath = path.join(baseDir, 'src', 'data', 'resume-en.json');
  const dataBrPath = path.join(baseDir, 'src', 'data', 'resume-br.json');

  const resumeEn = JSON.parse(fs.readFileSync(dataEnPath, 'utf8'));
  const resumeBr = JSON.parse(fs.readFileSync(dataBrPath, 'utf8'));

  // Translations for the EJS template to replace hardcoded text
  const translationsEn = {
    summary: "Professional Summary",
    experience: "Professional Experience",
    education: "Education",
    certifications: "Certifications",
    phone: "Phone",
    email: "Email"
  };

  const translationsBr = {
    summary: "Resumo Profissional",
    experience: "Experiência Profissional",
    education: "Formação Acadêmica",
    certifications: "Certificações",
    phone: "Telefone",
    email: "Email"
  };

  // Export the English resume
  await exportJsonToPdf(
    resumeEn,
    templatePath,
    path.join(outputDir, 'Resume-Jose-Robson-Assis-EN.pdf'),
    translationsEn,
    'en-US'
  );

  // Export the Portuguese resume
  await exportJsonToPdf(
    resumeBr,
    templatePath,
    path.join(outputDir, 'Curriculo-Jose-Robson-Assis-BR.pdf'),
    translationsBr,
    'pt-BR'
  );
})();
