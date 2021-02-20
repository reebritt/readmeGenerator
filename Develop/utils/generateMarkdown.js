// function to generate markdown for README
function generateMarkdown(data) {
  return `# Table of Contents
### PROJECT
### GITHUB
### EMAIL
### LICENSE
### DEPENDICIES
### REPO
### CONTRIBUTION

  ## PROJECT 
  ${data.project}

  ## GITHUB 
  ${data.github}

  ## EMAIL 
  ${data.email}

  ## LICENSE 
  ${data.license}

  ## DEPENDICIES 
  ${data.dependicies}

  ## REPO 
  ${data.repo}

  ## CONTRIBUTION 
  ${data.contribution}`; 
}

module.exports = generateMarkdown;
