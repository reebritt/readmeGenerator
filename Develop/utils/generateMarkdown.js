// function to generate markdown for README
function generateMarkdown(data) {
  return `# PROJECT
  ${data.project}
  # GITHUB
  ${data.github}
  # EMAIL 
  ${data.email}
  # Licence
  ${data.license}
  # DEPENDICIES
  ${data.dependicies}
  # REPO
  ${data.repo}
  # ${data.contribution}`;
         
}

module.exports = generateMarkdown;
