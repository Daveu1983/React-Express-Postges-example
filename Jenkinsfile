pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh "ls"
                sh "cd backend"
                sh "ls"
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