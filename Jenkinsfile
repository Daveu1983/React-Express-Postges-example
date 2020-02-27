pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh "npm install --quiet"
            }
        }
        stage('test') {
            steps {
                sh "npm test"
            }
        }
    }
}