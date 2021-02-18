// function to generate markdown for README
function generateMarkdown(data) {
  return ` 
         '# GITHUB'
          ${data.github};
        
         '#'
          ${data.email};
       
         '#'
          ${data.project};
        
         '#'
          ${data.license};
         
         '#'
          ${data.dependicies};
         
         '#'
          ${data.repo};
                
         '#'
          ${data.contribution}`
         
}

module.exports = generateMarkdown;
