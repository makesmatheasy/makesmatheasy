pipeline{

  agent any
  
  stages {
    
    stage("build") {
      steps{
        echo "currently building application"
        publishHTML (target : [
          allowMissing: false,
          alwaysLinkToLastBuild: true,
          keepAll: true,
          reportDir: 'SCCProject',
          reportFiles: 'index.html',
          reportName: 'My Reports',
          reportTitles: 'The Report'])
      }
    }
    
     stage("test") {
      steps{
        echo "currently testing application"
      }
    }
    
     stage("deploy") {
      steps{
        echo "currently deploying application"      
      }
    }
    
    
  }
 
}
