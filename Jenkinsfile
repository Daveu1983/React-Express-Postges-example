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
                sh "cd backend"
                sh "npm test"
                sh "cd ../"
            }
        }
    }
}