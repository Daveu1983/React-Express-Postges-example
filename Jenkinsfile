pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh "cd backend"
                sh "npm install --quiet"
            }
        }
        stage('test') {
            steps {
                sh "npm test"
                sh "cd ../"
            }
        }
    }
}