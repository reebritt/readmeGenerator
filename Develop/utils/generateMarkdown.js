// function to generate markdown for README
function generateMarkdown(data) {
  return `## PROJECT 
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
